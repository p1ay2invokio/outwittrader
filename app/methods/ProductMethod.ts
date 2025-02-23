import { END_POINT } from "@/config"
import axios from "axios"
import { ProductInterface } from "../Interfaces/ProductInterface"

export class ProductMethod {

    public getProducts = (): Promise<ProductInterface[]> => {
        return new Promise((resolve) => {

            let token = localStorage.getItem("token")
            if (token) {
                axios.get(`${END_POINT}/products`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    resolve(res.data)
                })
            }
        })
    }

    public purchaseProduct = (product_id: number, slip: any): Promise<{ purchased: boolean }> => {
        return new Promise((resolve) => {
            let token = localStorage.getItem("token")

            const form = new FormData()
            form.append('product_id', product_id.toString())
            form.append("slip", slip)

            if (token) {
                axios.post(`${END_POINT}/purchase`, form, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    resolve(res.data)
                })
            }
        })
    }
}