'use client'

import Header from "@/app/Components/Header"
import LeftSide from "@/app/Components/LeftSide"
import { UserInterface } from "@/app/Interfaces/UserInterface"
import { PartnerInterface, TeamMethod } from "@/app/methods/TeamMethod"
import { UserMethod } from "@/app/methods/UserMethod"
import { END_POINT } from "@/config"
import { useEffect, useState } from "react"

const Dashboard = () => {

    const [account, setAccount] = useState<PartnerInterface[] | null>(null)

    const initial = async () => {
        const token = localStorage.getItem("token")

        const user = token ? await new TeamMethod().userTeam() : null

        console.log(user)

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
                        <div className="border-l-[4px] shadow-sm rounded-[4px] w-full h-full p-[10px] border-blue-700/80 text-black">
                            <p className="font-[medium]">สัญญาณซิกแนลคงเหลือ</p>
                            {account && account.length > 0 ? <p className="font-[light] text-[14px]">{account[0].total_days} วัน</p> : null}
                        </div>
                        <div className="border-l-[4px] shadow-sm rounded-[4px] w-full h-full p-[10px] border-green-500/80 text-black">
                            <p className="font-[medium]">รายได้ของคุณ(ซื้อสัญญาณ)</p>
                            {account && account.length > 0 ? <p className="font-[light] text-[14px]">{account[0].total_money} บาท</p> : null}
                        </div>
                        <div className="border-l-[4px] shadow-sm rounded-[4px] w-full h-full p-[10px] border-purple-700/80 text-black">
                            <p className="font-[medium]">สมาชิกทีมของคุณ</p>
                            {account && account.length > 0 ? <p className="font-[light] text-[14px]">{account[0].members} คน</p> : null}

                        </div>
                        <div className="border-l-[4px] shadow-sm rounded-[4px] w-full h-full p-[10px] border-pink-500/80 text-black">
                            <p className="font-[medium]">รายได้ของคุณ(โบรกเกอร์)</p>
                            <p className="font-[light] text-[14px]">5,500 บาท</p>
                            <p className="font-[light] text-[12px]">รอการตรวจสอบ 1-3 วันทำการ</p>
                        </div>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-1 p-[10px]">
                        <p className="font-[medium] text-[14px] mb-[6px]">ซื้อสัญญาณ</p>
                        <div className="flex gap-[10px]">
                            <p className="font-[medium] text-[14px]">ชื่อทีมของคุณ: </p>
                            <p className="font-[light] text-[14px]">{account && account.length > 0 ? account[0].team_name : null}</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <p>จำนวนสมาชิก: </p>
                            <p>{account && account.length > 0 ? account[0].members : null} คน</p>
                        </div>
                        <div className="flex">
                            <p>จำนวนที่ซื้อสัญญาณ: </p>
                            <p>{account && account.length > 0 ? account[0].team_name : null}</p>
                        </div>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-1 row-span-2 p-[10px]">
                        <p className="font-[medium] text-[14px]">ถอนเงิน</p>
                    </div>

                    {account && account.length > 0 ? <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px]">
                        <p className="font-[medium] text-[14px]">ลิงค์เว็บไซต์สำหรับการลงทะเบียน</p>
                        <div className="flex gap-[5px] items-center">
                            <p className="font-[light] text-[14px] text-black">{`${END_POINT}/register/${account[0].owner_id}`}</p>
                            <button onClick={() => {
                                // navigator.clipboard.writeText(`http://outwittrader/register/${account?.id}`);
                            }} className="font-[light] text-[12px] p-[5px] border-[1px] rounded-[8px]">Copy</button>
                        </div>

                        <p className="font-[medium] text-[14px]">ลิงค์เว็บไซต์สำหรับการลงทะเบียน(โบรกเกอร์)</p>
                        <div className="flex gap-[5px] items-center">
                            <p className="font-[light] text-[14px] text-black">{account[0].broker_link}</p>
                            <button onClick={() => {
                                // navigator.clipboard.writeText(`http://outwittraßer/register/${account?.id}`);
                            }} className="font-[light] text-[12px] p-[5px] border-[1px] rounded-[8px]">Copy</button>
                        </div>

                    </div> : null}

                    <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px]">
                        <p className="font-[medium] text-[14px]">โบรกเกอร์</p>
                        <div className="flex">
                            <p className="font-[medium] text-[14px]">ชื่อทีมของคุณ: </p>
                            <p className="font-[light] text-[14px]">{account && account.length > 0 ? account[0].team_name : null}</p>
                        </div>
                        <p>เลข ID จากโบรกเกอร์</p>
                        <input placeholder="กรอกเลข"></input>
                        <button>ส่งข้อมูล</button>
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