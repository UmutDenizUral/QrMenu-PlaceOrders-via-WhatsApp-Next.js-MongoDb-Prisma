'use client'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from "../container/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"
import axios from "axios"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { User } from "next-auth"
import { useEffect } from "react"

interface RegisterClientProps {
    currentUser: User | null | undefined
}

const AdminRegisterClient: React.FC<RegisterClientProps> = ({ currentUser }) => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<FieldValues>()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('api/adminRegister', data).then(() => {
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
    useEffect(() => {
        if (currentUser) {
            router.push('/')
            router.refresh()
        }
    }, [])
    return (
        <AuthContainer>
            <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
                <Heading text="Register" center />
                <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required />
                <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
                <Input placeholder="Parola" type="password" id="password" register={register} errors={errors} required />
                <Input placeholder="Restoran Adı" type="text" id="restaurantName" register={register} errors={errors} required />
                <Button text="Kayıt Ol" onClick={handleSubmit(onSubmit)} />
                <div className="text-center my-2 text-sm text-red-400">Hesabın varsa <Link className="underline" href='/login'>buraya tıkla</Link></div>
                <div className="text-center my-2 text-lg font-bold">OR</div>
                <Button text="Google ile üye ol" icon={FaGoogle} outline onClick={() => signIn('google')} />
            </div>
        </AuthContainer>
    )
}

export default AdminRegisterClient