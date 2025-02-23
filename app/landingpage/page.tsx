'use client'

import { useEffect, useRef } from "react"
import Header from "../Components/Header"

const LandingPage = () => {


    return (
        <div>
            <Header />
            <div>
                {/* <img src="./bg.webp" className="h-full w-full object-cover"></img> */}
                <div className="mt-[200px] mb-[200px] flex justify-center items-center max-[1024px]:mt-[50px]">
                    <div className="flex items-center max-[1200px]:flex-col gap-[20px]">
                        <div className="w-[600px] max-[600px]:w-[300px] max-[600px]:mt-[50px] max-[820px]:mb-[30px]">
                            <p className="font-[medium] text-[24px]">ผู้ให้บริการปล่อยเช่าสัญญาน OutwitTrader</p>
                            <p className="font-[light] text-[16px]">เรามีการทดสอบ สถิติย้อนหลัง OutwitTrader มีความแม่นยำสูงถึง 80-95% โดยมีการใช้สัญญาณและใช้เทคนิคประกอบการตัดสินใจ สัญญาณออกวันละ 30-70 สัญญาณต่อวัน สามารถใช้ร่วมกับตลาด ไบนารี่ออฟชั่น</p>
                            <button className="w-[170px] h-[45px] border-[0px] border-white mt-[15px] font-[medium] text-[20px] bg-black text-white rounded-[8px]">เริ่มต้นตอนนี้</button>
                        </div>
                        <div className="w-[560px] h-[315px] max-[600px]:w-[300px]">
                            <video autoPlay muted>
                                <source src="/video.mp4" type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-[20px] flex flex-col justify-center items-center mb-[50px]" id="content-2">
                <p className="font-[medium] text-[24px]">ทำไมต้องใช้ OutwitTrader</p>
                <p className="font-[light] text-[16px] w-[800px] max-[900px]:w-[300px] text-center mb-[20px]">
                    OutwitTrader มอบเครื่องมือและกลยุทธ์ที่ขับเคลื่อนด้วยปัญญาประดิษฐ์ เพื่อให้คุณสามารถเทรดอย่างมั่นใจและเพิ่มโอกาสในการทำกำไรได้อย่างสูงสุด
                    เปิดการรองรับโปรแกรมอ่านหน้าจอ
                    หากต้องการเปิดการสนับสนุนโปรแกรมอ่านหน้าจอ ให้กด Ctrl+Alt+Z หากต้องการเรียนรู้เกี่ยวกับแป้นพิมพ์ลัด ให้กด Ctrl+เครื่องหมายทับ (/)</p>

                <div className="grid grid-cols-3 mt-[40px] gap-[30px] w-[1200px] max-[1200px]:grid-cols-1 max-[600px]:w-[300px]">
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        <div className="w-[220px] h-[220px]">
                            <img src="./banner1.webp" className="w-full h-full"></img>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-[medium] mb-[10px]">อินดิเคเตอร์ AI ขั้นสูง</p>
                            <p className="font-[light] text-[14px] text-center max-[1200px]:w-[300px]">OutwitTrader ใช้เทคโนโลยี AI ที่ทันสมัยเพื่อวิเคราะห์ตลาดและให้สัญญาณการเทรดที่มีอัตราการชนะสูงถึง 90% ซึ่งผ่านการทดสอบและปรับปรุงอย่างต่อเนื่อง ตั้งแต่ปี 2023 จึงมั่นใจได้ว่าคุณจะได้รับข้อมูลที่มีคุณภาพ</p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        <div className="w-[220px] h-[200px]">
                            <img src="./update.webp" className="w-full h-full "></img>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-[medium] mb-[10px]">การอัปเดตอย่างต่อเนื่อง</p>
                            <p className="font-[light] text-[14px] text-center max-[1200px]:w-[300px]">OutwitTrader มุ่งมั่นที่จะพัฒนาเทคโนโลยีอย่างไม่หยุดยั้ง โดยมีการอัปเดตและปรับปรุงอัลกอริธึมอยู่เสมอ เพื่อให้คุณได้รับเครื่องมือและข้อมูลที่ดีที่สุดในการตัดสินใจเทรด</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        <div className="w-[200px] h-[200px]">
                            <img src="./workshop.webp" className="w-full h-full object-cover"></img>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-[medium] mb-[10px]">คอร์สการเรียนรู้และเวิร์กช็อป</p>
                            <p className="font-[light] text-[14px] text-center max-[1200px]:w-[300px]">เรามีคอร์สการเรียนรู้ที่ออกแบบมาเพื่อทุกระดับ ไม่ว่าคุณจะเป็นมือใหม่หรือมีประสบการณ์แล้ว คอร์สของเราจะช่วยเสริมสร้างความรู้และทักษะในการเทรดที่จำเป็น รวมถึงการใช้ AI ในการวิเคราะห์ตลาด</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage