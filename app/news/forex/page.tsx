'use client'

import { NewsMethod } from "@/app/methods/NewsMethod"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { MdAccessTimeFilled } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { IoArrowBackCircleSharp } from "react-icons/io5"

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

    const initial = async () => {
        let forexData = await new NewsMethod().getForex()
        let today = new Date().toLocaleString('EN-en').split("/")
        let convert_today = `${today[2].split(" ")[0].split(",")[0]}-${Number(today[0]) < 10 ? `0${today[0]}` : today[0]}-${Number(today[1]) < 10 ? `0${today[1]}` : today[1]}`

        // console.log(today)

        // console.log(convert_today)

        let convertData: [] = JSON.parse(forexData[0].forex_news)
        let dataList = convertData.filter((item: ForexInterface) => {
            return item.date.includes(convert_today)
        })

        // console.log(convertData)
        // console.log(dataList)
        setNews(dataList)
    }

    useEffect(() => {
        initial()
    }, [])

    return (
        <div className="pt-[20px]">

            <IoArrowBackCircleSharp onClick={() => {
                navigate.push('/signal')
            }} className="cursor-pointer absolute top-5 left-10" size={40}></IoArrowBackCircleSharp>

            <div className="flex gap-[10px] justify-center mb-[20px]">
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
            </div>

            <div className="flex justify-center items-center mb-20">
                <table className="w-[800px]">
                    <thead className="bg-black text-white">
                        <tr>
                            <td>Currency</td>
                            <td>Impact</td>
                            <td></td>
                            <td>Forecast</td>
                            <td>Previous</td>
                        </tr>
                    </thead>
                    <tbody>
                        {news && news.length > 0 ? news.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.country}</td>
                                    <td>{item.impact}</td>
                                    <td>{item.title}</td>
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