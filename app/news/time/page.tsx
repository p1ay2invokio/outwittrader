'use client'

import axios from "axios"
import Back from "@/app/Components/Back"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import pako from 'pako'
import dayjs from "dayjs"
import { IoArrowBackCircleSharp } from "react-icons/io5"
import { MdAccessTimeFilled } from "react-icons/md";
import { GiFactory } from "react-icons/gi";

const Time = () => {

    let navigate = useRouter()

    let [code, setCode] = useState('')

    useEffect(() => {

        let date = dayjs().format("YYYY-MM-DD HH:mm:ss")

        let data = `?zone=Asia/Bangkok&button=60300&dat_par=${date}`
        let compressed = pako.deflate(data, { level: 9 })
        const base64endcoded = btoa(String.fromCharCode(...compressed))
        console.log(base64endcoded)
        setCode(base64endcoded)
    }, [])


    return (
        <div className="p-[20px]">
            <IoArrowBackCircleSharp onClick={() => {
                navigate.push("/signal")
            }} className="cursor-pointer absolute top-5 left-10" size={40}></IoArrowBackCircleSharp>

            <div className="flex gap-[10px] justify-center mb-[20px]">
                <div>
                    <div className="p-[10px] cursor-pointer bg-blue-500/80 text-white rounded-[8px] font-[medium] text-[14px] flex gap-[5px] items-center">
                        <p>ช่วงเวลาการเทรด</p>
                        <MdAccessTimeFilled size={20}></MdAccessTimeFilled>
                    </div>
                </div>
                <div>
                    <div className="p-[10px] cursor-pointer bg-blue-500 text-white rounded-[8px] font-[medium] text-[14px] flex gap-[5px] items-center" onClick={() => {
                        navigate.push("/news/forex")
                    }}>
                        <p>ForexFactory</p>
                        <GiFactory size={20}></GiFactory>
                    </div>
                </div>
            </div>
            
            {/* <div onClick={() => {
                navigate.push('/signal')
            }} className='w-[80px] absolute left-[100px] top-[50px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center'>
                <p className='font-[medium] text-white'>กลับ</p>
            </div> */}
            {/* <p className="font-[light]">หน้าหลัก / ห้องสัญญาณ / ช่วงเวลา</p> */}
            {code ? <iframe className="w-full h-[80vh] timezone" allow="autoplay; fullscreen" src={`https://en.tradertimerzone.com/fancy.php?sys=${code}`}></iframe> : <p>กำลังโหลด...</p>}
        </div>
    )
}

export default Time