'use client'

import Back from "@/app/Components/Back"
import Header from "@/app/Components/Header"
import { useRouter } from "next/navigation"
import {IoArrowBackCircleSharp} from 'react-icons/io5'

const Newbie = () => {

    const navigate = useRouter()

    return (
        <div>

            {/* <Back /> */}
            <IoArrowBackCircleSharp onClick={() => {
                navigate.push("/")
            }} className="cursor-pointer absolute top-20 left-10" size={40}></IoArrowBackCircleSharp>

            <Header />
            <div className="mt-[80px] p-[20px] flex justify-center items-center">
                <div className="w-[800px] bg-yellow-100 shadow h-[400px] rounded-[8px] grid grid-cols-2 p-[10px] gap-[10px]">
                    <div className="bg-white rounded-[8px] col-span-1 flex justify-start flex-col p-[20px]">
                        {/* <p>IQ Option</p> */}
                        <img className="h-[250px] mt-[-70px]" src="/iq.svg"></img>
                        <p className="mt-[-80px] font-[light]">IQ Option เป็นแพลตฟอร์การเทรดที่มีเครื่องมือหลากลหาย รองรับการเทรด Forex, Option และคริปโต เหมาะสำหรับนักเทรดทุกระดับ (เปิดบัญชีเทรดฟรีเงินทดลอง 10,000$)</p>
                        <div className="w-full grid grid-cols-2 gap-[10px] mt-[20px]">
                            <button onClick={() => {
                                navigate.push("/learning/guidebook")
                            }} className="font-[medium] flex justify-center items-center h-[50px] bg-green-600 text-white rounded-[8px]">เข้าชมบทเรียน</button>
                            <button className="font-[medium] flex justify-center items-center h-[50px] bg-orange-400 text-white rounded-[8px]">สมัครบัญชีเทรด</button>
                        </div>

                    </div>
                    <div className="bg-white rounded-[8px] col-span-1 flex justify-start flex-col p-[20px]">
                        {/* <p>IQ Option</p> */}
                        <img className="h-[90px] w-[350px] mt-[-0px]" src="/exnova.svg"></img>
                        <p className="mt-[10px] font-[light]">IQ Option เป็นแพลตฟอร์การเทรดที่มีเครื่องมือหลากลหาย รองรับการเทรด Forex, Option และคริปโต เหมาะสำหรับนักเทรดทุกระดับ (เปิดบัญชีเทรดฟรีเงินทดลอง 10,000$)</p>
                        <div className="w-full grid grid-cols-2 gap-[10px] mt-[20px]">
                            <button onClick={() => {
                                navigate.push("/learning/guidebook")
                            }} className="font-[medium] flex justify-center items-center h-[50px] bg-green-600 text-white rounded-[8px]">เข้าชมบทเรียน</button>
                            <button className="font-[medium] flex justify-center items-center h-[50px] bg-blue-800 text-white rounded-[8px]">สมัครบัญชีเทรด</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newbie