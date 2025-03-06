'use client'

import { useEffect, useState } from "react"
import { UserMethod } from "../methods/UserMethod"
import { UserInterface } from "../Interfaces/UserInterface"
import { RxAvatar } from "react-icons/rx";
import Header from "../Components/Header";
import { useRouter } from "next/navigation";
import { IoArrowBackCircleSharp } from "react-icons/io5";

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

        <div className="w-full">
            <IoArrowBackCircleSharp onClick={() => {
                navigate.push("/")
            }} className="cursor-pointer absolute top-20 left-10" size={40}></IoArrowBackCircleSharp>
            <Header />
            <div className="flex justify-center items-center h-[calc(100vh-50px)]">
                <div className="w-[300px] h-[400px] flex justify-start items-center flex-col shadow-lg rounded-[8px]">
                    <p className="font-[medium]">ข้อมูลของฉัน</p>
                    <RxAvatar size={100} className="mt-[20px]" />
                    {User && User.length > 0 ? <div className="w-full p-[20px]">
                        <div className="font-[light] flex justify-between">
                            <p className="text-[14px]">ไอดี (ID)</p>
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
        </div>
    )
}

export default Setting