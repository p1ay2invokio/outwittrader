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
    let [user, setUser] = useState<UserInterface[]>([])


    const initial = async (token: string) => {
        let res = await new UserMethod().getUserAccounts(token)

        setUser([res])
    }

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            initial(token)
        }
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

                    {user && user.length > 0 ? <div className="flex items-center gap-[10px]">

                        <div className="flex flex-col items-end text-white max-[600px]:hidden">
                            <div className="flex gap-[5px] items-center">
                                <p className="font-[light] text-[14px]  ">สวัสดี! คุณ {user[0].username}</p>
                                <p className="font-[light] text-[12px]">ID: {user[0].id}</p>
                            </div>
                            <div className="flex gap-[5px]">
                                <div className="flex gap-[6px] items-center">
                                    <p className="font-[light] text-[14px] max-[600px]:text-[12px]">Status: </p>
                                    <div className={`pr-[5px] pl-[5px] pt-[3px] pb-[3px] text-[12px] mr-[3px] ${user[0].role == 1 ? 'bg-purple-500' : user[0].total_days > 0 ? 'bg-blue-500' : 'bg-yellow-500'} rounded-[4px]`}>
                                        <p>{user[0].role == 1 ? "admin" : user[0].total_days > 0 ? 'Member' : 'Normal'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <button onClick={() => {
                                setMenuOpen(!menuOpen)
                            }} className="text-white font-[bold] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">เมนู <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            {menuOpen ?
                                <div onClick={(e) => {
                                    if (e.target == e.currentTarget) {
                                        setMenuOpen(false)
                                    }
                                }} className="w-full h-[100vh] fixed top-0 left-0 bg-transparent">
                                    <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 right-5 top-[65px] font-[medium]">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li className="flex justify-between items-center px-4 py-2 min-[600px]:hidden">
                                                <p className="text-black">{user[0].username}</p>
                                                <div className="flex gap-[5px]">


                                                    <p className="font-[light] text-[12px]">ID: {user[0].id}</p>
                                                    <p className="text-black font-[light] text-[12px]">{user[0].role == 1 ? "admin" : user[0].total_days > 0 ? 'Member' : 'Normal'}</p>
                                                </div>
                                            </li>

                                            <li className="cursor-pointer" onClick={() => {
                                                navigate.push("/")
                                                setMenuOpen(false)
                                            }}>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">แดชบอร์ด</a>
                                            </li>
                                            <li className="cursor-pointer" onClick={() => {
                                                navigate.push("/signal")
                                                setMenuOpen(false)
                                            }}>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ห้องสัญญาณ</a>
                                            </li>
                                            <li className="cursor-pointer" onClick={() => {
                                                navigate.push("/rental")
                                                setMenuOpen(false)
                                            }}>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ห้องเช่าสัญญาณ</a>
                                            </li>
                                            <li className="cursor-pointer" onClick={() => {
                                                navigate.push("/setting")
                                                setMenuOpen(false)
                                            }}>
                                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ตั้งค่า</a>
                                            </li>
                                            {user && user.length > 0 ? user[0].role == 1 ? <li onClick={() => {
                                                navigate.push("/confirm_slip")
                                                setMenuOpen(false)
                                            }}>
                                                <a className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ยืนยันสลิป</a>
                                            </li> : null : null}
                                            <li onClick={() => {
                                                Swal.fire({ title: "ต้องการออกจากระบบ", showConfirmButton: true, showCancelButton: true, confirmButtonText: 'ออก', cancelButtonText: 'ยกเลิก', confirmButtonColor: '#cb4335', cancelButtonColor: '#e67e22' }).then((res) => {
                                                    if (res.isConfirmed) {
                                                        toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), { pending: 'กำลังออกจากระบบ', success: 'ออกจากระบบสำเร็จ' }, { type: 'success', hideProgressBar: true, closeButton: false, position: 'bottom-right' })
                                                        setTimeout(() => {
                                                            localStorage.removeItem('token')
                                                            navigate.push('/landingpage')
                                                        }, 1500)
                                                    }
                                                })
                                            }}>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ออกจากระบบ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div> : <div className="flex gap-[10px]">
                        <p onClick={() => {
                            navigate.push('/login')
                        }} className="text-white font-[light] text-[16px] cursor-pointer">เข้าสู่ระบบ</p>
                        <p className="text-white font-[light] text-[16px] cursor-pointer">|</p>
                        <p onClick={() => {
                            navigate.push('/register')
                        }} className="text-white font-[light] text-[16px] cursor-pointer">สมัครสมาชิก</p></div>}
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Header