'use client'

import Header from "@/app/Components/Header"
import LeftSide from "@/app/Components/LeftSide"
import { UserInterface } from "@/app/Interfaces/UserInterface"
import { OrderMethod } from "@/app/methods/OrderMethod"
import { PartnerInterface, TeamMethod } from "@/app/methods/TeamMethod"
import { UserMethod } from "@/app/methods/UserMethod"
import { END_POINT } from "@/config"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

const Dashboard = () => {

    const [account, setAccount] = useState<PartnerInterface[] | null>(null)
    const [orders_partner, setOrderPartner] = useState<any>([])

    const initial = async () => {
        const token = localStorage.getItem("token")

        const user = token ? await new TeamMethod().userTeam() : null

        const orders = token ? await new OrderMethod().getOrderPartnerBuy(token) : null

        console.log("USER PARTNER CHECK : ", user)

        // console.log(order_partner)

        setOrderPartner(orders)

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
                            <p className="font-[light] text-[10px]">20% จากการสั่งซื้อของ Partner</p>
                            {account && account.length > 0 ? <p className="font-[light] text-[14px]">{account[0].total_money.toFixed(2)} บาท</p> : null}
                        </div>
                        <div className="border-l-[4px] shadow-sm rounded-[4px] w-full h-full p-[10px] border-purple-700/80 text-black">
                            <p className="font-[medium]">สมาชิกทีมของคุณ</p>
                            {account && account.length > 0 ? <p className="font-[light] text-[14px]">{account[0].members} คน</p> : null}

                        </div>
                        <div className="border-l-[4px] shadow-sm rounded-[4px] w-full h-full p-[10px] border-pink-500/80 text-black">
                            <p className="font-[medium]">รายได้ของคุณ(โบรกเกอร์)</p>
                            {account && account.length > 0 ? <p className="font-[light] text-[14px]">{account[0].broker_money.toFixed(2)} บาท</p> : null}
                            <p className="font-[light] text-[12px]">รอการตรวจสอบ 1-3 วันทำการ</p>
                        </div>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-1 p-[10px]">
                        <p className="font-[medium] text-[16px] mb-[6px]">ซื้อสัญญาณ</p>
                        <div className="flex gap-[10px]">
                            <p className="font-[light] text-[14px]">ชื่อทีมของคุณ: </p>
                            <p className="font-[light] text-[14px]">{account && account.length > 0 ? account[0].team_name : null}</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <p className="font-[light] text-[14px]">จำนวนสมาชิก: </p>
                            <p className="font-[light] text-[14px]">{account && account.length > 0 ? account[0].members : null} คน</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <p className="font-[light] text-[14px]">จำนวนที่ซื้อสัญญาณ: </p>
                            <p className="font-[light] text-[14px]">{orders_partner && orders_partner.length > 0 ? orders_partner.length : null} ครั้ง</p>
                        </div>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-1 row-span-2 p-[10px]">
                        <p className="font-[medium] text-[14px]">ถอนเงิน</p>
                        <p className="font-[light]">รายได้รวมของคุณ</p>
                        <p className="font-[bold] text-[16px]">{account && account.length > 0 ? (account[0].total_money + account[0].broker_money).toFixed(2) : 0} บาท</p>
                        <div className="flex gap-[10px] text-[14px]">
                            <p className="font-[light]">ชื่อ : </p>
                            <p className="font-[light]">{account && account.length > 0 ? `${account[0].name} ${account[0].surname}` : ''}</p>
                        </div>
                        <div className="flex gap-[10px] text-[14px]">
                            <p className="font-[light]">ธนาคาร : </p>
                            <p className="font-[light]">{account && account.length > 0 ? `${account[0].bank_name}` : ''}</p>
                        </div>
                        <div className="flex gap-[10px] text-[14px]">
                            <p className="font-[light]">เลขบัญชี : </p>
                            <p className="font-[light]">{account && account.length > 0 ? `${account[0].bank_account}` : ''}</p>
                        </div>

                        <p>Vat 3%</p>
                        <p className="font-[bold] text-[16px]">{account && account.length > 0 ? ((account[0].total_money + account[0].broker_money) - ((account[0].total_money + account[0].broker_money) * 3 / 100)).toFixed(2) : 0} บาท</p>
                    </div>

                    {account && account.length > 0 ? <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px]">
                        <p className="font-[medium] text-[14px]">ลิงค์เว็บไซต์สำหรับการลงทะเบียน</p>
                        <div className="flex gap-[5px] items-center">
                            <p className="font-[light] text-[14px] text-black">{`https://outwittrader/register/${account[0].owner_id}`}</p>
                            <button onClick={() => {
                                navigator.clipboard.writeText(`https://outwittrader/register/${account[0].owner_id}`);
                            }} className="font-[light] text-[12px] p-[5px] border-[1px] rounded-[8px]">Copy</button>
                        </div>

                        <p className="font-[medium] text-[14px]">ลิงค์เว็บไซต์สำหรับการลงทะเบียน(โบรกเกอร์)</p>
                        <div className="flex gap-[5px] items-center">
                            <p className="font-[light] text-[14px] text-black">{account[0].broker_link}</p>
                            <button onClick={() => {
                                navigator.clipboard.writeText(`${account[0].broker_link}`);
                            }} className="font-[light] text-[12px] p-[5px] border-[1px] rounded-[8px]">Copy</button>
                        </div>

                    </div> : null}

                    <div className="border shadow-sm rounded-[4px] w-full h-full p-[10px]">
                        <p className="font-[medium] text-[14px] mb-[10px]">โบรกเกอร์</p>
                        <div className="flex gap-[10px]">
                            <p className="font-[light] text-[14px]">ชื่อทีมของคุณ: </p>
                            <p className="font-[light] text-[14px]">{account && account.length > 0 ? account[0].team_name : null}</p>
                        </div>
                        <p className="text-[14px] font-[light] mt-[10px]">เลข ID จากโบรกเกอร์</p>
                        <div className="flex gap-[10px]">
                            <input className="border-b-[2px] outline-none font-[light] text-[14px]" placeholder="กรอกเลข"></input>
                            <button className="font-[light] text-[14px]">ส่งข้อมูล</button>
                        </div>
                    </div>

                    <div className="border shadow-sm rounded-[4px] w-full h-full col-span-2 p-[10px] overflow-scroll">
                        <table className="w-full">
                            <thead className="font-[medium] text-[14px] border-b-[1px]">
                                <tr>
                                    <td>ID</td>
                                    <td>วันที่ลงทะเบียน</td>
                                    <td>Buy 499฿</td>
                                    <td>Buy 1490฿</td>
                                    <td>Buy 2900฿</td>
                                    <td>สถานะ</td>
                                    <td>Remark</td>
                                </tr>
                            </thead>
                            <tbody>
                                {orders_partner && orders_partner.length > 0 ? orders_partner.map((item: any, index: number) => {
                                    return (
                                        <tr className="font-[light] text-[14px]" key={index}>
                                            <td>{item.user_id}</td>
                                            <td>{dayjs(Number(item.timestamp)).format("DD/MM/YYYY")}</td>
                                            <td>{item.price == 499 ? '1' : '0'}</td>
                                            <td>{item.price == 1490 ? '1' : '0'}</td>
                                            <td>{item.price == 2900 ? '1' : '0'}</td>
                                            <td>{item.status == 0 ? 'รอการยืนยัน' : 'สำเร็จ'}</td>
                                            {/* colSpan={item.price == 499 ? 1 : item.price == 1490 ? 2 : item.price == 2900 ? 3 : 0} */}
                                            {/* <td colSpan={4}>1</td> */}
                                        </tr>
                                    )
                                }) : null}
                            </tbody>
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