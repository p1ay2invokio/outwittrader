'use client'

import { useRouter } from "next/navigation";
import Header from "../Components/Header"
import axios from "axios";
import { useEffect, useState } from "react";
import { UserMethod } from "../methods/UserMethod";
import { UserInterface } from "../Interfaces/UserInterface";
import Swal from "sweetalert2";
import Back from "../Components/Back";
import Image from "next/image";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import LeftSide from "../Components/LeftSide";

const Signal = () => {

    const navigate = useRouter()

    const [detailUser, setDetailUser] = useState<UserInterface[]>([])

    const intial = async () => {

        const token = localStorage.getItem("token")

        if (!token) {
            return "Token Error"
        }

        let response_user = await new UserMethod().getUserAccounts(token)

        setDetailUser([response_user])
    }

    useEffect(() => {
        intial()
    }, [])

    return (
        <div>

            <LeftSide />


            <Header />

            <div className="h-[calc(100vh-80px)] pl-[80px] pr-[80px] max-[600px]:pl-[20px] max-[600px]:pr-[20px] pt-[20px] mt-[80px]">
                <div className="w-full pl-[200px] max-[768px]:p-[20px]">
                    <div className="flex items-center gap-[10px]">
                        <IoArrowBackCircleSharp onClick={() => {
                            navigate.push("/")
                        }} className="cursor-pointer" size={40}></IoArrowBackCircleSharp>
                        <div className="mb-[20px] mt-[20px]">
                            <p className="flex font-[medium] text-[18px] max-[600px]:text-[16px]">ห้องสัญญาณ & Trader</p>
                            <p className="font-[light] text-[14px] max-[600px]:text-[12px] text-gray-500">หน้าหลัก / ห้องสัญญาณ</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center flex-col">


                        <p className="text-center font-[pbold] text-[22px] mb-5">Binary Option</p>


                        <div className="grid grid-cols-4 bg-gray-100 p-2 border-[1px] shadow rounded-xl border-gray-300 place-items-center max-[1400px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-2 max-[450px]:grid-cols-1 gap-y-5 mb-[70px] gap-[20px]">
                            <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">สัญญาณเทรด 1 นาที</p>
                                <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/1n.webp" className="w-full h-full rounded-[8px]"></Image>
                                </div>
                                <div onClick={async () => {
                                    if (detailUser && detailUser.length > 0) {
                                        if (detailUser[0].binary_days > 0) {
                                            navigate.push('/room_first')
                                        } else {
                                            Swal.fire("กรุณาเช่าสัญญาณก่อน!", "", "info").then((res) => {
                                                if (res.isConfirmed) {
                                                    navigate.push('/rental')
                                                }
                                            })
                                        }
                                    }
                                }} className="w-[70%] h-[40px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-full cursor-pointer flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[16px]">เข้าดูสัญญาณ</p>
                                </div>
                            </div>
                            <div onClick={async () => {
                                if (detailUser && detailUser.length > 0) {
                                    if (detailUser[0].binary_days > 0) {
                                        navigate.push('/room_second')
                                    } else {
                                        Swal.fire("กรุณาเช่าสัญญาณก่อน!", "", "info").then((res) => {
                                            if (res.isConfirmed) {
                                                navigate.push('/rental')
                                            }
                                        })
                                    }
                                }
                            }} className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">สัญญาณเทรด 5 นาที</p>
                                <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/2n.webp" className="w-full h-full rounded-[8px]"></Image>
                                </div>
                                <div className="w-[70%] cursor-pointer h-[40px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-full flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[16px]">เข้าดูสัญญาณ</p>
                                </div>
                            </div>


                            <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">เช็คสถิติสัญญาณ 1 นาที</p>
                                <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/5.webp" className="w-full h-full rounded-[8px]"></Image>
                                </div>
                                <div onClick={() => {
                                    if (detailUser && detailUser.length > 0) {
                                        if (detailUser[0].binary_days > 0) {
                                            window.open("https://t.me/+z-qnsbXu4dI4ZTU1", "_blank")
                                        } else {
                                            Swal.fire("กรุณาเช่าสัญญาณก่อน!", "", "info").then((res) => {
                                                if (res.isConfirmed) {
                                                    navigate.push('/rental')
                                                }
                                            })
                                        }
                                    }
                                }} className="w-[70%] cursor-pointer h-[40px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-full flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[16px]">เข้าดูสัญญาณ</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">เช็คสถิติสัญญาณ 5 นาที</p>
                                <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/6.webp" className="w-full h-full rounded-[8px]"></Image>
                                </div>
                                <div onClick={() => {
                                    if (detailUser && detailUser.length > 0) {
                                        if (detailUser[0].binary_days > 0) {
                                            window.open("https://t.me/+IBa8IS7ZoZ05M2M1", "_blank")
                                        } else {
                                            Swal.fire("กรุณาเช่าสัญญาณก่อน!", "", "info").then((res) => {
                                                if (res.isConfirmed) {
                                                    navigate.push('/rental')
                                                }
                                            })
                                        }
                                    }
                                }} className="w-[70%] cursor-pointer h-[40px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-full flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[16px]">เข้าดูสัญญาณ</p>
                                </div>
                            </div>

                            {/* <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">ข่าวประจำวัน</p>
                                <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/newsja.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                                </div>
                                <div onClick={() => {
                                    navigate.push("/news/time")
                                }} className="w-full h-[40px] bg-blue-700 rounded-[4px] cursor-pointer flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[16px]">เข้าดูคอร์สข่าว</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px] max-[600px]:w-[150px] overflow-hidden text-nowrap text-ellipsis">คอร์สการเรียนรู้พื้นฐาน & เทคนิค</p>
                                <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/sudteb.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                                </div>
                                <div onClick={() => {
                                    navigate.push('/learning/guidebook')
                                }} className="w-full cursor-pointer h-[40px] bg-blue-700 rounded-[4px] flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[16px]">เข้าดูคอร์ส</p>
                                </div>
                            </div> */}
                        </div>

                        <div className="w-full text-center mb-5">

                            <p className="font-[pbold] text-[22px] mb-5">Forex</p>

                            <div className="grid grid-cols-4 gap-4 w-full shadow bg-gray-100 p-2 border-[1px] rounded-xl border-gray-300 max-[450px]:grid-cols-1">
                                <div className="w-full flex flex-col items-center">
                                    <p className="font-[light] text-[14px]">เช็คสถิติสัญญาณ Forex</p>
                                    <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                        <Image alt="." width={300} height={200} src="/6.webp" className="w-full h-full rounded-[8px]"></Image>
                                    </div>
                                    <div onClick={() => {
                                        if (detailUser && detailUser.length > 0) {
                                            if (detailUser[0].forex_days > 0) {
                                                window.open("https://t.me/+IBa8IS7ZoZ05M2M1", "_blank")
                                            } else {
                                                Swal.fire("กรุณาเช่าสัญญาณก่อน!", "", "info").then((res) => {
                                                    if (res.isConfirmed) {
                                                        navigate.push('/rental')
                                                    }
                                                })
                                            }
                                        }
                                    }} className="w-[70%] cursor-pointer h-[40px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-full flex justify-center items-center mt-[10px]">
                                        <p className="font-[medium] text-white text-[16px]">เข้าดูสัญญาณ</p>
                                    </div>
                                </div>

                                <div className="w-full flex flex-col items-center">
                                    <p className="font-[light] text-[14px]">เช็คสถิติสัญญาณ Forex Telegram</p>
                                    <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                        <Image alt="." width={300} height={200} src="/6.webp" className="w-full h-full rounded-[8px]"></Image>
                                    </div>
                                    <div onClick={() => {
                                        if (detailUser && detailUser.length > 0) {
                                            if (detailUser[0].forex_days > 0) {
                                                window.open("https://t.me/+IBa8IS7ZoZ05M2M1", "_blank")
                                            } else {
                                                Swal.fire("กรุณาเช่าสัญญาณก่อน!", "", "info").then((res) => {
                                                    if (res.isConfirmed) {
                                                        navigate.push('/rental')
                                                    }
                                                })
                                            }
                                        }
                                    }} className="w-[70%] cursor-pointer h-[40px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-full flex justify-center items-center mt-[10px]">
                                        <p className="font-[medium] text-white text-[16px]">เข้าดูสัญญาณ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signal