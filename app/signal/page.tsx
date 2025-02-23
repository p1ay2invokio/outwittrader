'use client'

import { useRouter } from "next/navigation";
import Header from "../Components/Header"
import axios from "axios";
import { useEffect, useState } from "react";
import { UserMethod } from "../methods/UserMethod";
import { UserInterface } from "../Interfaces/UserInterface";
import Swal from "sweetalert2";
import { Carousel } from "flowbite-react";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLine } from "react-icons/fa";

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
            <div className="h-[calc(100vh-80px)] pl-[80px] pr-[80px] pt-[20px] mt-[80px]">
                <div className="w-full">
                    <p className="flex font-[medium] text-[20px] mb-[20px] mt-[20px] ml-[20px]">ห้องสัญญาณ & Trader</p>

                    <div className="flex justify-center items-center mb-[20px] max-sm:hidden">
                        <div className="w-full flex justify-center items-center">
                            <Carousel className="h-[300px] w-[600px]">
                                <img src="./1.webp" alt="..." />
                                <img src="./2.webp" alt="..." />
                                <img src="./3.webp" alt="..." />
                            </Carousel>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 place-items-center max-[1300px]:grid-cols-2 max-[800px]:grid-cols-1 gap-y-5 ">
                        <div className="w-full flex flex-col items-center">
                            <p className="font-[light] text-[14px]">สัญญาณเทรด 1 นาที</p>
                            <div className="w-[300px] h-[200px] shadow-lg rounded-[8px]">
                                <img src="./1m.webp" className="w-full h-full object-covert rounded-[8px]"></img>
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
                                <p className="font-[medium] text-white text-[14px]">เข้าดูสัญญาณ</p>
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
                                <img src="./5m.webp" className="w-full h-full object-covert rounded-[8px]"></img>
                            </div>
                            <div className="w-[100px] h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center mt-[10px]">
                                <p className="font-[medium] text-white text-[14px]">เข้าดูสัญญาณ</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <p className="font-[light] text-[14px]">ข่าวประจำวัน</p>
                            <div className="w-[300px] h-[200px] shadow-lg rounded-[8px]">
                                <img src="./newsja.webp" className="w-full h-full object-covert rounded-[8px]"></img>
                            </div>
                            <div className="w-[100px] h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center mt-[10px]">
                                <p className="font-[medium] text-white text-[14px]">เข้าดูคอร์สข่าว</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <p className="font-[light] text-[14px]">คอร์สการเรียนรู้พื้นฐาน & เทคนิค</p>
                            <div className="w-[300px] h-[200px] shadow-lg rounded-[8px]">
                                <img src="./sudteb.webp" className="w-full h-full object-covert rounded-[8px]"></img>
                            </div>
                            <div onClick={() => {
                                navigate.push('/learning/guidebook')
                            }} className="w-[90px]  h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center mt-[10px]">
                                <p className="font-[medium] text-white text-[14px]">เข้าดูคอร์ส</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[100px] flex justify-center items-center flex-col">
                        <div>
                            <p className="font-[medium] text-[20px]">ช่องทางการติดต่อ</p>
                        </div>
                        <div className="grid grid-cols-5 gap-[20px] max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 mb-[100px]">
                            <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                                <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                                    <FaDiscord size={50} />
                                    <p className="font-[bold]">Discord</p>
                                </div>
                                <a target='blank' href="https://discord.gg/MVj5YnsMNM" className="font-[light] text-[12px]">https://discord.gg/MVj5YnsMNM</a>
                            </div>
                            <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                                <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                                    <FaFacebook size={50} />
                                    <p className="font-[bold]">Facebook</p>
                                </div>
                                <a target='blank' href="https://www.facebook.com/share/17yQJBhhVs/" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.facebook.com/share/17yQJBhhVs/</a>
                            </div>
                            <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                                <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                                    <FaTiktok size={50} />
                                    <p className="font-[bold]">Tiktok</p>
                                </div>
                                <a target='blank' href="https://www.tiktok.com/@outwittrader?_t=ZS-8u1IHEygb6G&_r=1" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.tiktok.com/@outwittrader</a>
                            </div>
                            <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                                <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                                    <FaYoutube size={50} />
                                    <p className="font-[bold]">Youtube</p>
                                </div>
                                <a target='blank' href="https://www.youtube.com/@OutwitTrade" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.youtube.com/@OutwitTrade</a>
                            </div>

                            <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                                <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                                    <FaLine size={50} />
                                    <p className="font-[bold]">Line OA</p>
                                </div>
                                <a target='blank' href="https://lin.ee/mV3lgMw" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://lin.ee/mV3lgMw</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signal