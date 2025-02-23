import { END_POINT } from "@/config"
import axios from "axios"

export class RoomMethod {
    public GotoRoom1 = () => {

        return new Promise((resolve) => {
            const token = localStorage.getItem('token')

            if (token) {
                axios.get(`${END_POINT}/room1`, {
                    headers: {
                        "Authorization": `bearer ${token}`
                    }
                }).then((res) => {
                    resolve(res.data)
                })
            }
        })
    }
}