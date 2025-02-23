'use client'

import { useEffect, useState } from "react"
import Header from "../Components/Header"
import { OrderMethod } from "../methods/OrderMethod"
import { OrderInterface } from "../Interfaces/OrderInterface"
import { END_SLIP } from "@/config"
import Swal from "sweetalert2"

const ConfirmSlip = () => {

    let [orders, setOrders] = useState<OrderInterface[] | null>(null)
    const [refresh, setRefresh] = useState<number>(0)

    const intial = async () => {
        let res_orders = await new OrderMethod().getAllOrders()

        console.log(orders)
        setOrders(res_orders)
    }


    useEffect(() => {
        intial()
    }, [refresh])

    return (
        <div>
            <Header />

            <div className="grid grid-cols-6 place-items-center mt-[100px] gap-y-[20px] max-[600px]:grid-cols-1 max-[768px]:grid-cols-3 max-[1024px]:grid-cols-4">
                {orders && orders.length > 0 ? orders.map((item => {
                    return (
                        <div key={item.id} className="w-[200px] h-[200px] shadow p-[10px] font-[light]">
                            <div className="flex justify-between mb-[20px]">
                                <p className="font-[medium]">#{item.id}</p>
                                <div>
                                    <p className="font-[medium]">{item.product_name}</p>
                                    <p className="font-[medium]">{item.username}</p>
                                </div>
                            </div>
                            <a className="font-[light] text-[12px]" href={`${END_SLIP}/${item.slip}`}>{item.slip ? item.slip : 'ไม่พบ slip'}</a>

                            <div className="grid grid-cols-2 gap-[8px] mt-[20px]">
                                <button onClick={async () => {
                                    Swal.fire({ showConfirmButton: true, showCancelButton: true, title: 'ยืนยันสลิป' }).then(async (res) => {
                                        if (res.isConfirmed) {
                                            let response = await new OrderMethod().confirmOrder(item.id)

                                            console.log(response)
                                            setRefresh(refresh + 1)
                                            Swal.fire("สำเร็จ")
                                        }
                                    })
                                }} className="w-full h-[40px] bg-green-600 text-white rounded-[4px] font-[medium] text-[12px]">ยืนยันสลิป</button>
                                <button onClick={async () => {
                                    Swal.fire({ showConfirmButton: true, showCancelButton: true, title: 'สลิปไม่ถูกต้อง' }).then(async (res) => {
                                        if (res.isConfirmed) {
                                            let response = await new OrderMethod().cancelOrder(item.id)

                                            console.log(response)
                                            setRefresh(refresh + 1)
                                            Swal.fire("สำเร็จ")
                                        }
                                    })
                                }} className="w-full h-[40px] bg-red-600 rounded-[4px] text-white font-[medium] text-[12px]">สลิปไม่ถูกต้อง</button>
                            </div>
                        </div>
                    )
                })) : null}
            </div>


        </div>
    )
}

export default ConfirmSlip