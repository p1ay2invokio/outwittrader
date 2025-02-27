'use client'

import { useEffect, useState } from "react"
import { UserMethod } from "../methods/UserMethod"
import { UserInterface } from "../Interfaces/UserInterface"
import { RxAvatar } from "react-icons/rx";
import Header from "../Components/Header";
import { useRouter } from "next/navigation";

const Setting = () => {

    const navigate = useRouter()

    const [User, setUser] = useState<UserInterface[]>([])
    const intial = async () => {

        let token = localStorage.getItem("token")

        if (token) {
            const response_user = await new UserMethod().getUserAccounts(token)

            setUser([response_user])
        }
    }

    useEffect(() => {
        intial()
    }, [])

    return (

        <div className="w-full h-[100vh] flex justify-center items-center">

            <div onClick={() => {
                navigate.push('/')
            }} className='w-[80px] absolute left-[100px] top-[100px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center'>
                <p className='font-[medium] text-white'>กลับ</p>
            </div>

            <Header />
            <div className="w-[300px] h-[400px] flex justify-start items-center flex-col shadow-lg rounded-[8px]">
                <p className="font-[medium]">ข้อมูลของฉัน</p>
                <RxAvatar size={100} className="mt-[20px]" />
                {User && User.length > 0 ? <div className="w-full p-[20px]">
                    <div className="font-[light] flex justify-between">
                        <p className="text-[14px]">ID (ไอดี)</p>
                        <p className="font-[medium]">{User[0].id}</p>
                    </div>
                    <div className="font-[light] flex justify-between">
                        <p className="text-[14px]">ชื่อผู้ใช้ (Username)</p>
                        <p className="font-[medium]">{User[0].username}</p>
                    </div>
                    <div className="font-[light] flex justify-between">
                        <p className="text-[14px]">วันที่ใช้งานได้อีก (Available)</p>
                        <p className="font-[medium]">{User[0].total_days} วัน</p>
                    </div>
                </div> : null}
            </div>
        </div>
    )
}

export default Setting