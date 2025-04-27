'use client'
import { useEffect, useState } from "react";
import { FaCartShopping, FaX, FaXTwitter } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoAdd, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { UserMethod } from "../methods/UserMethod";
import { UserInterface } from "../Interfaces/UserInterface";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";

const LeftSide = () => {

    const navigate = useRouter()

    const [User, setUser] = useState<UserInterface | null>(null)
    let [loadapi, setLoadAPI] = useState<boolean>(true)

    const initial = async () => {
        const token = localStorage.getItem("token")
        let dat = token ? await new UserMethod().getUserAccounts(token) : null

        // console.log(dat)
        setUser(dat)
        setLoadAPI(false)
    }

    useEffect(() => {
        initial()
    }, [])

    if (loadapi) {
        return null
    }

    return (
        <div className="w-[200px] h-[calc(100vh-80px)] fixed left-0 top-[60px] bg-slate-900 max-[768px]:hidden flex flex-col justify-between">
            <div>
                <div className="w-full p-[10px] bg-gradient-to-b from-blue-300 to-blue-900">

                    <div className="flex flex-col justify-center items-center w-full h-[100px] pt-[30px] font-[medium]">
                        <img className="rounded-full w-[80px]" src="/avatar.webp"></img>
                        <p className="text-white mt-[10px] text-[14px] font-[pbold]">{User?.username}</p>
                    </div>

                    <div className="flex flex-col justify-start mt-[30px] mb-[10px] items-start w-full pl-[20px] text-white font-[light] text-[12px]">
                        <p className="font-[plight] text-[12px]">ID : {User?.id}</p>
                        <p className="font-[plight] text-[12px]">{User?.email}</p>
                        <p className="font-[plight] text-[12px]">Date : {User?.total_days}</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-black font-[pbold] rounded-[8px] flex justify-center items-center gap-[5px] p-[4px] text-[12px]">
                            <p className="text-white">Status</p>
                            <div className={`p-[3px] ${User?.role == 0 ? "bg-gray-500" : User?.role == 1 ? "bg-blue-700" : User?.role == 2 ? "bg-purple-500" : "Normal"} rounded-[4px]`}>
                                <p className="text-white">{User?.role == 0 ? "Normal" : User?.role == 1 ? "Member" : User?.role == 2 ? "Admin" : "Normal"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[300px] bg-slate-900 text-[14px] overflow-scroll">
                    <div onClick={() => {
                        navigate.push("/")
                    }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                        <GoGraph size={20} className="text-white"></GoGraph>
                        <p className="text-white font-[medium]">ภาพรวม</p>
                    </div>
                    <div onClick={() => {
                        navigate.push("/rental")
                    }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                        <FaCartShopping size={20} className="text-white"></FaCartShopping>
                        <p className="text-white font-[medium]">เช่าสัญญาณ</p>
                    </div>
                    <div onClick={() => {
                        navigate.push("/signal")
                    }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                        <HiMiniComputerDesktop size={20} className="text-white"></HiMiniComputerDesktop>
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
                        <GiSchoolBag size={20} className="text-white"></GiSchoolBag>
                        <p className="text-white font-[medium]">คู่มือ</p>
                    </div>
                    <div onClick={() => {
                        navigate.push("/setting")
                    }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                        <IoSettingsSharp size={20} className="text-white"></IoSettingsSharp>
                        <p className="text-white font-[medium]">ตั้งค่า</p>
                    </div>
                    {User ? User.role == 2 ? <div onClick={() => {
                        navigate.push("/admin/dashboard")
                    }} className="flex w-full h-[40px] justify-start items-center p-[20px] cursor-pointer gap-[10px]">
                        <IoAdd size={20} className="text-white"></IoAdd>
                        <p className="text-white font-[medium]">แอดมิน</p>
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
                        <MdOutlineLogout size={20} className="text-white"></MdOutlineLogout>
                        <p className="text-white font-[medium]">ออกจากระบบ</p>
                    </div>

                </div>
            </div>

            <div className="w-full h-[60px] flex justify-center items-center gap-[5px] ">
                <FaDiscord onClick={() => {
                    window.open("https://discord.gg/MVj5YnsMNM", "_blank")
                }} size={20} className="text-white cursor-pointer"></FaDiscord>
                <FaFacebook onClick={() => {
                    window.open("https://www.facebook.com/61567387295104", "_blank")
                }} size={20} className="text-white cursor-pointer"></FaFacebook>
                <FaTiktok onClick={() => {
                    window.open("https://www.tiktok.com/@outwittrader?_t=ZS-8vszA4fXzXE&_r=1", "_blank")
                }} size={20} className="text-white cursor-pointer"></FaTiktok>
                <FaXTwitter onClick={() => {
                    window.open("https://x.com/OutwitThai?s=09", "_blank")
                }} className="text-white cursor-pointer" size={20}></FaXTwitter>
                <FaYoutube onClick={() => {
                    window.open("https://www.youtube.com/@OutwitTrade", "_blank")
                }} size={20} className="text-white cursor-pointer"></FaYoutube>
            </div>

            <ToastContainer />
        </div>
    )
}

export default LeftSide