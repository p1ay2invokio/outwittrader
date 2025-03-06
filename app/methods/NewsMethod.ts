import { END_POINT } from "@/config"
import axios from "axios"

interface NewsInterface {
    forex_id: number,
    forex_news: string
}

export class NewsMethod {
    public getForex = async (): Promise<NewsInterface[]> => {
        return new Promise((resolve) => {
            axios.get(`${END_POINT}/forex`).then((res) => {
                resolve(res.data)
            })
        })
    }
}