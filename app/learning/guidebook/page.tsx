'use client'

import Header from "@/app/Components/Header"
import { useState } from "react"
import { FaSignal } from "react-icons/fa";
import { SiIos } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { RiTimeZoneFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";


const GuideBook = () => {

    const [select, setSelect] = useState<number>(0)

    const lessons = [
        {
            id: 0,
            title: 'วิธีการเช่าซื้อสัญญาณ Outwit Signal',
            embed: 'tW13N4Hll88',
            logo: <FaSignal className="text-white" />
        },
        {
            id: 1,
            title: 'วิธีเปิดจอสัญญาณ Outwit Signal บน iOS',
            embed: 'V47CdOCDo4s',
            logo: <SiIos size={20} className="text-white" />
        },
        {
            id: 2,
            title: 'วิธีเปิดจอสัญญาณ Outwit Signal บน Android',
            embed: 'a1wW0AjQCI8',
            logo: <IoLogoAndroid size={20} className="text-white" />
        },
        {
            id: 3,
            title: 'วิธีการเช็ค Time Zone ก่อนเทรด',
            embed: 'Gxkfp7iYjW8',
            logo: <RiTimeZoneFill size={20} className="text-white" />
        },
        {
            id: 4,
            title: 'วิธีการใช้งานสัญญาณ Outwit Signal (พื้นฐาน)',
            embed: 'XqQMisU5En8',
            logo: <FaChalkboardTeacher size={20} className="text-white" />
        },
    ]

    return (
        <div className="mb-[80px]">
            <Header />
            <div className="mt-[80px] p-[20px]">

                <div className="mb-[10px]">
                    <p className="font-[medium] text-[20px]">คู่มือและบทเรียนการใช้งาน (ทั่วไป)</p>
                </div>
                <div className="grid grid-cols-3 place-items-start gap-[10px] max-[800px]:grid-cols-1 gap-y-[20px]">
                    <div className="col-span-2 w-full rounded-[8px] shadow-md  h-[600px] p-[20px]">
                        <p className="font-[light] text-black mb-[10px]">วิธีการใช้งานเช่าสัญญาณ</p>
                        <iframe width="100%" height="80%" src={`https://www.youtube.com/embed/${lessons[select].embed}?si=l8GJnqT24XunRhkZ&amp;controls=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        <p className="font-[light] text-[14px] mt-[10px]">รายละเอียด ในบทนี้จะอธิบายขั้นตอนการเช่าสัญญาณ AI เพื่อเริ่มต้นการเทรดอย่างมีประสิทธิภาพ พร้อมข้อมูลเกี่ยวกับการบริการเช่าสัญญาณต่างๆ ที่สามารถเลือกใช้ได้ตามต้องการ</p>
                    </div>
                    <div className="col-span-1 w-full h-[500px] shadow-md rounded-[8px] p-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[10px] items-center">
                                <p className="font-[medium] text-[20px]">เลือกบทเรียน</p>
                                <span className="relative flex size-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                                </span>
                            </div>
                            {lessons.map((item, index) => {
                                return (
                                    <div key={item.id} onClick={() => {
                                        setSelect(item.id)
                                    }}>
                                        <div className="w-full h-[60px] p-[20px] cursor-pointer text-black bg-blue-800 flex justify-between items-center rounded-[8px]">
                                            <p className="font-[light] text-[14px] text-white">{item.title}</p>
                                            {item.logo}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default GuideBook