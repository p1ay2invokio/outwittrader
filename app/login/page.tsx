'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserMethod } from "../methods/UserMethod"
import { toast, ToastContainer } from "react-toastify"
import { jwtDecode } from "jwt-decode"
import Swal from "sweetalert2"
import Header from "../Components/Header"

const Login = () => {

    let navigate = useRouter()

    // Declare Var
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [delay, setDelay] = useState<boolean>(false)

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            navigate.push("/")
        }

    }, [])

    const LoginFunction = async () => {
        if (username && password) {
            let userMethod = new UserMethod()

            let status = await userMethod.login(username, password)
            if (status.login_success) {
                console.log(status.token)

                toast.promise(new Promise<void>((resolve) => {
                    setDelay(true)
                    setTimeout(() => {
                        resolve()
                    }, 1000)
                }), { pending: 'กำลังเข้าสู่รบบ', success: 'เข้าสู่ระบบสำเร็จ' }, { type: 'success', closeButton: false, position: 'bottom-right' })
                setTimeout(() => {
                    localStorage.setItem("token", status.token)
                    navigate.push("/")
                    setDelay(false)
                }, 1500)
            } else {
                Swal.fire("บัญชีผู้ใช้หรือรหัสไม่ถูกต้อง!")
            }
        } else {
            Swal.fire("กรุณากรอกข้อมูลให้ครบถ้วน!")
        }
    }

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center h-[calc(100vh)]">
                <div className="w-[400px] h-[350px] border-[1px] border-gray-300 flex-col bg-white rounded-[12px] shadow-xl flex justify-center p-[20px] max-[400px]:w-[350px]">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-[bold] text-[20px]">เข้าสู่ระบบ</p>
                            <p className="font-[light] text-[14px]">ยินดีต้อนกลับ! OutwitTrader</p>
                        </div>
                        <img className="w-[60px]" src="/images/logo.webp"></img>
                    </div>

                    <div>
                        <input onChange={(e) => {
                            setUsername(e.target.value)
                        }} placeholder="บัญชีผู้ใช้" className="w-full h-[50px] border-black/20 outline-none border-b-[1px] font-[light] mb-[5px] mt-[5px] text-[16px]"></input>

                        <input onKeyDown={(e) => {
                            if (e.key == 'Enter') {
                                LoginFunction()
                            }
                        }} onChange={(e) => {
                            setPassword(e.target.value)
                        }} placeholder="รหัสผ่าน" className="w-full h-[50px] border-black/20 font-[light] border-b-[1px] outline-none password-input text-[16px]"></input>

                        <button onClick={async () => {
                            LoginFunction()
                        }} disabled={delay ? true : false} className={`w-full h-[40px] ${!delay ? 'bg-black' : 'bg-black/30'} rounded-[8px] text-white font-[medium] text-[16px] mt-[20px]`}>{delay ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}</button>
                        <div className="w-full flex justify-center gap-[5px] mt-[15px] font-[light] text-[14px]">
                            <p>ยังไม่มีบัญชี</p>
                            <p onClick={() => {
                                navigate.push('/register')
                            }} className="cursor-pointer text-blue-600 font-[medium]">สมัครสมาชิก</p>
                        </div>
                        <div className="w-full flex justify-center gap-[5px] mt-[15px] font-[light] text-[14px]">
                            <p onClick={() => {
                                navigate.push('/forgot')
                            }} className="cursor-pointer text-blue-600 font-[medium]">ลืมรหัสผ่าน</p>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Login