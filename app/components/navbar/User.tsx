"use client"
import { User } from "@prisma/client"
import { useState, useEffect, useRef } from "react"
import { AiOutlineUser } from 'react-icons/ai'
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

interface UserProps {
  currentUser: User | null | undefined
}

const User: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null) // Ref ekleme

  // Menü kapalıyken tıklama olayını dinlemek için useEffect
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Menü fonksiyonu
  const menuFunc = (type: any) => {
    setOpenMenu(false)
    if (type == "logout") {
      signOut();
      router.push("/login")
    } else if (type == "register") {
      router.push("/register")
    } else {
      router.push("/login")
    }
  }
  return (
    <div className="hidden md:flex relative">
      <div onClick={() => setOpenMenu(!openMenu)} className="flex items-center gap-2 cursor-pointer text-yellow-600">
        <AiOutlineUser className="text-white" size="30" />
      </div>
      {
        openMenu && (
          <div ref={menuRef} className="absolute w-[150px] z-20 top-10 bg-white shadow-lg right-0 p-2 rounded-md">
            {
              currentUser ? (
                <div className="space-y-1">
                  {currentUser.role === 'ADMIN' ?
                    <div onClick={() => router.push('/admin')} className="text-slate-600 cursor-pointer">Admin</div>
                    : <div onClick={() => router.push('/')} className="text-slate-600 cursor-pointer">{currentUser ? currentUser.name : "User"}</div>}
                  <div onClick={() => menuFunc("logout")} className="text-slate-600 cursor-pointer">Çıkış Yap</div>
                </div>
              ) : (
                <div>
                  <div onClick={() => menuFunc("login")} className="text-slate-600 cursor-pointer mb-2 hover:text-yellow-600">Giriş Yap</div>
                  <div onClick={() => menuFunc("register")} className="text-slate-600 cursor-pointer mb-2 hover:text-yellow-600 ">Kayıt Ol</div>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default User
