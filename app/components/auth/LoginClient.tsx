'use client'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from "../container/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import { FaGoogle } from "react-icons/fa"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { User } from "next-auth"
import { useEffect } from "react"

interface LoginClientProps {
    currentUser: User | null | undefined
}
//Kullanıcı girişi formu
const LoginClient: React.FC<LoginClientProps> = ({ currentUser }) => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            console.log(callback)
            if (callback?.ok) {
                router.push('/')
                router.refresh()
                toast.success('Login işlemi başarılı')
            }
            if (callback?.error) {
                toast.error(callback.error)
            }
        })
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
                <Heading text="Giriş Yap" center />
                <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
                <Input  placeholder="Parola" type="password" id="password" register={register} errors={errors} required />
                <Button text="Giriş Yap" onClick={handleSubmit(onSubmit)} />
                <div className="text-center my-2 text-sm text-red-400">Daha önce Kayıt olmadıysa <Link className="underline" href='/register'>buraya tıkla</Link></div>
                <div className="text-center my-2 text-lg font-bold">OR</div>
                <Button text="Google ile Giriş Yap" icon={FaGoogle} outline onClick={()=>signIn('google')} />
            </div>
        </AuthContainer>
    )
}

export default LoginClient