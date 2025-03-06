// import { useEffect } from "react"
// import { socket } from "../socket"

'use client'

import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { jwtDecode } from "jwt-decode"
import { UserMethod } from "../methods/UserMethod"
import { useRouter } from "next/navigation"
import { END_POINT, state } from "@/config"
import { RoomMethod } from "../methods/RoomMethod"
import { UserInterface } from "../Interfaces/UserInterface"
import Swal from "sweetalert2"

const Room = () => {

    let navigate = useRouter()

    const videoRef = useRef<HTMLVideoElement>(null);
    const [joinURL, setJoinURL] = useState<any>('')
    const [user, setUser] = useState<UserInterface[]>([])

    const joinMeeting = async (token: string) => {
        const user_res = await new UserMethod().getUserAccounts(token)

        if (user_res) {
            const response = await axios.post<string>(`${END_POINT}/meetings/join`, {
                meetingID: 'meeting-outwit-room-1',
                fullName: user_res.id,
                avatarURL: user_res.role == 0 ? 'https://api-private.atlassian.com/users/9cea692d0a59c5e100680165cbbeb496/avatar' : 'https://cdn-icons-png.flaticon.com/512/7453/7453640.png',
                role: user_res.role == 0 ? "viewer" : "moderator"
            });

            return response.data
        } else {
            navigate.push('/')
        }
    };

    const initial = async () => {
        let token_storage = localStorage.getItem("token")
        if (token_storage) {
            const decoded = jwtDecode<UserInterface>(token_storage)

            console.log(decoded)
            setUser([decoded])

            let data = await joinMeeting(token_storage)
            setJoinURL(data)
        }
    }

    useEffect(() => {
        initial()
    }, []);

    return (
        <div className="w-full h-[100vh] p-[30px]">

            {joinURL ? <iframe
                src={joinURL}
                width="100%"
                height="90%"
                allow="camera; microphone; fullscreen; display-capture"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            ></iframe> : null}

            <div className="flex gap-[20px]">
                <div onClick={() => {
                    navigate.push('/signal')
                }} className='w-[80px] mt-[20px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center'>
                    <p className='font-[medium] text-white'>กลับ</p>
                </div>
                {user && user.length > 0 ? user[0].role == 1 ? <div onClick={() => {
                    new RoomMethod().createRoom('meeting-outwit-room-1').then((res) => {
                        Swal.fire("สร้างห้องสำเร็จ")
                        setTimeout(() => {
                            window.location.reload()
                        }, 1500)
                    })
                }} className='w-[350px] mt-[20px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center'>
                    <p className='font-[medium] text-white'>สร้างห้อง (กดในกรณีที่ห้องไม่ถูกเปิด Meeting)</p>
                </div> : null : null}

            </div>
        </div>
    )
}

export default Room