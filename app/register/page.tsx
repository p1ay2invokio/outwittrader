'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserMethod } from "../methods/UserMethod"
import Swal from "sweetalert2"
import { toast, ToastContainer } from "react-toastify"

const Register = () => {

    let navigate = useRouter()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [cfPassword, setCfPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

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
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[400px] h-[500px] flex-col bg-white rounded-[12px] shadow-xl flex justify-center p-[20px] max-[400px]:w-[350px]">
                    <p className="font-[bold] text-[24px]">สมัครสมาชิก</p>
                    <p className="font-[light] text-[16px]">ยินดีต้อนกลับ! OutwitTrader</p>

                    <div>

                        <input required onChange={(e) => {
                            // setCfPassword(e.target.value)
                            setEmail(e.target.value)
                        }} placeholder="อีเมลล์" className="w-full h-[60px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

                        <input onChange={(e) => {
                            setUsername(e.target.value)
                        }} placeholder="บัญชีผู้ใช้" className="w-full h-[60px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }} placeholder="รหัสผ่าน" className="w-full h-[60px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

                        <input onKeyUp={(e) => {
                            if (e.key == 'Enter') {
                                RegisterFunction()
                            }
                        }} onChange={(e) => {
                            setCfPassword(e.target.value)
                        }} placeholder="ยืนยันรหัสผ่าน" className="w-full h-[60px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

                        <input onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }} onKeyUp={(e) => {
                            if (e.key == 'Enter') {
                                RegisterFunction()
                            }
                        }} placeholder="เบอร์โทรศัพท์" className="w-full h-[60px] border-b-[1px] border-black/20 outline-none font-[light]"></input>


                        <button onClick={async () => {
                            RegisterFunction()
                        }} className={`w-full h-[45px] bg-black rounded-[8px] text-white font-[medium] text-[16px] mt-[20px] ${!loading ? 'bg-black' : 'bg-black/30'}`}>{loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}</button>
                        <div className="w-full flex justify-center gap-[5px] mt-[15px] font-[light]">
                            <p>มีบัญชีอยู่แล้ว?</p>
                            <p onClick={() => {
                                navigate.push('/login')
                            }} className="cursor-pointer text-blue-600 font-[medium]">เข้าสู่ระบบ</p>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Register