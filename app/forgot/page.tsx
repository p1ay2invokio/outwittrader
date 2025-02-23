'use client'

import { useState } from "react"
import { MailMethod } from "../methods/MailMethods"
import Swal from "sweetalert2"

const Forgot = () => {

    const [email, setEmail] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)


    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[400px] h-[200px] shadow-md rounded-[8px] pl-[20px] pr-[20px] flex items-center flex-col justify-center max-[600px]:w-[300px]">
                <p className="font-[medium]">กู้คืนรหัสผ่าน</p>
                <div className="w-full mt-[20px]">
                    <p className="font-[light]">อีเมลล์ (Email)</p>
                    <input placeholder="example@gmail.com" onChange={(e) => {
                        setEmail(e.target.value)
                    }} className="w-full h-[50px] font-[light] border-b-[1px] border-t-0 border-l-0 border-r-0 outline-none"></input>
                </div>
                <button onClick={async () => {
                    if (email) {
                        let mail = new MailMethod()
                        setLoading(true)

                        let data = await mail.SendingEmail(email)
                        console.log(data)
                        if (data.send_success) {
                            Swal.fire("ส่งอีเมลล์สำเร็จ")
                            setLoading(false)
                        }
                    }
                }} disabled={loading ? true : false} className={`w-[100px] h-[40px] ${loading ? 'bg-gray-600' : 'bg-green-600'} mt-[10px] rounded-[8px] text-white font-[medium]`}>{loading ? '...กำลังส่งอีเมลล์' : 'ส่งอีเมลล์'}</button>
            </div>
        </div>
    )
}

export default Forgot