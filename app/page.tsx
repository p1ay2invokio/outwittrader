'use client'

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { Carousel } from "flowbite-react";
import { FaDiscord, FaFacebook, FaLine, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";

interface Token {
  id: number,
  username: string
}

const Home = () => {

  let navigate = useRouter()

  let [username, setUsername] = useState<string>('')

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      let decoded = jwtDecode<Token>(token)
      console.log(decoded)
      setUsername(decoded.username)
    } else {
      navigate.push("/login")
    }
  }, [])

  return (
    <div>
      <Header />

      <div className="w-full mb-[100px] bg-white mt-[80px] flex  items-center flex-col">
        <p className="text-white font-[medium] text-[24px]">ยินดีต้อนรับ! สู่ OutwitTrader</p>

        <div className="">
          {/* <div>
            <p className="font-[medium] text-[20px]">ช่องทางติดตามข่าวสาร</p>
          </div> */}

          <div className="flex justify-center items-center mb-[20px] max-sm:hidden">
            <div className="w-full flex justify-center items-center">
              <Carousel className="h-[300px] w-full">
                <Image alt="." width={800} height={300} src="/1.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                <Image alt="." width={800} height={300} src="/2.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                <Image alt="." width={800} height={300} src="/3.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
              </Carousel>
            </div>
          </div>


          <div className="grid grid-cols-4 gap-[20px] mt-[20px] max-[1024px]:grid-cols-3 max-[600px]:grid-cols-1">
            <div className="flex flex-col gap-[10px]">
              <p className="font-[light] text-[14px]">เช่าสัญญาณ</p>
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <Image alt="." width={200} height={250} src="/signal.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
              </div>
              <div onClick={() => {
                navigate.push("/rental")
              }} className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-[light] text-[14px]">ห้องสัญญาณ</p>
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <Image alt="." width={200} height={250} src="/door.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
              </div>
              <div onClick={() => {
                navigate.push("/signal")
              }} className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-[light] text-[14px]">มือใหม่</p>
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <Image alt="." width={200} height={250} src="/news.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
              </div>
              <div onClick={() => {
                navigate.push("/learning/newbie")
              }} className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-[light] text-[14px]">คู่มือ</p>
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <Image alt="." width={200} height={250} src="/newbie.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
              </div>
              <div onClick={() => {
                navigate.push("/learning/guidebook")
              }} className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[100px] flex justify-center items-center flex-col">
        <div>
          <p className="font-[medium] text-[20px]">ช่องทางการติดต่อ</p>
        </div>
        <div className="grid grid-cols-5 gap-[20px] max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 mb-[100px]">
          <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
            <div className="flex gap-[10px] justify-center items-center mb-[10px]">
              <FaDiscord size={50} />
              <p className="font-[bold]">Discord</p>
            </div>
            <a target='blank' href="https://discord.gg/MVj5YnsMNM" className="font-[light] text-[12px]">https://discord.gg/MVj5YnsMNM</a>
          </div>
          <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
            <div className="flex gap-[10px] justify-center items-center mb-[10px]">
              <FaFacebook size={50} />
              <p className="font-[bold]">Facebook</p>
            </div>
            <a target='blank' href="https://www.facebook.com/share/17yQJBhhVs/" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.facebook.com/share/17yQJBhhVs/</a>
          </div>
          <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
            <div className="flex gap-[10px] justify-center items-center mb-[10px]">
              <FaTiktok size={50} />
              <p className="font-[bold]">Tiktok</p>
            </div>
            <a target='blank' href="https://www.tiktok.com/@outwittrader?_t=ZS-8u1IHEygb6G&_r=1" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.tiktok.com/@outwittrader</a>
          </div>
          <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
            <div className="flex gap-[10px] justify-center items-center mb-[10px]">
              <FaYoutube size={50} />
              <p className="font-[bold]">Youtube</p>
            </div>
            <a target='blank' href="https://www.youtube.com/@OutwitTrade" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.youtube.com/@OutwitTrade</a>
          </div>

          <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
            <div className="flex gap-[10px] justify-center items-center mb-[10px]">
              <FaLine size={50} />
              <p className="font-[bold]">Line OA</p>
            </div>
            <a target='blank' href="https://lin.ee/mV3lgMw" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://lin.ee/mV3lgMw</a>
          </div>

        </div>
      </div>

      <ToastContainer />
    </div>
  )
}


export default Home