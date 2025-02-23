import { END_POINT } from "@/config"
import axios from "axios"

export class MailMethod {
    public SendingEmail = (email_rec: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            axios.post(`${END_POINT}/email`, {
                email_rec: email_rec
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}