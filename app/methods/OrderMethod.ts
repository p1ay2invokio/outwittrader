import { END_POINT } from "@/config"
import axios from "axios"
import { OrderInterface } from "../Interfaces/OrderInterface"

export class OrderMethod {

    public getOrders = (): Promise<OrderInterface[]> => {

        const token = localStorage.getItem('token')

        return new Promise((resolve) => {
            axios.get(`${END_POINT}/orders`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then((res) => {
                resolve(res.data)
            })
        })
    }

    public getAllOrders = (): Promise<OrderInterface[]> => {

        const token = localStorage.getItem('token')

        return new Promise((resolve) => {
            axios.get(`${END_POINT}/all_orders`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then((res) => {
                resolve(res.data)
            })
        })
    }

    public confirmOrder = (order_id: number) => {

        const token = localStorage.getItem("token")

        return new Promise((resolve) => {
            axios.patch(`${END_POINT}/confirm_slip`, {
                order_id: order_id
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                resolve(res.data)
            })
        })
    }


    public cancelOrder = (order_id: number) => {

        const token = localStorage.getItem("token")

        return new Promise((resolve) => {
            axios.patch(`${END_POINT}/cancel_slip`, {
                order_id: order_id
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                resolve(res.data)
            })
        })
    }
}