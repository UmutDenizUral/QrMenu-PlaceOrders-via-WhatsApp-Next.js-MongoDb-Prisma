'use client'
import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import {
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowEditStopReasons,
} from '@mui/x-data-grid'
import { useCallback, useEffect, useState } from 'react'
import { deleteObject, getStorage, ref } from 'firebase/storage'
import firebaseApp from '@/libs/firebase'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type UniqueCategoriesProps = {
    id: string
    name: string
    submenuId: string
}

//admin panel ürün yönetme 
export default function ManageClient({ products, restaurantData }: { products: any, restaurantData: any }) {
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
    const [rows, setRows] = useState<any>()
    const [submenuOption, setSubmenuOption] = useState([])
    const [categoryOption, setCategoryOption] = useState<UniqueCategoriesProps[]>([])
    const router = useRouter()
    const storage = getStorage(firebaseApp)

    //ürün yönetimi  kategori getirme
    const getCategory = (restaurantData: any) => {
        const uniqueCategories: UniqueCategoriesProps[] = []
        restaurantData.submenu.forEach((submenu: any) => {
            submenu.category.forEach((category: any) => {
                // Kategorinin daha önce eklenip eklenmediğini kontrol et
                const isCategoryExists = uniqueCategories.some(
                    (item) => item.id === category.id
                )
                // Eğer kategori mevcut değilse, benzersiz kategoriler dizisine ekle
                if (!isCategoryExists) {
                    uniqueCategories.push({
                        id: category.id,
                        name: category.name,
                        submenuId: category.submenuId
                    })
                }
            })
        })
        setCategoryOption(uniqueCategories);
    }
    useEffect(() => {
        if (products) {
            setRows(products.map((product: any) => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    category: product.category.name,
                    categoryId: product.category.id,
                    submenuId: product.submenu.id,
                    submenu: product.submenu.name,
                    image: product.image
                }
            }))
        }
        if (restaurantData) {
            console.log(restaurantData)
            const submenuOptions = restaurantData.submenu.map((item: any) => ({
                id: item.id,
                name: item.name
            }))
            setSubmenuOption(submenuOptions)
            getCategory(restaurantData)
        }

    }, [products, restaurantData])

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true
        }
    }

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
    }

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
    }

    const handleDeleteClick = useCallback(async (id: any) => {
        const userConfirmed = confirm('Bu ürünü silmek istediğinizden emin misiniz?')

        if (!userConfirmed) {
            toast('Silme işlemi iptal edildi.')
            return
        }
        toast.success('Silme işlemi devam ediyor...')
        const rowToDelete = rows.find((row: any) => row.id === id)
        if (rowToDelete) {
            const imageToDelete = rowToDelete.image
            console.log('Silinecek image:', imageToDelete)

            const handleDeleteImg = async () => {
                try {
                    const imageRef = ref(storage, imageToDelete)
                    await deleteObject(imageRef)
                } catch (error) {
                    console.log('Bir hata oluştu:', error)
                    return
                }
            }

            await handleDeleteImg()
            axios.delete(`/api/product/delete/${id}`)
                .then(() => {
                    toast.success('Silme işlemi başarılı!')
                    router.refresh()
                })
                .catch(error => {
                    console.error('Silme işlemi sırasında bir hata oluştu:', error)
                })
        }
    }, [rows, router, storage])

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        })

        const editedRow = rows.find((row: any) => row.id === id)
        if (editedRow!.isNew) {
            setRows(rows.filter((row: any) => row.id !== id))
        }
    }

    //Dataya güncelleyen func
    const processRowUpdate = async (newRow: GridRowModel) => {
        const updatedRow = { ...newRow };
    
        if (newRow.category == 'Bu alt menüye ait kategori seçemezsiniz') {
            toast.error('Kategori seçimi yanlış');
            return;
        }
    
        const selectedSubmenu: any = submenuOption.find((option: any) => option.name === newRow.submenu);
        if (selectedSubmenu) {
            updatedRow.submenuId = selectedSubmenu.id;
            updatedRow.submenu = selectedSubmenu.name;
        }
    
        const selectedCategory = categoryOption.find((category: any) => category.name === newRow.category);
        if (selectedCategory) {
            updatedRow.categoryId = selectedCategory.id;
        }
    
        setRows(rows.map((row: any) => (row.id === newRow.id ? updatedRow : row)));
    
        try {
            await axios.put(`/api/product/update/${updatedRow.id}`, updatedRow);
            toast.success('Güncelleme başarılı!');
        } catch (error) {
            console.error('Güncelleme sırasında bir hata oluştu:', error);
            toast.error('Güncelleme başarısız oldu!');
        }
    
        return updatedRow;
    };
    

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel)
    }
    const columns: GridColDef[] = [

        { field: 'name', headerName: 'Ürün Adı', width: 200, editable: true },
        { field: 'price', headerName: 'Fiyat', width: 120, editable: true },

        {
            field: 'submenu', headerName: 'Altmenü', width: 140, editable: true,
            type: 'singleSelect', valueOptions: submenuOption.map((item: any) => item.name)
        },
        {
            field: 'category', headerName: 'Kategori', width: 160, editable: true,
            type: 'singleSelect', valueOptions: (params: GridRowModel) => {
                const selectedSubmenu = params.row.submenuId;
                const filteredCategories = categoryOption.filter(
                    (category: any) => category.submenuId === selectedSubmenu
                );
                return filteredCategories.length === 0
                    ? ['Bu alt menüye ait kategori seçemezsiniz']
                    : filteredCategories.map((category: any) => category.name);

            },
        },
        { field: 'description', headerName: 'Açıklama', width: 330, editable: true },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Düzenle/Sil',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit
                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            key={`save-${id}`}
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            key={`cancel-${id}`}
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ]
                }
                return [
                    <GridActionsCellItem
                        key={`edit-${id}`}
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        key={`delete-${id}`}
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={() => handleDeleteClick(id)}
                        color="inherit"
                    />,
                ]
            },
        },
    ]

    return (
        <Box
            sx={{
                height: 600,
                width: '100%',
                '& .actions': {
                    color: 'text.secondary',
                },
                '& .textPrimary': {
                    color: 'text.primary',
                },
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
                sx={{
                    height: 600,
                    width: '100%',
                    '& .MuiDataGrid-cell': {
                        borderRight: '1px solid #e0e0e0', // Hücreler arasındaki dikey çizgi
                    },
                    '& .MuiDataGrid-row': {
                        borderBottom: '1px solid #e0e0e0', // Hücreler arasındaki yatay çizgi
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        borderBottom: '2px solid #e0e0e0', // Başlık satırı altındaki çizgi
                    },
                    '& .MuiDataGrid-columnSeparator': {
                        display: 'none', // Kolon başlıkları arasındaki ayracı gizlemek için
                    }
                }}
            />
        </Box>
    )
}
