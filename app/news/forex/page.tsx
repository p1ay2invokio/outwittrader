'use client'

import { NewsMethod } from "@/app/methods/NewsMethod"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { MdAccessTimeFilled } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { IoArrowBackCircleSharp, IoFolderOpen } from "react-icons/io5"
import LeftSide from "@/app/Components/LeftSide";
import dayjs, { Dayjs } from "dayjs";
import Header from "@/app/Components/Header";
import { FcRefresh } from "react-icons/fc";
import { BiRefresh } from "react-icons/bi";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
import { UserInterface } from "@/app/Interfaces/UserInterface";

interface NewsInterface {
    forex_id: number,
    forex_news: string
}

interface ForexInterface {
    country: string,
    date: string,
    forecast: string,
    impact: string,
    previous: string,
    title: string
}

const Forex = () => {

    const navigate = useRouter()


    const [news, setNews] = useState<ForexInterface[]>([])
    const [user, setUser] = useState<UserInterface | null>(null)

    const [loadData, setLoadData] = useState<boolean>(true)
    const [selectDate, setSelectDate] = useState<string>('')
    const [refresh, setRefresh] = useState<number>(0)

    let now = dayjs().format()

    const initial = async () => {

        let token = localStorage.getItem("token")

        if(token){
            let response_user = jwtDecode(token) as UserInterface
            console.log(response_user)
            setUser(response_user)
        }

        let forexData = await new NewsMethod().getForex()
        let today = new Date().toLocaleString('EN-en').split("/")
        let convert_today = `${today[2].split(" ")[0].split(",")[0]}-${Number(today[0]) < 10 ? `0${today[0]}` : today[0]}-${Number(today[1]) < 10 ? `0${today[1]}` : today[1]}`

        // console.log(forexData)
        // console.log(today)

        // console.log(convert_today)

        console.log(forexData)

        let convertData: [] = JSON.parse(forexData[0].forex_news)
        console.log(convertData)
        console.log(convert_today)
        let dataList = convertData.filter((item: ForexInterface) => {
            return item.date.includes(selectDate ? selectDate : convert_today)
        })

        // console.log(convertData)
        console.log(dataList)
        setNews(dataList)

        setLoadData(false)
    }

    useEffect(() => {
        initial()
    }, [selectDate, refresh])


    if(loadData){
        return null
    }

    return (
        <div className="pt-[20px] pl-[200px] max-[768px]:pl-[0px]">

            <LeftSide />

            <Header />

            {/* <IoArrowBackCircleSharp onClick={() => {
                navigate.push('/signal')
            }} className="cursor-pointer absolute top-5 left-10" size={40}></IoArrowBackCircleSharp> */}

            {/* <div className="flex gap-[10px] justify-center mb-[20px]">
                <div>
                    <div onClick={() => {
                        navigate.push("/news/time")
                    }} className="p-[10px] bg-blue-500 text-white rounded-[8px] font-[medium] text-[14px] flex gap-[5px] items-center">
                        <p>ช่วงเวลาการเทรด</p>
                        <MdAccessTimeFilled size={20}></MdAccessTimeFilled>
                    </div>
                </div>
                <div>
                    <div className="p-[10px] bg-blue-500/80 text-white rounded-[8px] font-[medium] text-[14px] flex gap-[5px] items-center">
                        <p>ForexFactory</p>
                        <GiFactory size={20}></GiFactory>
                    </div>
                </div>
            </div> */}



            <div className="flex flex-col justify-center items-center mb-20 mt-16">
                <div className="flex items-center gap-[10px] mb-[10px]">
                    {/* <p className="font-[medium]">วันที่ : {now.split("T")[0]}</p> */}
                    <label className="font-[medium]">วันที่</label>
                    <input value={!selectDate ? now.split("T")[0] : selectDate} onChange={(e)=>{
                        console.log(e.target.value)
                        setSelectDate(e.target.value)
                    }} type="date"></input>
                    
                    {user && user.role == 2 ? <div onClick={async()=>{
                        let data:any = await new NewsMethod().updateForex()

                        if(data.updateForexNews){
                            Swal.fire("อัพเดทข่าวสาร Forex Factory สำเร็จ")
                            setRefresh(refresh+1)
                        }else{
                            Swal.fire("บางอย่างผิดพลาดรอ 5 นาทีแล้วกด refresh ใหม่")
                        }

                        // console.log(data)

                    }} className="w-[90px] h-[40px] bg-blue-800 gap-[5px] cursor-pointer rounded-[8px] flex justify-center items-center">
                        <BiRefresh size={30} className="text-white"  />
                        <p className="text-white font-[medium] text-[14px]">อัพเดท</p>
                    </div> : null}

                </div>
                <table className="w-[80%]">
                    <thead className="bg-blue-800 text-white">
                        <tr className="font-[medium] text-[14px] max-[768px]:text-[10px]">
                            <td className="p-[5px] rounded-tl-[8px]">วันที่</td>
                            <td>เวลา</td>
                            <td>สกุลเงิน</td>
                            <td>เหตุการณ์</td>
                            <td>ผลกระทบ</td>
                            <td>พยากรณ์</td>
                            <td className="rounded-tr-[8px]">ก่อนหน้า</td>
                        </tr>
                    </thead>
                    <tbody>
                        {news && news.length > 0 ? news.map((item, index) => {
                            return (
                                <tr className={`border-b-[1px] font-[light] text-[14px] border-black ${index % 2 == 0 ? 'bg-slate-200' : 'bg-white'}`} key={index}>
                                    <td className="p-[5px]">{item.date.split("T")[0]}</td>
                                    <td>{item.date.split("T")[1].split('-')[0]}</td>
                                    <td>{item.country}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <div>
                                            {item.impact == 'Low' ? <div className="flex gap-[5px]">
                                                <IoFolderOpen size={20} className="text-yellow-300"></IoFolderOpen>
                                                <p className="text-yellow-400">{item.impact}</p>
                                            </div> : item.impact == 'Medium' ? <div className="flex gap-[5px]">
                                                <IoFolderOpen size={20} className="text-orange-400"></IoFolderOpen>
                                                <p className="text-orange-500">{item.impact}</p>
                                            </div> : item.impact == 'High' ? <div className="flex gap-[5px]">
                                                <IoFolderOpen size={20} className="text-red-600"></IoFolderOpen>
                                                <p className="text-red-600">{item.impact}</p>
                                            </div> : null}
                                        </div>
                                    </td>
                                    <td>{item.forecast}</td>
                                    <td>{item.previous}</td>
                                </tr>

                            )
                        }) : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Forex