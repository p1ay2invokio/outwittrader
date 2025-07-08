'use client'

import Header from "@/app/Components/Header"
import LeftSide from "@/app/Components/LeftSide"
import { UserInterface } from "@/app/Interfaces/UserInterface"
import { PartnerInterface, TeamInterface, TeamMethod } from "@/app/methods/TeamMethod"
import { UserMethod } from "@/app/methods/UserMethod"
import { END_POINT } from "@/config"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { BiSolidBusiness } from "react-icons/bi"
import { FaBox, FaBusinessTime, FaUser } from "react-icons/fa"
import { RiTeamFill } from "react-icons/ri"
import Swal from "sweetalert2"

const AdminDashboard = () => {

    const navigate = useRouter()

    const [modal, setModal] = useState<boolean>(false)



    const [searchUser, setSearchUser] = useState<string>('')
    const [user, setUser] = useState<UserInterface[] | null>(null)
    const [days, setDays] = useState<string>('')

    const [modalPartner, setModalPartner] = useState<boolean>(false)
    const [partners, setPartners] = useState<PartnerInterface[]>([])

    const [brokerLink, setBrokerLink] = useState<string>('')
    const [refresh, setRefresh] = useState<number>(0)

    const [recap, setRecap] = useState<boolean>(false)

    const [dashboard_detail, setDashboardDetail] = useState<any>(null)

    const [kind, setKind] = useState<string>('')
    const [allModal, setAllModel] = useState<boolean>(false)

    const updateDays = async () => {
        if (kind) {
            await new UserMethod().updateDays(Number(days), Number(searchUser), kind).then((res) => {
                if (res.success) {
                    Swal.fire("อัพเดทสำเร็จ", `เพิ่มวันให้ ${searchUser} อีก ${days} วัน`, "success")
                    setModal(false)
                    setSearchUser('')
                    setUser([])
                    toast.success("อัพเดทสำเร็จ!")
                    resetDays()
                }
            })
        }else{
            toast.error("กรุณาเลือกประเภทก่อน!")
        }
    }

    const getRegisterPartner = async () => {
        const data = await new TeamMethod().allRegisterPartner()

        console.log(data)

        setPartners(data)
    }

    // console.log(kind)


    // console.log(END_POINT.split('/api')[0])




    // useEffect(() => {
    //     getRegisterPartner()
    // }, [])

    const resetDays = () => {
        setKind('')
        setDays('')
        setModal(false)
        setAllModel(false)
    }

    return (
        <div className="pl-[280px] pt-[100px] pr-[50px] max-[768px]:pr-[20px] max-[768px]:pl-[20px]">

            {allModal ? <div onClick={(e) => {
                if (e.target == e.currentTarget) {
                    setAllModel(false)
                    resetDays()

                }
            }} className="w-full h-[100vh] fixed flex justify-center items-center bg-black/60 top-0 left-0">
                <div className="w-[300px] h-[300px] bg-white rounded-xl flex justify-center items-center p-5 flex-col">
                    <p className="font-[medium] text-[18px]">ระบบอัพเดทวันทุกคน</p>
                    <p className="font-[light] mb-2 text-[14px] text-gray-700">เพิ่มวันให้ Users ทุกคน</p>
                    <input onChange={(e) => {
                        setDays(e.target.value)
                    }} type="number" placeholder="จำนวนวัน" className="w-full text-center font-[medium] h-[40px] border-[1px] border-gray-300 rounded-lg"></input>
                    <div className="flex justify-center items-center mt-2 gap-5 w-full">
                        <div className="flex gap-3 items-center">
                            <input onChange={(e) => {
                                setKind(e.target.value)
                            }} name="way" id="binary" value="binary" type="radio"></input>
                            <label htmlFor="binary">Binary</label>
                        </div>

                        <div className="flex gap-3 items-center">
                            <input onChange={(e) => {
                                setKind(e.target.value)
                            }} name="way" id="forex" value="forex" type="radio"></input>
                            <label htmlFor="forex">Forex</label>
                        </div>
                    </div>
                    <button onClick={() => {
                        Swal.fire({
                            title: 'แน่ใจว่าต้องการอัพเดทให้ทุกคน',
                            cancelButtonText: "ยกเลิก",
                            showCancelButton: true
                        }).then(async (res) => {
                            if (res.isConfirmed) {
                                let user = new UserMethod()

                                let response = await user.updateDaysAllUsers(Number(days), kind)

                                resetDays()

                                toast.success("อัพเดทสำเร็จ!")

                                console.log(response)
                            }
                        })
                    }} className="w-full h-[40px] border-[1px] bg-blue-400/40 text-blue-500 font-[pmedium] border-blue-500 rounded-lg mt-2">Update Days All Users</button>
                </div>
            </div> : null}


            {recap ? <div onClick={(e) => {
                if (e.target == e.currentTarget) {
                    setRecap(false)
                }
            }} className="w-full h-full fixed top-0 left-0 bg-black/50 z-[7] flex justify-center items-center flex-col gap-[20px]">
                <div className="w-[80%] h-[90vh] bg-gray-50 shadow-sm rounded-[4px] grid grid-cols-4 gap-[20px] p-[20px] overflow-scroll max-[1280px]:grid-cols-3 max-[845px]:grid-cols-2 max-[768px]:grid-cols-1">
                    <div className="w-[100%] h-[100px] bg-white border-[1px] border-gray-300 shadow rounded-lg flex justify-center items-center relative overflow-hidden">
                        <FaUser className="absolute left-[20px] bottom-[-10px] text-gray-800" size={100} />
                        <p className="font-[bold] text-[24px] from-blue-400 bg-gradient-to-r to-purple-400 text-transparent bg-clip-text z-[1]">ผู้ใช้: {dashboard_detail?.users_count}</p>
                    </div>
                    <div className="w-[100%] h-[100px] bg-white border-[1px] border-gray-300 shadow rounded-lg flex justify-center items-center relative overflow-hidden">
                        <BiSolidBusiness className="absolute left-[10px] bottom-[-20px] text-gray-800" size={120} />
                        <p className="font-[bold] text-[24px]  from-blue-400 bg-gradient-to-r to-purple-400 text-transparent bg-clip-text z-[1]">ทีมทั้งหมด: {dashboard_detail?.team_verified}</p>
                    </div>
                    <div className="w-[100%] h-[100px] bg-white border-[1px] border-gray-300 shadow rounded-lg flex justify-center items-center relative overflow-hidden">
                        <FaBusinessTime className="absolute left-[10px] bottom-[-20px] text-gray-800" size={120} />
                        <p className="font-[bold] text-[24px] from-blue-400 bg-gradient-to-r to-purple-400 text-transparent bg-clip-text z-[1]">ทีมรอการยืนยัน: {dashboard_detail?.team_waiting}</p>
                    </div>
                    <div className="w-[100%] h-[100px] bg-white border-[1px] border-gray-300 shadow rounded-lg flex gap-[10px] justify-center items-center relative overflow-hidden">
                        <FaBox className="absolute left-[10px] bottom-[-10px] text-gray-800" size={100} />
                        <p className="font-[bold] text-[24px] from-blue-400 bg-gradient-to-r to-purple-400 text-transparent bg-clip-text z-[1]">ออเดอร์: {dashboard_detail?.order_count}</p>
                    </div>
                </div>
            </div> : null}


            {modalPartner ? <div onClick={(e) => {
                if (e.target == e.currentTarget) {
                    setModalPartner(false)
                }
            }} className="w-full h-full fixed top-0 left-0 bg-black/50 z-[7] flex justify-center items-center flex-col gap-[20px]">
                <div className="w-[80%] h-[90vh] bg-white shadow-sm rounded-[4px] grid grid-cols-4 max-[768px]:grid-cols-1 gap-[20px] p-[20px] overflow-scroll">
                    {partners && partners.length > 0 ? partners.map((item: PartnerInterface, index: number) => {
                        return (
                            <div key={index} className="w-full border-[1px] shadow-sm border-b-[3px] border-b-blue-600 rounded-[4px] p-[10px] text-[14px]">

                                <div className="flex gap-[5px] text-[16px]">
                                    <p className="font-[medium]">ชื่อทีม :</p>
                                    <p className="font-[medium]"> {item.team_name}</p>
                                </div>

                                <p className="font-[light]">คุณ : {item.username}</p>
                                <p className="font-[light]">ชื่อ-นามสกุล : {item.name} {item.surname}</p>
                                <p className="font-[light]">เลขบัตรประชาชน : {item.thai_id}</p>
                                <p className="font-[light]">เพศ : {item.gender}</p>
                                <p className="font-[light]">อายุ : {item.age}</p>
                                <p className="font-[light]">วันเดือนปีเกิด : {item.bod}</p>
                                <p className="font-[light]">เงินเดือน : {item.salary} บาท/ปี</p>
                                <p className="font-[light]">อาชีพ : {item.job}</p>

                                <div className="flex flex-col mt-[10px] gap-[5px]">
                                    <p className="font-[medium]">หลักฐาน</p>
                                    <a className="font-[light] text-blue-400" href={`${END_POINT.split('/api')[0]}${item.bank_img}`}>- รูปหน้าสมุดบัญชีธนาคาร</a>
                                    <a className="font-[light] text-blue-400" href={`${END_POINT.split('/api')[0]}${item.thai_id_img}`}>- รูปบัตรประชาชน</a>
                                    <a className="font-[light] text-blue-400" href={`${END_POINT.split('/api')[0]}${item.face_img}`}>- รูปหน้า</a>
                                </div>

                                <input onChange={(e) => {
                                    setBrokerLink(e.target.value)
                                }} className="w-full h-[40px] rounded-[4px] text-center font-[light] outline-none border-b-[2px]" placeholder="ใส่ลิ้งโบรกเกอร์ที่ (Generate)"></input>

                                <button onClick={async () => {
                                    if (brokerLink) {
                                        await new TeamMethod().verifyTeamPartner(item.team_id, brokerLink).then(async (res) => {
                                            if (res.verified) {
                                                Swal.fire(`Verified ${item.team_name} สำเร็จ`, "", "success")
                                                const updated_data = await new TeamMethod().allRegisterPartner()
                                                setPartners(updated_data)
                                            }
                                        })
                                    } else {
                                        Swal.fire("กรุณาใส่ลิ้งโบรกเกอร์ก่อน", "", "error")
                                    }
                                }} className="w-full h-[40px] bg-green-600 rounded-[4px] mt-[5px] text-white font-[medium]">Verify</button>
                            </div>
                        )
                    }) : <div className="h-full w-full flex justify-center items-center font-[light] text-[14px] col-span-4">
                        <p>ไม่พบทีมที่สมัคร :)</p>
                    </div>}
                </div>
            </div> : null}

            {modal ? <div onClick={(e) => {
                if (e.target == e.currentTarget) {
                    setModal(false)
                    resetDays()
                }
            }} className="w-full h-full fixed top-0 left-0 bg-black/50 z-[7] flex justify-center items-center flex-col gap-[20px]">
                <div className="w-[300px] h-[50px] bg-white shadow-sm rounded-[4px]">
                    <input onKeyDown={async (e) => {
                        if (e.key == "Enter") {
                            const targetUser = await new UserMethod().getUserId(Number(searchUser))

                            if (targetUser && targetUser.length > 0) {
                                // setDays(targetUser[0].total_days.toString())
                                setUser(targetUser)
                            } else {
                                Swal.fire("ไม่พบไอดี", "", "error")
                            }
                            // console.log(targetUser)
                        }
                    }} onChange={(e) => {
                        setSearchUser(e.target.value)
                    }} className="w-full h-full outline-none text-center font-[light] rounded-[4px]" placeholder="ค้นหาผู้ใช้ ( ID )"></input>

                    {/* <div className="flex gap-5 items-center justify-center">
                        <button onClick={() => {
                            setModal(true)
                        }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md mt-5">
                            <p className="font-[medium]">Binary</p>
                        </button>

                        <button onClick={() => {
                            setModal(true)
                        }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md mt-5">
                            <p className="font-[medium]">Forex</p>
                        </button>
                    </div> */}
                </div>

                {user && user.length > 0 ? <div className="w-[300px] bg-white p-[10px]  shadow-sm rounded-[4px]">
                    <div className="flex justify-between">
                        <p className="font-[medium] text-[14px]">{user[0].id}</p>
                        <p className="font-[medium] text-[14px]">{user[0].username}</p>
                    </div>
                    <input onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            updateDays()
                        }
                    }} onChange={(e) => [
                        setDays(e.target.value)
                    ]} className="w-full h-[40px] text-center outline-none border-b-[2px]"></input>
                    {/* <p>{user[0].total_days}</p> */}

                    <div className="flex justify-center items-center mt-2 gap-5 w-full">
                        <div className="flex gap-3 items-center">
                            <input onChange={(e) => {
                                setKind(e.target.value)
                            }} name="way" id="binary" value="binary" type="radio"></input>
                            <label htmlFor="binary">Binary</label>
                        </div>

                        <div className="flex gap-3 items-center">
                            <input onChange={(e) => {
                                setKind(e.target.value)
                            }} name="way" id="forex" value="forex" type="radio"></input>
                            <label htmlFor="forex">Forex</label>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <button onClick={async () => {
                            if (!kind && !days) {
                                toast.error("โปรดกรอกข้อมูลให้ครบถ้วน!")
                            } else {
                                updateDays()
                            }
                        }} className="w-[200px] h-[40px] bg-blue-800 mt-[10px] flex justify-center items-center text-white rounded-[4px] font-[medium]"><p>UPDATE</p></button>
                    </div>
                </div> : null}
            </div> : null}

            <Header />
            <LeftSide />

            <div className="w-full h-[calc(90vh-100px)] border-[1px] rounded-[8px] p-[10px] grid grid-cols-5 max-[1500px]:grid-cols-3 max-[1200px]:grid-cols-2 max-[1000px]:grid-cols-1 gap-[20px] shadow-sm">
                <button onClick={() => {
                    setModal(true)
                }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md border-l-[10px] border-blue-800">
                    <p className="font-[medium]">+ เมนูเพิ่มลดวันเฉพาะไอดี (USER)</p>

                </button>
                <button onClick={() => {
                    setAllModel(true)
                }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md border-l-[10px] border-blue-800">
                    <p className="font-[medium]">+ เมนูเพิ่มลดวัน (ALL USERS)</p>

                </button>
                <button onClick={() => {
                    navigate.push("/confirm_slip")
                }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md border-l-[10px] border-blue-800">
                    <p className="font-[medium]">ยืนยันสลิป</p>

                </button>
                <button onClick={() => {
                    getRegisterPartner()
                    setModalPartner(true)
                }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md border-l-[10px] border-blue-800">
                    <p className="font-[medium]">Partner Checking</p>

                </button>

                <button onClick={async () => {
                    const res = await new UserMethod().getDashboard()
                    console.log(res)
                    setDashboardDetail(res)
                    setRecap(true)
                }} className="p-[10px] h-[40px] bg-white rounded-[4px] shadow-md border-l-[10px] border-green-800">
                    <p className="font-[medium]">สรุปข้อมูลของเว็บไซต์</p>

                </button>

            </div>

            <Toaster />


        </div>
    )
}

export default AdminDashboard