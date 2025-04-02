'use client'

import Header from "@/app/Components/Header"
import LeftSide from "@/app/Components/LeftSide"
import { UserInterface } from "@/app/Interfaces/UserInterface"
import { UserMethod } from "@/app/methods/UserMethod"
import { useEffect, useState } from "react"

const Dashboard = () => {

    const [account, setAccount] = useState<UserInterface | null>(null)

    const initial = async () => {
        const token = localStorage.getItem("token")

        const user = token ? await new UserMethod().getUserAccounts(token) : null

        setAccount(user)
    }

    useEffect(() => {
        initial()
    }, [])

    return (
        <div>
            <Header />
            <LeftSide />

            <div className="pl-[250px] pr-[50px] pt-[100px] pb-[50px]">
                <div className="border-transparent border-[1px] h-[100vh] grid grid-cols-[35%,35%,30%] gap-[10px]">
                    <div className="bg-transparent h-full grid grid-cols-2 col-span-1 gap-[20px] text-[14px]">
                        <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px] bg-blue-700/80 text-white">
                            <p className="font-[medium]">สัญญาณซิกแนลคงเหลือ</p>
                            <p className="font-[light] text-[14px]">31 วัน</p>
                        </div>
                        <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px] bg-green-500/80 text-white">
                            <p className="font-[medium]">รายได้ของคุณ(ซื้อสัญญาณ)</p>
                            <p className="font-[light] text-[14px]">1,200 บาท</p>
                        </div>
                        <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px] bg-purple-700/80 text-white">
                            <p className="font-[medium]">สมาชิกทีมของคุณ</p>
                            <p className="font-[light] text-[14px]">10 คน</p>
                        </div>
                        <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px] bg-pink-500/80 text-white">
                            <p className="font-[medium]">รายได้ของคุณ(โบรกเกอร์)</p>
                            <p className="font-[light] text-[14px]">5,500 บาท</p>
                            <p className="font-[light] text-[12px]">รอการตรวจสอบ 1-3 วันทำการ</p>
                        </div>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-1 p-[10px]">
                        <p className="font-[medium] text-[14px]">ซื้อสัญญาณ</p>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-1 row-span-2 p-[10px]">
                        <p className="font-[medium] text-[14px]">ถอนเงิน</p>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px]">
                        <p className="font-[medium] text-[14px]">ลิงค์ Partner</p>
                        <div className="flex gap-[5px] items-center">
                            <p className="font-[light] text-[14px] text-black">https://outwittrader/register/{account?.id}</p>
                            <button onClick={()=>{
                                navigator.clipboard.writeText(`http://outwittrader/register/${account?.id}`);
                            }} className="font-[light] text-[12px] p-[5px] border-[1px] rounded-[8px]">Copy</button>
                        </div>

                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px]">
                        <p className="font-[medium] text-[14px]">โบรกเกอร์</p>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-2 p-[10px] overflow-scroll">
                        <table className="w-full">
                            <thead className="font-[medium] text-[14px]">
                                <tr>
                                    <td>ID</td>
                                    <td>วันที่ลงทะเบียน</td>
                                    <td>Buy 499฿</td>
                                    <td>Buy 1490฿</td>
                                    <td>Buy 2900฿</td>
                                    <td>Remark</td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-1 p-[10px] overflow-scroll">
                        <table>
                            <thead className="font-[medium] text-[14px]">
                                <tr>
                                    <td>ID</td>
                                    <td>กำไรจากการเทรด</td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard