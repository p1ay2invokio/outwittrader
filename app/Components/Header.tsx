'use client'

import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import Swal from "sweetalert2"
import { Token } from "../Interfaces/TokenInterface"
import { FaCreditCard } from "react-icons/fa";
import { UserMethod } from "../methods/UserMethod"

interface UserInterface {
    id: number,
    username: string,
    role: number,
    status: number,
    total_days: number
}

const Header = () => {

    let navigate = useRouter()

    let [menuOpen, setMenuOpen] = useState<boolean>(false)
    // let [user, setUser] = useState<UserInterface[] | null>([])
    let [token, setToken] = useState<string | null>('')


    const initial = async () => {
        const token = localStorage.getItem("token")

        setToken(token)
    }

    useEffect(() => {
        initial()
    }, [])


    return (
        <div>
            <div className="w-full h-[60px] bg-[#0e1111]  flex items-center p-[20px] justify-between fixed top-0 left-0 z-[6]">
                <div onClick={() => {
                    navigate.push("/")
                }} className="flex justify-center items-center gap-[10px] cursor-pointer">
                    <img className="w-[40px]" src="/images/logo.webp"></img>
                    <div className="space-y-[-5px]">
                        <p className="text-white font-[pbold] text-[20px] max-[600px]:text-[16px]">OutwitTrader</p>
                        <p className="text-white font-[light] text-[10px]">ผู้ให้บริการปล่อยเช่าสัญญาน</p>
                    </div>
                </div>

                <div>

                    {!token ? <div className="flex gap-[10px]">
                        <p onClick={() => {
                            navigate.push('/login')
                        }} className="text-white font-[light] text-[14px] cursor-pointer">เข้าสู่ระบบ</p>
                        <p className="text-white font-[light] text-[14px] cursor-pointer">|</p>
                        <p onClick={() => {
                            navigate.push('/register')
                        }} className="text-white font-[light] text-[14px] cursor-pointer">สมัครสมาชิก</p>
                    </div> : null}
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Header