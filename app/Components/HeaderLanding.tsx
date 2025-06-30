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
import { useScroll } from 'framer-motion'

interface UserInterface {
    id: number,
    username: string,
    role: number,
    status: number,
    total_days: number
}

const HeaderLanding = () => {

    const { scrollY } = useScroll()

    let navigate = useRouter()

    let [menuOpen, setMenuOpen] = useState<boolean>(false)
    // let [user, setUser] = useState<UserInterface[] | null>([])
    let [token, setToken] = useState<string | null>('')

    let [loadapi, setLoadAPI] = useState<boolean>(true)

    let [menu, setMenu] = useState<boolean>(false)

    let [scroll, setScroll] = useState<boolean>(false)


    const initial = async () => {
        const token = localStorage.getItem("token")

        setToken(token)
        setLoadAPI(false)
    }

    useEffect(() => {
        initial()

        scrollY.on("change", (current) => {
            console.log(current)
            if (current > 40) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])

    if (loadapi) {
        return null
    }


    return (
        <div>

            {menu ? <div className="w-full h-[100vh] bg-black/80 fixed top-[60px] left-0 z-[1]">
                <div onClick={() => {
                    navigate.push("/")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-white font-[medium]">ภาพรวม</p>
                </div>
                <div onClick={() => {
                    navigate.push("/rental")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-white font-[medium]">เช่าสัญญาณ</p>
                </div>
                <div onClick={() => {
                    navigate.push("/signal")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-white font-[medium]">ห้องสัญญาณ</p>
                </div>
                <div onClick={() => {
                    navigate.push("/news/forex")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    {/* <HiMiniComputerDesktop size={20} className="text-white"></HiMiniComputerDesktop> */}
                    <p className="text-white font-[medium]">-</p>
                    <p className="text-white font-[medium] text-[12px]">ข่าวประจำวัน forexfactory</p>
                </div>
                <div onClick={() => {
                    navigate.push("/news/time")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    {/* <HiMiniComputerDesktop size={20} className="text-white"></HiMiniComputerDesktop> */}
                    <p className="text-white font-[medium]">-</p>
                    <p className="text-white font-[medium] text-[12px]">ข่าวประจำวัน tradertimezone</p>
                </div>
                <div onClick={() => {
                    navigate.push("/partner")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    {/* <HiMiniComputerDesktop size={20} className="text-white"></HiMiniComputerDesktop> */}
                    <p className="text-white font-[medium]">-</p>
                    <p className="text-white font-[medium] text-[12px]">Partner</p>
                </div>
                <div onClick={() => {
                    navigate.push("/learning/guidebook")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-white font-[medium]">คู่มือ</p>
                </div>
                <div onClick={() => {
                    navigate.push("/setting")
                }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                    <p className="text-white font-[medium]">ตั้งค่า</p>
                </div>

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
                    <p className="text-white font-[medium]">ออกจากระบบ</p>
                </div>
            </div> : null}

            <div className={`w-full text-white  h-[80px] ${scroll ? 'bg-black/80' : 'bg-black/0'} duration-100  flex items-center p-[20px] justify-between fixed top-0 left-0 z-[20]`}>


                <div className="max-[600px]:hidden">
                    <img className="w-[40px]" src="/flag.png"></img>
                </div>

                <div onClick={() => {
                    navigate.push("/")
                }} className="flex justify-center items-center gap-[10px] cursor-pointer">
                    <img className="w-[40px] max-[600px]:hidden" src="/images/logo.webp"></img>
                    <div className="space-y-[-5px] flex items-baseline">
                        <p className=" font-[pmedium] text-[20px] max-[600px]:text-[16px]">OUTWIT</p>
                        <p className=" font-[pbold] text-[20px] max-[600px]:text-[16px]">TRADER</p>
                        {/* <p className="text-white font-[light] text-[10px]">ผู้ให้บริการปล่อยเช่าสัญญาน</p> */}
                    </div>
                </div>

                <div>

                    {!token ? <div className="flex gap-[10px]">
                        <p onClick={() => {
                            navigate.push('/login')
                        }} className=" font-[medium] text-[16px] cursor-pointer">เข้าสู่ระบบ</p>
                        <p className=" font-[medium] text-[16px] cursor-pointer">|</p>
                        <p onClick={() => {
                            navigate.push('/register')
                        }} className=" font-[medium] text-[16px] cursor-pointer">สมัครสมาชิก</p>
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

export default HeaderLanding