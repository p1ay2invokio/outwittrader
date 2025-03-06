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



            <Header />

            <div className="h-[calc(100vh-80px)] pl-[80px] pr-[80px] max-[600px]:pl-[20px] max-[600px]:pr-[20px] pt-[20px] mt-[80px]">
                <div className="w-full">
                    <div className="flex items-center gap-[10px]">
                        <IoArrowBackCircleSharp onClick={() => {
                            navigate.push("/")
                        }} className="cursor-pointer" size={40}></IoArrowBackCircleSharp>
                        <div className="mb-[20px] mt-[20px]">
                            <p className="flex font-[medium] text-[18px] max-[600px]:text-[16px]">ห้องสัญญาณ & Trader</p>
                            <p className="font-[light] text-[14px] max-[600px]:text-[12px] text-gray-500">หน้าหลัก / ห้องสัญญาณ</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">


                        <div className="grid grid-cols-4 w-[1400px] place-items-center max-[1400px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-2 gap-y-5 mb-[70px] gap-[20px]">
                            <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">สัญญาณเทรด 1 นาที</p>
                                <div className="w-full h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/1m.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                                </div>
                                <div onClick={async () => {
                                    if (detailUser && detailUser.length > 0) {
                                        if (detailUser[0].total_days > 0) {
                                            navigate.push('/room_first')
                                        } else {
                                            Swal.fire("กรุณาเช่าสัญญาณก่อน!", "", "info").then((res) => {
                                                if (res.isConfirmed) {
                                                    navigate.push('/rental')
                                                }
                                            })
                                        }
                                    }
                                }} className="w-full h-[40px] bg-blue-700 rounded-[4px] cursor-pointer flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[16px]">เข้าดูสัญญาณ</p>
                                </div>
                            </div>
                            <div onClick={async () => {
                                if (detailUser && detailUser.length > 0) {
                                    if (detailUser[0].total_days > 0) {
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
                                    <Image alt="." width={300} height={200} src="/5m.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                                </div>
                                <div className="w-full cursor-pointer h-[40px] bg-blue-700 rounded-[4px] flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[16px]">เข้าดูสัญญาณ</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signal