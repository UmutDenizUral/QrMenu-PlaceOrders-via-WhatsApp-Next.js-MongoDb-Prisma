'use client'
import { Product } from '@prisma/client'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useCallback } from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import firebaseApp from '@/libs/firebase';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface ManageClientProps {
    products: Product[]
    categories:any
}
const ManageClient: React.FC<ManageClientProps> = ({ products ,categories }) => {
    const router = useRouter()
    const storage = getStorage(firebaseApp)
    let rows: any = []
    console.log(categories)
    if (products) {
        rows = products.map((product) => {
            const category =  categories?.find(item=> item.id == product.categoryId)
            const categoryName = category?.name || 'Kategori Bulunamadı'
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                categoryId: categoryName,
                submenu: product.submenu,
                image: product.image
            }
        })
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'categoryId', headerName: 'Category', width: 200 },
        { field: 'submenu', headerName: 'Submenu', width: 200 },
        {
            field: 'actions',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <button onClick={() => handleDelete(params.row.id, params.row.image)} className='flex justify-center mx-4 text-red-500 cursor-pointer '>sil</button>
                )
            }
        },
    ]
    const handleDelete = useCallback(async (id: string, image: any) => {
        toast.success('silme için bekleyin')
        const handleDeleteImg = async () => {
            try {
                const imageRef = ref(storage, image)

                await deleteObject(imageRef)
            } catch (error) {
                return console.log('bir hata var')
            }
        }
        await handleDeleteImg()
        axios.delete(`/api/product/${id}`)
            .then(() => {
                toast.success('silme başarılı')
                router.refresh()
            })
    }, [rows, storage, router])

    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
                checkboxSelection
            />
        </div>
    )
}

export default ManageClient