'use client'

import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import Swal from "sweetalert2"
import { Token } from "../Interfaces/TokenInterface"
import { FaCreditCard, FaHamburger } from "react-icons/fa";
import { UserMethod } from "../methods/UserMethod"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoAdd } from "react-icons/io5"

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
    let [user, setUser] = useState<any>(null)
    let [token, setToken] = useState<string | null>('')

    let [loadapi, setLoadAPI] = useState<boolean>(true)

    let [menu, setMenu] = useState<boolean>(false)


    const initial = async () => {
        const token: any = localStorage.getItem("token")

        if (token) {
            const user: any = jwtDecode(token)
            setUser(user)
        }

        setToken(token)
        setLoadAPI(false)
    }

    useEffect(() => {
        initial()
    }, [])

    if (loadapi) {
        return null
    }


    return (
        <div>

            {menu ? <div className="w-[250px] border-[1px] border-t-0 bg-white/90 shadow border-gray-300 fixed top-[60px] right-0 rounded-b-xl z-[1]">
                <div onClick={() => {
                    navigate.push("/")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-black font-[medium]">ภาพรวม</p>
                </div>
                <div onClick={() => {
                    navigate.push("/rental")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-black font-[medium]">เช่าสัญญาณ</p>
                </div>
                <div onClick={() => {
                    navigate.push("/signal")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-black font-[medium]">ห้องสัญญาณ</p>
                </div>
                <div onClick={() => {
                    navigate.push("/news/forex")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    {/* <HiMiniComputerDesktop size={20} className="text-white"></HiMiniComputerDesktop> */}
                    <p className="text-black font-[medium]">-</p>
                    <p className="text-black font-[medium] text-[12px]">ข่าวประจำวัน forexfactory</p>
                </div>
                <div onClick={() => {
                    navigate.push("/news/time")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    {/* <HiMiniComputerDesktop size={20} className="text-white"></HiMiniComputerDesktop> */}
                    <p className="text-black font-[medium]">-</p>
                    <p className="text-black font-[medium] text-[12px]">ข่าวประจำวัน tradertimezone</p>
                </div>
                <div onClick={() => {
                    navigate.push("/partner")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    {/* <HiMiniComputerDesktop size={20} className="text-white"></HiMiniComputerDesktop> */}
                    <p className="text-black font-[medium]">-</p>
                    <p className="text-black font-[medium] text-[12px]">Partner</p>
                </div>
                <div onClick={() => {
                    navigate.push("/learning/guidebook")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-black font-[medium]">คู่มือ</p>
                </div>
                <div onClick={() => {
                    navigate.push("/setting")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-black font-[medium]">ตั้งค่า</p>
                </div>

                {user ? user.role == 2 ? <div onClick={() => {
                    navigate.push("/admin/dashboard")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-black font-[medium]">แอดมิน</p>
                </div> : null : null}

                <div onClick={() => {
                    Swal.fire({ title: "ต้องการออกจากระบบ", showConfirmButton: true, showCancelButton: true, confirmButtonText: 'ออก', cancelButtonText: 'ยกเลิก', confirmButtonColor: '#cb4335', cancelButtonColor: '#e67e22' }).then((res) => {
                        if (res.isConfirmed) {
                            toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), { pending: 'กำลังออกจากระบบ', success: 'ออกจากระบบสำเร็จ' }, { type: 'success', hideProgressBar: true, closeButton: false, position: 'bottom-right' })
                            setTimeout(() => {
                                localStorage.removeItem('token')
                                window.location.href = "https://outwittrader.com/landingpage"
                            }, 1500)
                        }
                    })
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-black font-[medium]">ออกจากระบบ</p>
                </div>
            </div> : null}

            <div className="w-full h-[60px] bg-[#0e1111]  flex items-center p-[20px] justify-between fixed top-0 left-0 z-[1]">
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

                {token ? <div onClick={() => {
                    setMenu(!menu)
                }} className="max-[768px]:block hidden cursor-pointer">
                    <GiHamburgerMenu size={20} className="text-white"></GiHamburgerMenu>
                </div> : null}

            </div>
            <ToastContainer />
        </div>
    )
}

export default Header