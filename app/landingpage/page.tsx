'use client'

import { useEffect, useRef } from "react"
import Header from "../Components/Header"
import { Howl, Howler } from 'howler'
import { FcBullish, FcDocument, FcRefresh, FcTimeline } from "react-icons/fc"

const LandingPage = () => {

    const videoRef = useRef(null)

    // useEffect(() => {
    //     let sound = new Howl({
    //         src: './video.mp3',
    //         // autoplay: true,
    //         // html5: true
    //     })

    //     sound.play()

    // }, [])

    return (
        <div>
            <Header />

            <div className="flex flex-col gap-4 fixed top-[200px] right-[0px]">
                <a href="#section1" className="w-[100px] h-[40px] rounded-tl-[8px] rounded-bl-[8px] bg-blue-500 flex justify-center items-center cursor-pointer">
                    <p className="font-[medium] text-white">พาร์ท 1</p>
                </a>
                <a href="#section2" className="w-[100px] h-[40px] rounded-tl-[8px] rounded-bl-[8px] bg-blue-500 flex justify-center items-center cursor-pointer">
                    <p className="font-[medium] text-white">พาร์ท 2</p>
                </a>
                <a href="#section3" className="w-[100px] h-[40px] rounded-tl-[8px] rounded-bl-[8px] bg-blue-500 flex justify-center items-center cursor-pointer">
                    <p className="font-[medium] text-white">พาร์ท 3</p>
                </a>
                <a href="#section4" className="w-[100px] h-[40px] rounded-tl-[8px] rounded-bl-[8px] bg-blue-500 flex justify-center items-center cursor-pointer">
                    <p className="font-[medium] text-white">พาร์ท 4</p>
                </a>
            </div>

            <div className="h-[calc(100vh+60px)] flex justify-center items-center bg-[url(/bg2.webp)] bg-cover" id="section1">
                {/* <img src="./bg.webp" className="h-full w-full object-cover"></img> */}
                <div className="flex justify-center items-center max-[1024px]:mt-[50px]">
                    <div className="flex items-center max-[1200px]:flex-col gap-[20px]">
                        <div className="w-[600px] max-[600px]:w-[300px] max-[600px]:mt-[50px] max-[820px]:mb-[30px] p-[20px] bg-white/90 shadow rounded-[8px]">
                            <p className="font-[medium] text-[24px] text-black">ผู้ให้บริการปล่อยเช่าสัญญาน OutwitTrader</p>
                            <p className="font-[light] text-[16px] text-black">เรามีการทดสอบ สถิติย้อนหลัง OutwitTrader มีความแม่นยำสูงถึง 80-95% โดยมีการใช้สัญญาณและใช้เทคนิคประกอบการตัดสินใจ สัญญาณออกวันละ 30-70 สัญญาณต่อวัน สามารถใช้ร่วมกับตลาด ไบนารี่ออฟชั่น</p>
                            <button className="w-[170px] h-[45px] border-[0px] border-white mt-[15px] font-[medium] text-[20px] bg-black text-white rounded-[8px]">เริ่มต้นตอนนี้</button>
                        </div>
                        <div className="w-[560px] h-[315px] max-[600px]:w-[300px]">
                            <img src="/com.webp"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[100vh] flex flex-col justify-center items-center bg-white" id="section2">

                <div className="w-[700px] rounded-[4px]">
                    <video className="rounded-[4px]" ref={videoRef} autoPlay muted={true} loop src="/video.mp4">
                        {/* <source src="/video.mp4" type="video/mp4"></source> */}
                    </video>
                </div>
                <div className="flex flex-col justify-center items-center mt-[10px] p-[10px] bg-white">
                    <p className="font-[medium] text-[24px]">ทำไมต้องใช้ OutwitTrader</p>
                    <p className="font-[light] text-[16px] w-[800px] max-[900px]:w-[300px] text-center mb-[20px]">
                        OutwitTrader มอบเครื่องมือและกลยุทธ์ที่ขับเคลื่อนด้วยปัญญาประดิษฐ์ เพื่อให้คุณสามารถเทรดอย่างมั่นใจและเพิ่มโอกาสในการทำกำไรได้อย่างสูงสุด
                        เปิดการรองรับโปรแกรมอ่านหน้าจอ
                        หากต้องการเปิดการสนับสนุนโปรแกรมอ่านหน้าจอ ให้กด Ctrl+Alt+Z หากต้องการเรียนรู้เกี่ยวกับแป้นพิมพ์ลัด ให้กด Ctrl+เครื่องหมายทับ (/)
                    </p>
                </div>
            </div>

            <div className="h-[100vh] flex flex-col justify-center items-center" id="section3">
                <p className="font-[medium] text-[24px]">บริการของเรา</p>
                <p className="font-[light] text-[16px] text-black/50">Our Services</p>
                <div className="grid grid-cols-3 mt-[20px] gap-[30px] w-[1200px] max-[1200px]:grid-cols-1 max-[600px]:w-[300px]">
                    <div className="flex flex-col justify-center items-center gap-[20px] bg-white p-[20px] rounded-[12px] shadow-md">
                        <FcBullish size={60}></FcBullish>
                        <div className="flex flex-col items-center">
                            <p className="font-[medium] mb-[10px]">อินดิเคเตอร์ AI ขั้นสูง</p>
                            <p className="font-[light] text-[14px] text-center max-[1200px]:w-[300px]">OutwitTrader ใช้เทคโนโลยี AI ที่ทันสมัยเพื่อวิเคราะห์ตลาดและให้สัญญาณการเทรดที่มีอัตราการชนะสูงถึง 90% ซึ่งผ่านการทดสอบและปรับปรุงอย่างต่อเนื่อง ตั้งแต่ปี 2023 จึงมั่นใจได้ว่าคุณจะได้รับข้อมูลที่มีคุณภาพ</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] bg-white p-[20px] rounded-[12px] shadow-md">
                        <FcRefresh size={60}></FcRefresh>
                        <div className="flex flex-col items-center">
                            <p className="font-[medium] mb-[10px]">การอัปเดตอย่างต่อเนื่อง</p>
                            <p className="font-[light] text-[14px] text-center max-[1200px]:w-[300px]">OutwitTrader มุ่งมั่นที่จะพัฒนาเทคโนโลยีอย่างไม่หยุดยั้ง โดยมีการอัปเดตและปรับปรุงอัลกอริธึมอยู่เสมอ เพื่อให้คุณได้รับเครื่องมือและข้อมูลที่ดีที่สุดในการตัดสินใจเทรด</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] bg-white p-[20px] rounded-[12px] shadow-md">
                        <FcDocument size={60}></FcDocument>
                        <div className="flex flex-col items-center">
                            <p className="font-[medium] mb-[10px]">คอร์สการเรียนรู้และเวิร์กช็อป</p>
                            <p className="font-[light] text-[14px] text-center max-[1200px]:w-[300px]">เรามีคอร์สการเรียนรู้ที่ออกแบบมาเพื่อทุกระดับ ไม่ว่าคุณจะเป็นมือใหม่หรือมีประสบการณ์แล้ว คอร์สของเราจะช่วยเสริมสร้างความรู้และทักษะในการเทรดที่จำเป็น รวมถึงการใช้ AI ในการวิเคราะห์ตลาด</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[calc(100vh+60px)] pt-[80px] flex flex-col items-center bg-white" id="section4">
                <div className="w-[80%]">
                    <div className="w-[100%] h-[440px] p-[10px] bg-blue-800 text-white rounded-[8px]">
                        <p className="font-[medium] text">คำเตือนความเสี่ยง:</p>
                        <p className="font-[light]">
                            อัพเดทใหม่_21032025

                            100%
                            N62:AA69

                            เว็บไซต์ OutwitTrader นี้จัดทำขึ้นเพื่อให้ข้อมูลเชิงการศึกษาและสัญญาณการเทรดเท่านั้น มิได้มีสถานะเป็นโบรกเกอร์หรือผู้ให้บริการด้านการซื้อขายใด ๆ ผลลัพธ์ที่ปรากฏอ้างอิงจากการทดสอบย้อนหลัง (Back Test) และไม่ได้เป็นการรับประกันผลกำไรในอนาคต โปรดพิจารณาข้อมูลอย่างรอบคอบ ศึกษาตลาดอย่างต่อเนื่อง และติดตามข่าวสารที่อัปเดตจากแอดมินเพื่อให้การตัดสินใจของท่านเป็นไปอย่างมีประสิทธิภาพ.
                            การใช้งานสัญญาณซิกแนล OutwitTrader มีความเสี่ยงสูง ไม่เหมาะสำหรับนักลงทุนทุกคน คุณอาจเกิดสูญเสียในเงินทุนได้ เมื่อได้รับผลิตภัณฑ์อนุพันธ์ในการคาดการของระบบเรา คุณไม่มีสิทธิหรือมีภาระผูกพันต่อสินทรัพย์ทางการเงินใดๆ ที่เกี่ยวข้อง ผลการดำเนินงานในอดีตไม่ได้บ่งชี้ถึงผลการดำเนินงานในอนาคต และกฎหมายภาษีใดๆ อาจมีการเปลี่ยนแปลง ข้อมูลบนเว็บไซต์นี้มีลักษณะทั่วไปและไม่คำนึงถึงวัตถุประสงค์ส่วนบุคคล สถานการณ์ทางการเงิน หรือความต้องการของคุณ ดังนั้นก่อนที่จะปฏิบัติตามคำแนะนำคุณควรพิจารณาว่าคำแนะนำนั้นเหมาะสมกับคุณหรือไม่โดยควรคำนึงถึงวัตถุประสงค์สถานการณ์ทางการเงินและความต้องการของคุณ เราขอแนะนำให้คุณขอคำแนะนำหากจำเป็น โปรดอ่านเอกสารทางกฎหมายของเราเพื่อให้แน่ใจว่าคุณได้ยอมรับและเข้าใจถึงความเสี่ยงอย่างถ่องแท้ก่อนตัดสินใจทำการใช้งานสัญญาณซิกแนลเข้าซื้อขาย.



                            เว็บไซต์ OutwitTrader นี้จัดทำขึ้นเพื่อให้ข้อมูลเชิงการศึกษาและสัญญาณการเทรดเท่านั้น มิได้มีสถานะเป็นโบรกเกอร์หรือผู้ให้บริการด้านการซื้อขายใด ๆ ผลลัพธ์ที่ปรากฏอ้างอิงจากการทดสอบย้อนหลัง (Back Test) และไม่ได้เป็นการรับประกันผลกำไรในอนาคต โปรดพิจารณาข้อมูลอย่างรอบคอบ ศึกษาตลาดอย่างต่อเนื่อง และติดตามข่าวสารที่อัปเดตจากแอดมินเพื่อให้การตัดสินใจของท่านเป็นไปอย่างมีประสิทธิภาพ.
                            การใช้งานสัญญาณซิกแนล OutwitTrader มีความเสี่ยงสูง ไม่เหมาะสำหรับนักลงทุนทุกคน คุณอาจเกิดสูญเสียในเงินทุนได้ เมื่อได้รับผลิตภัณฑ์อนุพันธ์ในการคาดการของระบบเรา คุณไม่มีสิทธิหรือมีภาระผูกพันต่อสินทรัพย์ทางการเงินใดๆ ที่เกี่ยวข้อง ผลการดำเนินงานในอดีตไม่ได้บ่งชี้ถึงผลการดำเนินงานในอนาคต และกฎหมายภาษีใดๆ อาจมีการเปลี่ยนแปลง ข้อมูลบนเว็บไซต์นี้มีลักษณะทั่วไปและไม่คำนึงถึงวัตถุประสงค์ส่วนบุคคล สถานการณ์ทางการเงิน หรือความต้องการของคุณ ดังนั้นก่อนที่จะปฏิบัติตามคำแนะนำคุณควรพิจารณาว่าคำแนะนำนั้นเหมาะสมกับคุณหรือไม่โดยควรคำนึงถึงวัตถุประสงค์สถานการณ์ทางการเงินและความต้องการของคุณ เราขอแนะนำให้คุณขอคำแนะนำหากจำเป็น โปรดอ่านเอกสารทางกฎหมายของเราเพื่อให้แน่ใจว่าคุณได้ยอมรับและเข้าใจถึงความเสี่ยงอย่างถ่องแท้ก่อนตัดสินใจทำการใช้งานสัญญาณซิกแนลเข้าซื้อขาย.
                        </p>
                        <div className="flex gap-[20px] mt-[30px] font-[light] underline">
                            <p>ติดต่อเรา</p>
                            <p>ข้อตกลงและเงื่อนไข</p>
                            <p>นโยบาย AML และ KYC</p>
                            <p>นโยบาบความเป็นส่วนตัว</p>
                            <p>นโยบายการชำระเงิน</p>
                            <p>สภาพแวดล้อมด้านการกำกับดูและ</p>
                            <p>One-Click Payment Policy</p>
                        </div>

                    </div>
                    <div className="flex gap-[10px] cursor-pointer bg-black p-[5px] w-[200px] rounded-[8px] mt-[10px]">
                        <img className="w-[40px]" src="/images/logo.webp"></img>
                        <div className="space-y-[-5px]">
                            <p className="text-white font-[pbold] text-[20px] max-[600px]:text-[16px]">OutwitTrader</p>
                            <p className="text-white font-[light] text-[10px]">ผู้ให้บริการปล่อยเช่าสัญญาน</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage