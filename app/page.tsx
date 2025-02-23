'use client'

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

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

      <div className="w-full h-[calc(100vh-80px)] bg-white mt-[80px] flex  items-center flex-col">
        <p className="text-white font-[medium] text-[24px]">ยินดีต้อนรับ! สู่ OutwitTrader</p>

        <div className="">
          <div>
            <p className="font-[medium] text-[20px]">ช่องทางติดตามข่าวสาร</p>
          </div>


          <div className="grid grid-cols-5 gap-[20px] mt-[20px] max-[1024px]:grid-cols-3 max-[600px]:grid-cols-1">
            <div className="flex flex-col gap-[10px]">
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <img src="signal.webp" className="w-full h-full object-cover rounded-[8px]"></img>
              </div>
              <div onClick={() => {
                navigate.push("/rental")
              }} className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <img src="door.webp" className="w-full h-full object-cover rounded-[8px]"></img>
              </div>
              <div onClick={() => {
                navigate.push("/signal")
              }} className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <img src="news.webp" className="w-full h-full object-cover rounded-[8px]"></img>
              </div>
              <div className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <img src="newbie.webp" className="w-full h-full object-cover rounded-[8px]"></img>
              </div>
              <div className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
                <img src="trader.webp" className="w-full h-full object-cover rounded-[8px]"></img>
              </div>
              <div className="w-full h-[40px] bg-blue-700 flex justify-center items-center rounded-[4px] text-white font-[medium] cursor-pointer">
                <p>คลิกเพื่อดู</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}


export default Home