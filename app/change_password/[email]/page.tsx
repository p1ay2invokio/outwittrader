'use client'

import { UserMethod } from "@/app/methods/UserMethod"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"

const ChangePassword = () => {

    let params = useParams<{ email: string }>()

    let navigate = useRouter()

    console.log(params)

    const [password, setPassword] = useState('')
    const [cfPassword, setCfPassword] = useState('')

    const Reset = () => {
        setPassword('')
        setCfPassword('')
    }

    return (
        <div>
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} placeholder="รหัสผ่าน" className="w-full h-[60px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

            <input onChange={(e) => {
                setCfPassword(e.target.value)
            }} placeholder="ยืนยันรหัสผ่าน" className="w-full h-[60px] border-b-[1px] border-black/20 outline-none font-[light]"></input>

            <button onClick={async () => {
                const convert_email = params.email.replace('%40', '@')
                let response = await new UserMethod().resetPassword(convert_email, password)

                console.log(response)

                if (response.update_success) {
                    Swal.fire("เปลี่ยนรหัสผ่านสำเร็จ").then((res) => {
                        if (res.isConfirmed) {
                            Reset()
                            navigate.push("/login")
                        }
                    })
                } else {
                    console.log("ERROR UPDATE")
                }
            }}>อัพเดทรหัสผ่าน</button>
        </div>
    )
}

export default ChangePassword