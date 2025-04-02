'use client'

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { jwtDecode } from "jwt-decode";
import { useRouter, redirect } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { FaDiscord, FaFacebook, FaLine, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import LeftSide from "./Components/LeftSide";
import { Carousel } from "flowbite-react";

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
      redirect("/landingpage")
    }
  }, [])

  return (
    <div>
      <div>

        <Header />

        <LeftSide />

        <div className="w-full h-[100vh] pl-[250px] pr-[50px] gap-[10px] pt-[100px] flex mb-[300px]">
          <div className="grid-cols-3 grid gap-[10px] w-full cols-span-2">
            <div className="w-full border-[1px] rounded-[8px] h-[250px] shadow col-span-2">
              {/* <p>Test1</p> */}
              <Carousel slide={true} slideInterval={3000} className="w-full h-full">
                <img className="w-full h-full" src="/slide1.png"></img>
                <img className="w-full h-full" src="/slide2.png"></img>
                <img className="w-full h-full" src="/slide3.png"></img>
              </Carousel>
            </div>

            <div className="w-full col-span-1 border-[1px] h-[250px] rounded-[8px] shadow">
              <iframe className="w-full h-full rounded-[8px]" src="https://www.youtube.com/embed/dd1jDsX0VbI?si=AJw70oHooDvRDlUg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>


            <div className="w-full col-span-2 border-[1px] rounded-[8px] shadow p-[10px]">
              <p className="font-[medium]">ข่าวสาร</p>
            </div>


            <div className="w-full grid grid-rows-4 gap-[10px]">
              <div className="w-full border-[1px]  rounded-[8px] shadow row-span-1 flex justify-between items-center p-[20px]">
                <div>
                  <p className="font-[medium]">กลุ่ม Line Open Chat</p>
                  <p className="font-[light] text-[12px] opacity-[60%]">ร่วมแบ่งปันเทคนิคการเทรดกับชุมชนนักลงทุน</p>
                  <p className="font-[light] text-[12px] opacity-[60%]">เข้าร่วมกลุ่มเลย!</p>
                </div>
                <img src="/qropenchat.jpg" className="w-[100px] h-[100px]"></img>
              </div>
              <div className="w-full border-[1px] rounded-[8px] shadow row-span-1 flex justify-between items-center p-[20px]">
                <div className="w-[200px]">
                  <p className="font-[medium]">Line Official</p>
                  <p className="font-[light] text-[12px] opacity-[60%]">ไม่พลาดทุกโอกาสในตลาด! เข้าร่วมกลุ่มเทรดเดอร์ของเรา</p>
                </div>
                <img src="/qrline.png" className="w-[100px] h-[100px]"></img>
              </div>
              <div className="w-full border-[1px] rounded-[8px] shadow  row-span-2 p-[10px]">
                <p className="font-[medium] mb-[10px]">(!) คำเตือนความเสี่ยง :</p>
                <p className="font-[light] text-[10px]">เว็บไซต์ OutwitTrader นี้จัดทำขึ้นเพื่อให้ข้อมูลเชิงการศึกษาและสัญญาณการเทรดเท่านั้น มิได้มีสถานะเป็นโบรกเกอร์หรือผู้ให้บริการด้านการซื้อขายใด ๆ ผลลัพธ์ที่ปรากฏอ้างอิงจากการทดสอบย้อนหลัง (Back Test) และไม่ได้เป็นการรับประกันผลกำไรในอนาคต โปรดพิจารณาข้อมูลอย่างรอบคอบ ศึกษาตลาดอย่างต่อเนื่อง และติดตามข่าวสารที่อัปเดตจากแอดมินเพื่อให้การตัดสินใจของท่านเป็นไปอย่างมีประสิทธิภาพ.
                  การใช้งานสัญญาณซิกแนล OutwitTrader มีความเสี่ยงสูง ไม่เหมาะสำหรับนักลงทุนทุกคน คุณอาจเกิดสูญเสียในเงินทุนได้ เมื่อได้รับผลิตภัณฑ์อนุพันธ์ในการคาดการของระบบเรา คุณไม่มีสิทธิหรือมีภาระผูกพันต่อสินทรัพย์ทางการเงินใดๆ ที่เกี่ยวข้อง ผลการดำเนินงานในอดีตไม่ได้บ่งชี้ถึงผลการดำเนินงานในอนาคต และกฎหมายภาษีใดๆ อาจมีการเปลี่ยนแปลง ข้อมูลบนเว็บไซต์นี้มีลักษณะทั่วไปและไม่คำนึงถึงวัตถุประสงค์ส่วนบุคคล สถานการณ์ทางการเงิน หรือความต้องการของคุณ ดังนั้นก่อนที่จะปฏิบัติตามคำแนะนำคุณควรพิจารณาว่าคำแนะนำนั้นเหมาะสมกับคุณหรือไม่โดยควรคำนึงถึงวัตถุประสงค์สถานการณ์ทางการเงินและความต้องการของคุณ เราขอแนะนำให้คุณขอคำแนะนำหากจำเป็น โปรดอ่านเอกสารทางกฎหมายของเราเพื่อให้แน่ใจว่าคุณได้ยอมรับและเข้าใจถึงความเสี่ยงอย่างถ่องแท้ก่อนตัดสินใจทำการใช้งานสัญญาณซิกแนลเข้าซื้อขาย.</p>
              </div>
            </div>


          </div>

          {/* <div className="h-[400px] grid-cols-2 grid gap-[10px] w-full cols-span-1">
            <div className="w-full bg-red-500">

            </div>

            <div className="w-full bg-red-300 grid grid-rows-4 gap-[10px]">
              <div className="w-full bg-red-500 row-span-1">

              </div>
              <div className="w-full bg-red-500 row-span-1">

              </div>
              <div className="w-full bg-red-500 row-span-2">

              </div>

            </div>
          </div> */}

        </div>

        {/* <div className="w-full mb-[100px] bg-white mt-[10px] flex  items-center flex-col pl-[200px]">
          <p className="text-white font-[medium] text-[24px]">ยินดีต้อนรับ! สู่ OutwitTrader</p>

          <div className="">

            <div className="flex justify-center items-center mb-[20px]">
              <div className="w-full flex justify-center items-center">
                <Carousel className="h-[250px] w-full" >
                  <Image alt="." width={1050} height={250} src="/banner_mindset.webp" className="w-full rounded-[8px]"></Image>
                  <Image alt="." width={800} height={300} src="/2.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                  <Image alt="." width={800} height={300} src="/3.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                </Carousel>
              </div>
            </div>


            <div className="grid grid-cols-4 gap-[20px] mt-[20px] place-items-center max-[1024px]:grid-cols-3 max-[700px]:grid-cols-2 max-[600px]:grid-cols-2 max-[600px]:w-[380px] max-[600px]:gap-[5px]">
              <div className="flex flex-col gap-[10px]">
                <p className="font-[light] text-[14px]">เช่าสัญญาณ</p>
                <div className="w-full h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
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
                <div className="w-full h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
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
                <div className="w-full h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
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
                <div className="w-full h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center p-[10px]">
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
        </div> */}

        {/* <div className="mt-[100px] flex justify-center items-center flex-col">
          <div className="flex flex-col justify-center items-center">
            <p className="font-[medium] text-[20px]">ช่องทางการติดต่อ</p>
            <p className="font-[light] text-[12px] text-gray-500">(Contract Us)</p>
          </div>
          <div className="grid grid-cols-5 gap-[20px] max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[700px]:grid-cols-2 mb-[100px] max-[600px]:gap-[5px]">
            <div className="w-full h-[200px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
              <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                <FaDiscord size={50} />
                <p className="font-[bold]">Discord</p>
              </div>
              <a target='blank' href="https://discord.gg/MVj5YnsMNM" className="font-[light] text-[12px]">https://discord.gg/MVj5YnsMNM</a>
            </div>
            <div className="w-full h-[200px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
              <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                <FaFacebook size={50} />
                <p className="font-[bold]">Facebook</p>
              </div>
              <a target='blank' href="https://www.facebook.com/share/17yQJBhhVs/" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.facebook.com/share/17yQJBhhVs/</a>
            </div>
            <div className="w-full h-[200px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
              <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                <FaTiktok size={50} />
                <p className="font-[bold]">Tiktok</p>
              </div>
              <a target='blank' href="https://www.tiktok.com/@outwittrader?_t=ZS-8u1IHEygb6G&_r=1" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.tiktok.com/@outwittrader</a>
            </div>
            <div className="w-full h-[200px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
              <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                <FaYoutube size={50} />
                <p className="font-[bold]">Youtube</p>
              </div>
              <a target='blank' href="https://www.youtube.com/@OutwitTrade" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.youtube.com/@OutwitTrade</a>
            </div>

            <div className="w-full h-[200px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
              <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                <FaLine size={50} />
                <p className="font-[bold]">Line OA</p>
              </div>
              <a target='blank' href="https://lin.ee/mV3lgMw" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://lin.ee/mV3lgMw</a>
            </div>

          </div>
        </div> */}

        <ToastContainer />
      </div>
    </div>
  )
}


export default Home