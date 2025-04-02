'use client'

import Header from "@/app/Components/Header"
import LeftSide from "@/app/Components/LeftSide"
import { UserInterface } from "@/app/Interfaces/UserInterface"
import { UserMethod } from "@/app/methods/UserMethod"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const AdminDashboard = () => {

    const [modal, setModal] = useState<boolean>(false)

    const [searchUser, setSearchUser] = useState<string>('')
    const [user, setUser] = useState<UserInterface[] | null>(null)
    const [days, setDays] = useState<string>('')

    const updateDays = async () => {
        await new UserMethod().updateDays(Number(days), Number(searchUser)).then((res) => {
            if (res.success) {
                Swal.fire("อัพเดทสำเร็จ", `เพิ่มวันให้ ${searchUser} เป็น ${days} วัน`, "success")
                setModal(false)
                setSearchUser('')
                setUser([])
            }
        })
    }


    // useEffect(()=>{

    // }, [])

    return (
        <div className="pl-[280px] pt-[100px] pr-[50px]">

            {modal ? <div onClick={(e)=>{
                if(e.target == e.currentTarget){
                    setModal(false)
                }
            }} className="w-full h-full fixed top-0 left-0 bg-black/50 z-[7] flex justify-center items-center flex-col gap-[20px]">
                <div className="w-[300px] h-[50px] bg-white shadow-sm rounded-[4px]">
                    <input onKeyDown={async (e) => {
                        if (e.key == "Enter") {
                            const targetUser = await new UserMethod().getUserId(Number(searchUser))

                            if (targetUser && targetUser.length > 0) {
                                setDays(targetUser[0].total_days.toString())
                                setUser(targetUser)
                            }else{
                                Swal.fire("ไม่พบไอดี", "", "error")
                            }
                            // console.log(targetUser)
                        }
                    }} onChange={(e) => {
                        setSearchUser(e.target.value)
                    }} className="w-full h-full outline-none text-center font-[light] rounded-[4px]" placeholder="ค้นหาผู้ใช้ ( ID )"></input>
                </div>

                {user && user.length > 0 ? <div className="w-[300px] bg-white p-[10px]  shadow-sm rounded-[4px]">
                    <div className="flex justify-between">
                        <p className="font-[medium] text-[14px]">{user[0].id}</p>
                        <p className="font-[medium] text-[14px]">{user[0].username}</p>
                    </div>
                    <input onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            updateDays()
                        }
                    }} onChange={(e) => [
                        setDays(e.target.value)
                    ]} value={days} className="w-full h-[40px] text-center outline-none border-b-[2px]"></input>
                    {/* <p>{user[0].total_days}</p> */}
                    <div className="w-full flex justify-center items-center">
                        <button onClick={async () => {
                            updateDays()
                        }} className="w-[200px] h-[40px] bg-blue-800 mt-[10px] flex justify-center items-center text-white rounded-[4px] font-[medium]"><p>UPDATE</p></button>
                    </div>
                </div> : null}
            </div> : null}

            <Header />
            <LeftSide />

            <div className="w-full h-[calc(90vh-100px)] border-[1px] rounded-[8px] p-[10px] grid grid-cols-6 gap-[20px]">
                <button onClick={() => {
                    setModal(true)
                }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md border-l-[10px] border-blue-800">
                    <p className="font-[medium]">+ เมนูเพิ่มลดวัน</p>

                </button>
                <button onClick={() => {

                }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md border-l-[10px] border-blue-800">
                    <p className="font-[medium]">Partner Checking</p>

                </button>
            </div>

        </div>
    )
}

export default AdminDashboard