'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserMethod } from "@/app/methods/UserMethod"
import Swal from "sweetalert2"
import { toast, ToastContainer } from "react-toastify"
import Header from "@/app/Components/Header"

const Register = () => {

    let navigate = useRouter()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [cfPassword, setCfPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    
    const [referral, setReferral] = useState<string>('')

    useEffect(() => {

        const token = localStorage.getItem("token")

        if (token) {
            navigate.push("/")
        }
    }, [])

    const RegisterFunction = async () => {
        if (username && password && cfPassword && email && phoneNumber) {
            if (password == cfPassword) {
                setLoading(true)
                toast.promise(() => {
                    return new Promise<void>((resolve) => {
                        setTimeout(async () => {
                            resolve()
                        }, 1000)
                    })
                }, { pending: 'กำลังเข้าสู่ระบบ', success: 'เข้าสู่ระบบสำเร็จ' }, { position: 'bottom-right' })


                setTimeout(async () => {
                    let response = await new UserMethod().register(username, password, email, phoneNumber)
                    localStorage.setItem('token', response.token)
                    setLoading(false)
                    navigate.push('/')
                }, 1300)

                // console.log(response)
            } else {
                Swal.fire("รหัสผ่านไม่ตรงกัน!")
            }
        } else {
            Swal.fire('กรุณากรอกข้อมูลให้ครบถ้วน!')
        }
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[400px] h-[550px] flex-col bg-white rounded-[12px] shadow-xl flex justify-center p-[20px] max-[400px]:w-[350px]">

                    <div className="flex justify-between">
                        <div>
                            <p className="font-[bold] text-[20px]">สมัครสมาชิก</p>
                            <p className="font-[light] text-[14px]">ยินดีต้อนกลับ! OutwitTrader</p>
                        </div>
                        <img className="w-[60px]" src="/images/logo.webp"></img>
                    </div>

                    <div>

                        <input required onChange={(e) => {
                            // setCfPassword(e.target.value)
                            setEmail(e.target.value)
                        }} placeholder="อีเมลล์" className="w-full text-[14px] h-[50px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

                        <input onChange={(e) => {
                            setUsername(e.target.value)
                        }} placeholder="บัญชีผู้ใช้" className="w-full text-[14px] h-[50px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }} placeholder="รหัสผ่าน" className="w-full text-[14px] h-[50px] border-b-[1px] border-black/20 outline-none font-[light] password-input"></input>

                        <input onKeyUp={(e) => {
                            if (e.key == 'Enter') {
                                RegisterFunction()
                            }
                        }} onChange={(e) => {
                            setCfPassword(e.target.value)
                        }} placeholder="ยืนยันรหัสผ่าน" className="w-full text-[14px] h-[50px] border-b-[1px] border-black/20 outline-none font-[light] password-input"></input>

                        <input onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }} onKeyUp={(e) => {
                            if (e.key == 'Enter') {
                                RegisterFunction()
                            }
                        }} placeholder="เบอร์โทรศัพท์" className="w-full text-[14px] h-[50px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

                        {/* <input onChange={(e) => {
                            setReferral(e.target.value)
                        }} onKeyUp={(e) => {
                            if (e.key == 'Enter') {
                                RegisterFunction()
                            }
                        }} placeholder="Referral ID" className="w-full text-[14px] h-[50px] border-b-[1px] border-black/20 outline-none font-[light]"></input> */}

                        <div className="flex gap-[10px] items-center mt-[10px]">
                            <input type="radio" id="agree" name="agree" className="hidden peer"></input>
                            <label className="w-[20px] h-[17px] rounded-[4px] border-[1px] bg-gray-50 cursor-pointer peer-checked:bg-green-500" htmlFor="agree"></label>
                            <p className="font-[light] text-[13px]">ข้าพเจ้าได้รับทราบข้อกำหนดการประกวดและยินยอมปฏิบัติตามข้อกำหนดทุกข้อ</p>
                        </div>

                        <button onClick={async () => {
                            RegisterFunction()
                        }} className={`w-full h-[40px] bg-black rounded-[8px] text-white font-[medium] text-[16px] mt-[20px] ${!loading ? 'bg-black' : 'bg-black/30'}`}>{loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}</button>


                        <div className="w-full flex justify-center gap-[5px] mt-[15px] font-[light]">
                            <p className="text-[14px]">มีบัญชีอยู่แล้ว?</p>
                            <p onClick={() => {
                                navigate.push('/login')
                            }} className="cursor-pointer text-blue-600 font-[medium] text-[14px]">เข้าสู่ระบบ</p>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Register