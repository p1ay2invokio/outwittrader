import { END_POINT } from "@/config"
import axios from "axios"

export class RoomMethod {
    public createRoom = (room_name: string) => {
        return new Promise((resolve) => {
            axios.post(`${END_POINT}/meetings/create`, {
                room_name: room_name
            }).then((res) => {
                resolve(res.data)
            })
        })
    }
}