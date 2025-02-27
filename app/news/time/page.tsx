'use client'

import Back from "@/app/Components/Back"
import { useRouter } from "next/navigation"

const Time = () => {

    let navigate = useRouter()

    return (
        <div className="p-[100px]">
            <div onClick={() => {
                navigate.push('/signal')
            }} className='w-[80px] absolute left-[100px] top-[50px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center'>
                <p className='font-[medium] text-white'>กลับ</p>
            </div>
            <p className="font-[light]">หน้าหลัก / ห้องสัญญาณ / คู่มือ</p>
            <iframe className="w-full h-[80vh]" frameBorder={0} allow="autoplay; fullscreen" src="https://tradertimerzone.com/fancy.php?sys=eJyzr8rPS7V1LM5M1HdKzEvPzs9WSyotKcnPszUzMDYwUEtJLIkvSCyyNTIwMtU1MNI1MlUwNLMyMrQysgQATgIRjg%3D%3D"></iframe>
        </div>
    )
}

export default Time