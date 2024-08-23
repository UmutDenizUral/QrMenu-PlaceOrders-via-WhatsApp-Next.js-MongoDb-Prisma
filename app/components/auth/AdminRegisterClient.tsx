'use client'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from "../container/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import Link from "next/link"
import axios from "axios"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { User } from "next-auth"
import { useEffect, useState } from "react"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "@/libs/firebase";
interface RegisterClientProps {
    currentUser: User | null | undefined
}
//Yeni restoran ve admin açma formu 
const AdminRegisterClient: React.FC<RegisterClientProps> = ({ currentUser }) => {
    const [img, setImg] = useState<any>(null)
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        let uploadedImg;
        //firebase foto yükleme ve foto linki alma
        const handleChange = async () => {
            toast.success('Yükleme işlemi basarılı !!!')
            try {
                const storage = getStorage(firebaseApp);
                const storageRef = ref(storage, `restrauntImages/${data.name}_${data.category}.jpg`);
                const uploadTask = uploadBytesResumable(storageRef, img);
                await new Promise<void>((resolve, reject) => {
                    uploadTask.on('state_changed',
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                            }
                        },
                        (error) => {
                            reject(error)
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                console.log('File available at', downloadURL);
                                uploadedImg = downloadURL;
                                resolve()
                            }).catch((error) => {
                                console.log(error)
                            });
                        }
                    );
                })
            } catch (error) {
                console.log(img)

                console.log(error)
            }
        }
        await handleChange()

        let newData = { ...data, image: uploadedImg }
        //datayı gönderme işlemi
        axios.post('/api/adminRegister', newData).then(() => {
            console.log('Login Client axios post yaptı Çalıştı')

            toast.success('kullanıcı oluşturuldu')
            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback) => {
                console.log('Login Client İÇİNDE SİGN İN çalıştı')

                if (callback?.ok) {
                    router.push('/')
                    router.refresh()
                    toast.success('Login işlemi başarılı')
                }
                if (callback?.error) {
                    toast.error(callback.error)
                }
            })
        })
    }
    const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0])
        }
    }
    useEffect(() => {
        if (currentUser) {
            router.push('/')
            router.refresh()
        }
    }, [currentUser,router])
    return (
        <AuthContainer>
            <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
                <Heading text="Restoran Aç" center />
                <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required />
                <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
                <Input placeholder="Parola" type="password" id="password" register={register} errors={errors} required />
                <Input placeholder="Restoran Adı" type="text" id="restaurantName" register={register} errors={errors} required />
                <Input placeholder="İl" type="text" id="city" register={register} errors={errors} required />
                <Input placeholder="İlçe" type="text" id="district" register={register} errors={errors} required />
                <Input placeholder="Telefon numarası" type="text" id="phone" register={register} errors={errors} required />
                <input className="my-2" type="file" onChange={onChangeFunc} />
                <Button text="Kayıt Ol" onClick={handleSubmit(onSubmit)} />
                <div className="text-center my-3 text-sm text-red-400">Hesabın varsa <Link className="underline" href='/login'>buraya tıkla</Link></div>
            </div>
        </AuthContainer>
    )
}
export default AdminRegisterClient