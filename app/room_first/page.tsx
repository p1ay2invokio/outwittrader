// import { useEffect } from "react"
// import { socket } from "../socket"

'use client'

import { useEffect, useRef, useState } from "react"
import { io, Socket } from "socket.io-client"
import HLS from 'hls.js'
import axios from 'axios'
import { jwtDecode } from "jwt-decode"
import { UserMethod } from "../methods/UserMethod"
import { useRouter } from "next/navigation"

const Room = () => {

    let navigate = useRouter()

    const videoRef = useRef<HTMLVideoElement>(null);
    const [joinURL, setJoinURL] = useState<any>('')

    const joinMeeting = async (token: string) => {
        const user_res = await new UserMethod().getUserAccounts(token)

        if (user_res) {
            const response = await axios.post<string>('http://localhost:3001/api/meetings/join', {
                meetingID: 'meeting-outwit-room1',
                fullName: user_res.id,
                avatarURL: user_res.role == 0 ? 'https://api-private.atlassian.com/users/9cea692d0a59c5e100680165cbbeb496/avatar' : 'https://cdn-icons-png.flaticon.com/512/7453/7453640.png',
                role: user_res.role == 0 ? "viewer" : "moderator"
            });

            return response.data
        }else{
            navigate.push('/')
        }
    };

    const initial = async () => {
        let token_storage = localStorage.getItem("token")
        if (token_storage) {
            const decoded = jwtDecode<{ username: string, id: number }>(token_storage)

            console.log(decoded)

            let data = await joinMeeting(token_storage)
            console.log(data)
            setJoinURL(data)
        }
    }

    useEffect(() => {
        initial()
    }, []);

    return (
        <div className="w-full h-[100vh]">
            {joinURL ? <iframe
                src={joinURL}
                width="100%"
                height="100%"
                allow="camera; microphone; fullscreen; display-capture"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            ></iframe> : null}
        </div>
    )
}

export default Room