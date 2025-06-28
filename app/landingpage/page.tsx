'use client'

import { useEffect, useRef } from "react"
import Header from "../Components/Header"
import { Howl, Howler } from 'howler'
import { FcBullish, FcDocument, FcRefresh, FcTimeline } from "react-icons/fc"
import { useRouter } from "next/navigation"
import { BiArchive, BiCoin, BiGitBranch, BiLogoAndroid, BiLogoApple, BiLogoGoogle, BiMoney, BiUser, BiWallet } from "react-icons/bi"
import { motion, useInView } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import HeaderLanding from "../Components/HeaderLanding"

const LandingPage = () => {

    let navigate = useRouter()

    const lists = ['Forex', 'Stocks', 'Crypto', 'Commodities', 'Indices', "ETFs"]

    let country = ["japan.webp", "swe.webp", "us.webp", 'star.webp']

    let news_list = [
        {
            title: 'Pomp เขย่าวงการคริปโต! เตรียมระดมทุน 2.7 หมื่นล้าน ลุยซื้อ Bitcoin รับกระแส "ทรัมป์ฟีเวอร์"',
            img: '/pomp.webp'
        },
        {
            title: 'พิษเทรดวอร์ยืดเยื้อ! เอกชนพร้อมใจ "เบรก" ลงทุน-ส่งออกชะลอตัว',
            img: '/tradewar.jpg'
        },
        {
            title: 'เปิดตลาดร่วงแรง! Bitcoin ดิ่งแตะ $102,000 – Altcoin ทรุดหนัก ทะลุ -10%',
            img: '/bitcoin.jpg'
        },
        {
            title: '4 Indicator ยอดนิยม ที่เทรดเดอร์มือโปรใช้วิเคราะห์กราฟอย่างแม่นยำ',
            img: '/newss.webp'
        },
        {
            title: 'เปรียบเทียบ Binary Option กับ Forex แบบไหนเหมาะกับคุณ',
            img: '/news-binary.jpg'
        },
        {
            title: 'เริ่มต้นเทรด Binary Option ให้ประสบความสำเร็จ?',
            img: '/news-beginer.jpeg'
        },
    ]

    const ref = useRef(null)
    const box = useRef(null)
    const isInView = useInView(ref, { once: true })
    const boxInView = useInView(box, { once: true })
    const download = useRef(null)
    const isInDownload = useInView(download, { once: true })

    const news = useRef(null)
    const isInNews = useInView(news, { once: true })

    return (
        <div className="">
            <HeaderLanding />


            <div className="w-full h-[120vh] bg-[rgb(24,24,24)] flex justify-center items-center max-[1280px]:h-[180vh] max-[640px]:h-[210vh]">
                <div className="grid grid-cols-2 place-items-center pl-20 pr-20 pt-20 max-[1280px]:grid-cols-1 max-[1280px]:gap-[40px] max-[640px]:place-items-start">
                    <div className="max-[1280px]:order-2">
                        <div className="max-[640px]:w-[300px]">
                            <div className="flex items-baseline gap-5 max-[640px]:flex-col">
                                <div className="flex text-[50px] text-blue-600">
                                    <p className="font-[regular]">OUTWIT</p>
                                    <p className="font-[bold]">TRADER</p>
                                </div>
                                <p className="text-blue-600 text-[55px] font-[pbold] max-[640px]:mt-[-40px]">Sig-Nal</p>
                            </div>
                            <p className="text-white text-[40px] font-[bold]">การเริ่มต้นสู่โลกของการเทรด</p>
                            <p className="text-white text-[30px] font-[bold]">กับแพลตฟอร์มที่คาดการณ์เข้าซื้อขายได้ดีที่สุด</p>
                            <p className="text-white/60 mt-5 text-[16px] font-[medium]">ท่ามกลางความผันผวนของตลาดการเงิน เครื่องมือที่มีประสิทธิภาพและเชื่อถือได้คือสิ่งสำคัญในการ
                                ตัดสินใจอย่างแม่นยำ OutwitTrader ถูกพัฒนาเพื่อเป็นเครื่องมือวิเคราะห์ทางเทคนิคที่ตอบโจทย์นัก
                                ลงทุนมืออาชีพช่วยให้คุณวางแผนกลยุทธ์และบริหารความเสี่ยงได้อย่างมั่นใจในทุกสภาวะตลาด.
                                เรามีการทดสอบประสิทธิภาพจากข ้อมูลย ้อนหลังอย่างต่อเนื่อง โดยพบว่า ความแม่นยำของสัญญาณ
                                อยู่ในช่วง 80–95%
                                ด้วยจำนวนสัญญาณเฉลี่ย 30–70 ครั้งต่อวัน พร้อมระบบวิเคราะห์แนวโน้มที่ใช้ เทคนิคประกอบการ
                                ตัดสินใจในเชิงลึก OutwitTrader สามารถรองรับการใช้งานได้ทั้งในตลาด Binary Options และ Forex
                                เพื่อเพิ่มโอกาสในการทำกำไรอย่างยั่งยืน.</p>
                            <button onClick={() => {
                                window.location.href = "/register"
                            }} className="p-2 from-blue-600 to-blue-400 bg-gradient-to-t text-white font-[medium] rounded-full w-[200px] mt-5 animate-text-color-change">เปิดบัญชี</button>
                        </div>

                        <div className="w-[300px] rounded-xl relative overflow-hidden mt-5">

                            <div className="before:content-[' '] w-full h-[2px] from-blue-600 to-transparent absolute left-0 bg-gradient-to-r"></div>
                            <div className="before:content-[' '] w-full h-[2px] from-blue-600 to-transparent absolute left-0 bottom-0 bg-gradient-to-r"></div>

                            <div className="w-full rounded-xl bg-[rgb(43,43,43)] p-3 flex gap-5 items-center border-l-[3px] border-blue-600 ">
                                <BiCoin className="text-[white]" size={50} />
                                <div>
                                    <p className="text-white font-[bold] text-[24px]">Privilege</p>
                                    <p className="text-gray-400 font-[regular]">รับสิทธิ์ก่อนใคร ไลฟ์สไตล์ที่ใช่</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[300px] rounded-xl relative overflow-hidden mt-3">

                            <div className="before:content-[' '] w-full h-[2px] from-blue-600 to-transparent absolute left-0 bg-gradient-to-r"></div>
                            <div className="before:content-[' '] w-full h-[2px] from-blue-600 to-transparent absolute left-0 bottom-0 bg-gradient-to-r"></div>

                            <div className="w-full rounded-xl bg-[rgb(43,43,43)] p-3 flex gap-5 items-center border-l-[3px] border-blue-600 ">
                                <BiArchive className="text-[white]" size={50} />
                                <div>
                                    <p className="text-white font-[bold] text-[24px]">Tournament</p>
                                    <p className="text-gray-400 font-[regular]">Online Trading</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="relative">

                        <motion.img className="absolute w-[110px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1 } }} src="japan.webp"></motion.img>
                        <motion.img className="absolute right-0 w-[70px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1.2 } }} src="us.webp"></motion.img>
                        <motion.img className="absolute bottom-0 w-[100px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1.4 } }} src="swe.webp"></motion.img>
                        <motion.img className="absolute top-[200px] left-[-120px] w-[70px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1.6 } }} src="star.webp"></motion.img>
                        <motion.img className="absolute top-[400px] right-[-40px] w-[60px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 1.8 } }} src="tesla.webp"></motion.img>
                        <motion.img className="absolute top-[400px] left-[-100px] w-[70px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 2.0 } }} src="apple.webp"></motion.img>
                        <motion.img className="absolute top-[600px] right-[0px] w-[70px]" initial={{ opacity: 0 }} animate={{ y: [0, -10, -10, 0, 0], x: [0, 10, 0, -10, 0], opacity: 1 }} transition={{ x: { repeat: Infinity, duration: 15 }, y: { repeat: Infinity, duration: 15 }, opacity: { delay: 2.2 } }} src="nvidia.webp"></motion.img>



                        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }} className="flex flex-col gap-3 absolute bottom-20 z-[10]">
                            {lists.map((item, index) => {
                                console.log(index)

                                return (
                                    <motion.div key={index} initial={{ x: 0, opacity: 0 }} animate={{ x: index * -15, opacity: 1 }} transition={{ delay: index * 0.1 }} className={`p-3 w-[200px] h-[50px] flex justify-center items-center text-white from-blue-600 to-blue-600/20 bg-gradient-to-t rounded-xl skew-y-6 shadow z-[11] cursor-pointer`}>
                                        <p className="font-[bold] text-[20px]">{item}</p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        <motion.img initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="left-[0px] top-[0px] absolute z-0" src="/ef.png"></motion.img>
                        {/* <motion.img initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="left-[-00px] bottom-[-100px] absolute z-0" src="/ef.png"></motion.img> */}
                        <motion.img initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="left-[0px] bottom-[-100px] absolute z-0" src="/ef.png"></motion.img>



                        <motion.img initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-[500px] z-[0] relative" src="/iphone.webp"></motion.img>
                        <motion.img initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="w-[350px] absolute right-[-50px] bottom-[70px] z-10" src="/displayright.webp"></motion.img>
                    </div>
                </div>
            </div>

            <div className="w-full h-[100px] bg-[rgb(24,24,24)] pt-20">
                <Marquee>
                    <div className="flex gap-10">
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/THB</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-500 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/AUD</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-500 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/JPY</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-500 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/CAD</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-500 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                        <div className="flex gap-5">
                            <img className="w-[80px] h-[80px]" src="/us.webp"></img>
                            <div>
                                <p className="font-[pbold] text-white">USD/GBP</p>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Buy</p>
                                    <p className="text-green-400 font-[medium]">156.648710</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-[light] text-gray-300">Sell</p>
                                    <p className="text-red-600">156.64879</p>
                                </div>
                            </div>

                            <img src="trend.webp" className="w-[60px]"></img>
                        </div>
                    </div>
                </Marquee>
            </div>

            <motion.div className="w-full bg-[rgb(24,24,24)] pt-40">
                <div className="flex justify-center items-center gap-20 max-[1280px]:flex-col max-[1280px]:pt-10">
                    <motion.div ref={ref} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }} transition={{ duration: 2, type: 'spring' }} className="relative">
                        <span className="absolute right-10 top-0 flex size-10">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex size-10 rounded-full bg-blue-500"></span>
                        </span>
                        <img className="w-[600px]" src="/mul-sig.png"></img>
                        {/* <motion.img animate={{opacity: [0, 1, 0]}} transition={{duration: 3}} className="w-[600px]" src="/one-sig.png"></motion.img> */}
                    </motion.div>
                    <div className="grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
                        <motion.div ref={box} animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="w-[300px] h-[120px] bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-10 ">
                            <div className=" flex flex-col items-center text-blue-600">
                                <BiUser size={60} />
                                <p className="font-[bold] text-[25px]">1000+</p>
                            </div>
                            <p className="font-[medium] text-gray-300 text-[20px]">ผู้ที่กำลังใช้งาน</p>
                        </motion.div>
                        <motion.div ref={box} animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="w-[300px] h-[120px] bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-10 ">
                            <div className=" flex flex-col items-center text-blue-600">
                                <BiWallet size={60} />
                                <p className="font-[bold] text-[25px]">13K+</p>
                            </div>
                            <p className="font-[medium] text-gray-300 text-[20px] w-[150px] text-center">รายได้นักเทรดต่อเดือน</p>
                        </motion.div>
                        <motion.div ref={box} animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="w-[300px] h-[120px] bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-10 ">
                            <div className=" flex flex-col items-center text-blue-600">
                                <BiMoney size={60} />
                                <p className="font-[bold] text-[25px]">10K+</p>
                            </div>
                            <p className="font-[medium] text-gray-300 text-[18px] w-[120px]">รายได้ของ Partner/Affiliate ต่อเดือน</p>
                        </motion.div>
                        <motion.div ref={box} animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="w-[300px] h-[120px] bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-10 ">
                            <div className=" flex flex-col items-center text-blue-600">
                                <BiGitBranch size={60} />
                                <p className="font-[bold] text-[25px]">10+</p>
                            </div>
                            <p className="font-[medium] text-gray-300 text-[20px]">สินทรัพย์การเทรด</p>
                        </motion.div>
                    </div>
                </div>

                <motion.div ref={download} animate={isInDownload ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="text-white h-[60vh] font-[medium] text-center flex justify-center items-center flex-col">

                    <div>
                        <p className="text-[24px]">เริ่มต้นเทรด ได้ทุกที่ ทุกเวลา</p>
                        <p className="text-gray-400">เว็บไซต์ OutwitTrader รองรับ บน iOS และ Android เพื่อเข้าเทรด ลูกค้ามากกว่า 1 พันคนให้ความไว้วางใจเราและมีรายได้ประจำทุกวัน</p>
                    </div>

                    <div className="flex justify-center items-center mt-5 gap-3">
                        <div className=" p-2 bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-2 ">
                            <BiLogoAndroid className="text-green-400" size={40} />
                            <p className="font-[medium] text-gray-300 text-[16px]">Android</p>
                        </div>
                        <div className=" p-2 bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-2 ">
                            <BiLogoApple className="text-white" size={40} />
                            <p className="font-[medium] text-gray-300 text-[16px]">IOS</p>
                        </div>
                        <div className=" p-2 bg-[rgb(42,42,42)] rounded-xl border-[1px] border-gray-600 flex items-center justify-center gap-2 ">
                            <BiLogoGoogle className="text-blue-600" size={40} />
                            <p className="font-[medium] text-gray-300 text-[16px]">Web</p>
                        </div>
                    </div>
                </motion.div>

            </motion.div>

            <div className="w-full bg-[rgb(24,24,24)] flex justify-center items-start pt-0 pb-20">
                <motion.div ref={news} animate={isInNews ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 2, type: 'spring' }} className="font-[medium] text-white text-center">
                    <p className="text-[24px]">ก้าวนำทุกเหตุการณ์</p>
                    <p className="font-[light] text-gray-400">เติบโตในสังคมของนักเทรด ด้วยคำแนะนำจากผู้เชี่ยวชาญ</p>


                    <div className=" grid grid-cols-3 max-[1400px]:grid-cols-2 max-[1000px]:grid-cols-1 items-baseline gap-[20px] place-items-start pl-[100px] pr-[100px] pt-[30px]">
                        {news_list.map((item: any, index: number) => {
                            return (
                                <div className="flex flex-col gap-3" key={index}>
                                    <div className="h-[200px] w-[400px] rounded-xl ">
                                        <img className="w-full border-r-[2px] border-blue-600 h-full object-cover rounded-xl" src={item.img}></img>

                                    </div>
                                    <p className="text-start text-gray-300">{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>


            <div className="h-[70vh] bg-[rgb(20,20,20)] grid grid-cols-2 p-20 gap-x-[100px]">
                <div className="space-y-[-5px] text-white gap-3 flex flex-col">
                    <div className="flex gap-3">
                        <img className="w-[40px] h-[40px]" src="/images/logo.webp"></img>
                        <div className="flex">
                            <p className=" font-[pmedium] text-[20px] max-[600px]:text-[16px]">OUTWIT</p>
                            <p className=" font-[pbold] text-[20px] max-[600px]:text-[16px]">TRADER</p>
                        </div>
                    </div>
                    {/* <p className="text-white font-[light] text-[10px]">ผู้ให้บริการปล่อยเช่าสัญญาน</p> */}
                    <p className="text-[14px] font-[light]">OutwitTrader ถูกพัฒนาขึ้นเพื่อเป็นเครื่องมือช่วยวิเคราะห์และส่งสัญญาณการซื้อขายในตลาด Binary Option และ Forex โดยเน้นความแม่นยำและการใช้งานที่เข้าใจง่าย เพื่อช่วยให้นักลงทุนวางแผนและตัดสินใจได้อย่างมีระบบยิ่งขึ้น
                        เราให้บริการในรูปแบบ ข้อมูลเชิงการศึกษา และสัญญาณประกอบการวิเคราะห์ ซึ่งสามารถใช้เป็นแนวทางในการเทรด โดยไม่ใช่การให้คำแนะนำด้านการลงทุนส่วนบุคคล
                        ผลลัพธ์ที่แสดงในระบบบางส่วนอ้างอิงจากการทดสอบย้อนหลัง (Back Test) และการวิเคราะห์ทางเทคนิค ซึ่งมีความแม่นยำสูงตามสถิติที่ได้เก็บไว้ อย่างไรก็ตาม ผลลัพธ์ในอดีตไม่สามารถรับประกันผลลัพธ์ในอนาคตได้ 100%
                        การลงทุนในตลาดการเงินมีความเสี่ยง และเหมาะกับผู้ที่เข้าใจและสามารถบริหารจัดการความเสี่ยงได้ด้วยตนเอง
                    </p>

                    <p className="text-[14px] font-[light]">เราแนะนำให้ผู้ใช้งานศึกษาข้อมูลอย่างต่อเนื่อง และหากมีข้อสงสัยสามารถติดต่อแอดมินหรือทีมงานเพื่อขอข้อมูลเพิ่มเติมได้ทุกเวลา
                        หากคุณกำลังมองหาเครื่องมือช่วยเทรดที่โปร่งใส ใช้งานง่าย และมีสถิติให้ตรวจสอบ OutwitTrader คือหนึ่งในทางเลือกที่นักลงทุนจำนวนมากไว้วางใจ
                        โปรดอ่านเอกสารนโยบายและข้อตกลงการใช้งานก่อนเริ่มต้น เพื่อให้มั่นใจว่าคุณเข้าใจและยอมรับในความเสี่ยงที่เกี่ยวข้อง
                    </p>
                </div>

                <div className="grid grid-cols-3 ">
                    <div>
                        <p className="font-[medium] text-blue-600 text-[22px]">หน้าหลัก</p>
                        <div className="text-gray-300 font-[light] mt-3">
                            <p>เข้าสู่ระบบ</p>
                            <p>สมัครสมาชิก</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-[medium] text-blue-600 text-[22px]">การซื้อขาย</p>
                        <div className="text-gray-300 font-[light] mt-3">
                            <p>ประเภทบัญชี</p>
                            <p>คำถามที่พบบ่อย</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-[medium] text-blue-600 text-[22px]">ชุมชน</p>
                        <div className="text-gray-300 font-[light] mt-3">
                            <p>เกี่ยวกับเรา</p>
                            <p>ระเบียบข้อบังคับ</p>
                            <p>ศูนย์ช่วยเหลือ</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t-[1px] border-gray-300">
                    <div className="pt-3 flex gap-3">
                        <p className="text-white font-[medium]">Terms & Condition</p>
                        <p className="text-white font-[medium]">Privacy Policy</p>
                    </div>
                </div>

            </div>





        </div>
    )
}

export default LandingPage