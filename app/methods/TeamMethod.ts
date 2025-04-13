import { END_POINT } from "@/config"
import axios from "axios"

export interface TeamInterface {
    user_id: number,
    team_id: number,
    username: string,
    team_name: string,
    status: number
}

export interface PartnerInterface {
    // user_id: strin
    username: string,
    name: string,
    surname: string,
    thai_id: string,
    gender: string,
    age: string,
    bod: string,
    salary: string,
    job: string,
    bank_img: string,
    thai_id_img: string,
    face_img: string,
    team_name: string,
    team_id: number,
    owner_id: number,
    broker_link: string,
    total_days: number,
    members: number,
    total_money: number,
    broker_money: number,
    bank_account: string,
    bank_name: string
}

export class TeamMethod {
    public partnerUser = (): Promise<any> => {
        return new Promise((resolve) => {

            const token = localStorage.getItem("token")

            if (token) {
                axios.get(`${END_POINT}/team`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then((res) => {
                    resolve(res.data)
                })
            }
        })
    }

    public userTeam = async (): Promise<PartnerInterface[]> => {

        return new Promise((resolve) => {

            const token = localStorage.getItem("token")

            if (token) {
                axios.get(`${END_POINT}/user_team`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    resolve(res.data)
                })
            }
        })
    }

    public allRegisterPartner = async (): Promise<PartnerInterface[]> => {
        return new Promise((resolve) => {
            axios.get(`${END_POINT}/all_register_partner`).then((res) => {
                resolve(res.data)
            })
        })
    }

    public verifyTeamPartner = async (team_id: number, broker_link: string): Promise<{ verified: boolean }> => {
        return new Promise((resolve) => {
            axios.patch(`${END_POINT}/verify_team_partner`, {
                team_id: team_id,
                broker_link: broker_link
            }).then((res) => {
                resolve(res.data)
            })
        })
    }
}