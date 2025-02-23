import { END_POINT } from "@/config"
import axios from "axios"
import { UserInterface } from "../Interfaces/UserInterface"

export class UserMethod {
    // constructor(){}

    public login = (username: string, password: string): Promise<{ login_success: boolean, token: string }> => {
        return new Promise((resolve) => {
            axios.post(`${END_POINT}/login`, {
                username: username,
                password: password
            }).then((res) => {
                resolve(res.data)
            })
        })
    }

    public register = (username: string, password: string, email: string, phone_number: string): Promise<{ register_success: boolean, token: string }> => {
        return new Promise((resolve) => {
            axios.post(`${END_POINT}/register`, {
                username: username,
                password: password,
                email: email,
                phone_number: phone_number
            }).then((res) => {
                resolve(res.data)
            })
        })
    }

    public getUserAccounts = (token: string): Promise<UserInterface> => {
        return new Promise((resolve) => {
            axios.get(`${END_POINT}/useraccounts`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then((res) => {
                resolve(res.data)
            })
        })
    }

    public resetPassword = (email: string, new_password: string): Promise<{ update_success: boolean }> => {
        return new Promise((resolve) => {
            axios.patch(`${END_POINT}/reset_password`, {
                email: email,
                new_password: new_password
            }).then((res) => {
                resolve(res.data)
            })
        })
    }
}