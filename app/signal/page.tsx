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

            <div onClick={() => {
                navigate.push('/')
            }} className='w-[80px] absolute left-[100px] top-[190px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center'>
                <p className='font-[medium] text-white'>กลับ</p>
            </div>

            <Header />

            <div className="h-[calc(100vh-80px)] pl-[80px] pr-[80px] pt-[20px] mt-[80px]">
                <div className="w-full">
                    <div className="mb-[20px] mt-[20px] ml-[20px]">
                        <p className="flex font-[medium] text-[20px]">ห้องสัญญาณ & Trader</p>
                        <p className="font-[light]">หน้าหลัก / ห้องสัญญาณ</p>
                    </div>

                    <div className="w-full flex justify-center">


                        <div className="grid grid-cols-4 w-[1400px] place-items-center max-[1300px]:grid-cols-2 max-[800px]:grid-cols-1 gap-y-5 ">
                            <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">สัญญาณเทรด 1 นาที</p>
                                <div className="w-[300px] h-[200px] shadow-lg rounded-[8px]">
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
                                }} className="w-[100px] h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[14px] cursor-pointer">เข้าดูสัญญาณ</p>
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
                                <div className="w-[300px] h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/5m.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                                </div>
                                <div className="w-[100px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[14px]">เข้าดูสัญญาณ</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">ข่าวประจำวัน</p>
                                <div className="w-[300px] h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/newsja.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                                </div>
                                <div onClick={() => {
                                    navigate.push("/news/time")
                                }} className="w-[100px] h-[40px] bg-blue-600 rounded-[8px] cursor-pointer flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[14px]">เข้าดูคอร์สข่าว</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <p className="font-[light] text-[14px]">คอร์สการเรียนรู้พื้นฐาน & เทคนิค</p>
                                <div className="w-[300px] h-[200px] shadow-lg rounded-[8px]">
                                    <Image alt="." width={300} height={200} src="/sudteb.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                                </div>
                                <div onClick={() => {
                                    navigate.push('/learning/guidebook')
                                }} className="w-[90px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center mt-[10px]">
                                    <p className="font-[medium] text-white text-[14px]">เข้าดูคอร์ส</p>
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