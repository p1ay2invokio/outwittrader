'use client'
import { useRouter } from "next/navigation"
import LeftSide from "../Components/LeftSide"
import Header from "../Components/Header"
import { useEffect, useState } from "react"
import { UserInterface } from "../Interfaces/UserInterface"
import { UserMethod } from "../methods/UserMethod"
import { TeamMethod } from "../methods/TeamMethod"

const Partner = () => {


    const navigate = useRouter()

    const [user, setUser] = useState<{ user_id: number, team_id: number, username: string, team_name: string, status: number }[] | null>(null)

    const initial = async () => {
        let token = localStorage.getItem("token")
        if (token) {
            let data = await new TeamMethod().partnerUser()

            if (data && data.length > 0) {
                if (data[0].status == 2) {
                    navigate.push("/partner/dashboard")
                } else {
                    setUser(data)
                }
            }
        }
    }

    useEffect(() => {
        initial()
    }, [])

    return (
        <div className="pt-[100px] pl-[300px] pr-[50px]">
            <Header />
            <LeftSide />
            <div className="border-[1px] border-transparent w-full h-[calc(90vh-100px)] p-[20px] grid grid-cols-2 place-items-center">
                <div className="col-span-1">
                    <div className="font-[medium] text-[24px]">
                        <p>ยกระดับการเพิ่มรายได้ของคุณ</p>
                        <p>ไปอีกขั้นกับ OutwitTrader</p>
                        <p>Partner</p>
                    </div>
                    <div className="font-[light] text-black/50 mt-[20px] text-[14px]">
                        <p>เกี่ยกับ OutwitTrader Partner</p>
                        <p>OutwiTrader และ Partner ได้รับการยอมรับว่าทำให้แคมเปญลูกค้าประสบความสำเร็จ</p>
                        <p>ได้สูงสุด กระตุ้นการเติบโตของลูกค้าโดยการดูแลแคมเปญรวมถึงแสดงทักษาและความ</p>
                        <p>เชี่ยวชาญด้าน OutwiTrader ผ่านการรับรอง ได้รับค่าคอมมิชชั่นสูงถึง 70%</p>
                    </div>
                    {user && user.length > 0 ?
                        <button disabled={user[0].status == 1 ? true : false} onClick={() => {
                            navigate.push("/partner/register")
                        }} className={`w-[200px] ${user[0].status == 1 ? "bg-orange-400" : "bg-blue-800"} rounded-[8px] mt-[20px] h-[40px] flex justify-center items-center`}>
                            <p className="font-[medium] text-white">{user[0].status == 1 ? "กรุณารอดำเนินการ 7-14 วัน" : "ลงทะเบียน"}</p>
                        </button> : <button onClick={() => {
                            navigate.push("/partner/register")
                        }} className={`w-[200px] bg-blue-800 rounded-[8px] mt-[20px] h-[40px] flex justify-center items-center`}>
                            <p className="font-[medium] text-white">ลงทะเบียน</p>
                        </button>
                    }
                </div>
                <div className="border-[1px] border-transparent w-[80%] h-[400px] rounded-[20px] col-span-1">
                    <img className="w-full h-full object-cover rounded-[20px]" src="/team.webp"></img>
                    {/* <p>YT</p> */}
                </div>
            </div>
        </div>
    )
}


export default Partner