'use client'

import { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { ProductMethod } from '../methods/ProductMethod'
import { ProductInterface } from '../Interfaces/ProductInterface'
import Swal from 'sweetalert2'
import imageCompression from 'browser-image-compression'
import { OrderMethod } from '../methods/OrderMethod'
import { OrderInterface } from '../Interfaces/OrderInterface'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import { END_POINT, END_SLIP } from '@/config'
import { FaCamera } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import Back from '../Components/Back'
import Image from 'next/image'
import { IoArrowBackCircleSharp } from 'react-icons/io5'

dayjs.extend(relativeTime)

const RentSignal = () => {

  const [orders, setOrders] = useState<OrderInterface[] | null>(null)
  let [products, setProducts] = useState<ProductInterface[] | null>(null)
  const [modal, setModal] = useState<boolean>(false)
  const [agree, setAgree] = useState<boolean>(false)
  const [specificProduct, setSpecificProduct] = useState<ProductInterface | null>(null)
  const [slip, setSlip] = useState<any>(null)
  const [refresh, setRefresh] = useState<number>(0)

  const navigate = useRouter()

  const ResetPurchase = () => {
    setModal(false)
    setAgree(false)
    setSpecificProduct(null)
    setSlip(null)
  }

  const initial = async () => {
    let res_product = await new ProductMethod().getProducts()
    let res_orders = await new OrderMethod().getOrders()

    console.log(res_orders)

    setProducts(res_product)
    setOrders(res_orders)
  }

  useEffect(() => {
    initial()
  }, [refresh])

  return (
    <div>

      {modal ? <div onClick={(e) => {
        if (e.target == e.currentTarget) {
          setModal(false)
        }
      }} className="w-full fixed top-[0px] h-[100vh] left-0 bg-black/60 flex justify-center items-center z-[10]">
        {!agree ? <div className="w-[600px] h-[550px] bg-white rounded-[8px] p-[20px] shadow-lg">
          <p className='font-[bold] mb-[5px]'>กฏกติกาการเช่าสัญญาณ</p>
          <object data="./terms.pdf#toolbar=0" className="w-full h-[85%]"></object>
          <div className="flex gap-[5px]">
            <button onClick={() => {
              setAgree(true)
            }} className="w-[100px] h-[35px] shadow-lg bg-green-600 rounded-[4px] text-white mt-[10px] font-[medium]">ยินยอม</button>
            <button onClick={() => {
              setModal(false)
            }} className="w-[100px] h-[35px] shadow-lg bg-orange-600 rounded-[4px] text-white mt-[10px] font-[medium]">ยกเลิก</button>
          </div>
        </div> : <div className="w-[500px] h-[650px] bg-white shadow rounded-[8px] p-[20px] flex justify-center items-center flex-col max-[600px]:w-[350px]">
          <img src='./kshop.webp' className='w-[250px] rounded-[8px] shadowf-lg mb-[5px]'></img>
          <hr className='border-[1px] w-full border-black/20 mb-[20px] mt-[20px]' />
          {specificProduct ? <div className='w-full flex justify-center flex-col items-center text-[14px]'>
            <p className='font-[medium]'>{specificProduct.name}</p>
            <p className='font-[light]'>{specificProduct.detail}</p>
            <p className='font-[medium]'>{specificProduct.price} บาท</p>
            <label className='w-[250px] h-[40px] flex justify-center items-center cursor-pointer border-[1px] border-black rounded-[4px] mt-[10px] mb-[10px]' htmlFor='upload-slip'>
              {slip ? <p className='w-[120px] whitespace-nowrap overflow-hidden text-ellipsis'>{slip.name}</p> : <div className='text-center'>
                <p className='font-[medium]'>อัพโหลดสลิป</p>
                <p className='font-[light] text-[12px]'>ยังไม่ได้อัพโหลดไฟล์</p>
              </div>}
            </label>
            <input id='upload-slip' onChange={async (e) => {
              const file = e.target.files
              if (file) {
                // console.log(e.target.files)


                const compessedFile = await imageCompression(file[0], { maxSizeMB: 0.5, maxWidthOrHeight: 700, useWebWorker: true, fileType: 'image/webp' })

                console.log("Original : ", file[0])
                console.log("Compressed : ", compessedFile)
                setSlip(compessedFile)
              }

            }} type='file' className='mt-[20px] hidden'></input>

            <button onClick={() => {
              if (slip) {
                Swal.fire({ title: `สั่งซื้อ ${specificProduct.name}`, confirmButtonText: 'ยืนยัน', showConfirmButton: true, showCancelButton: true }).then((res) => {
                  if (res.isConfirmed) {
                    new ProductMethod().purchaseProduct(specificProduct.id, slip).then((res) => {
                      console.log(res)
                      if (res.purchased) {
                        Swal.fire({ title: 'สั่งซื้อสำเร็จ', icon: 'success' })
                      }
                      ResetPurchase()
                      setRefresh(1)
                    })
                  }
                })
              } else {
                Swal.fire("กรุณาอัพโหลดสลิป")
              }
            }} className='w-[100px] h-[40px] font-[medium] bg-green-700 text-white rounded-[8px] mt-[10px]'>สั่งซื้อ</button>
          </div> : null}

        </div>}

      </div> : null}



      <Header />


      <div className="w-full bg-white mt-[150px] flex  items-center flex-col">
        {/* <Back /> */}
        {/* <p className="text-white font-[medium] text-[24px]">ยินดีต้อนรับ! สู่ OutwitTrader</p> */}

        <div>
          <div className='flex gap-[5px] items-center'>
            <IoArrowBackCircleSharp onClick={() => {
              navigate.push("/")
            }} className="cursor-pointer" size={40}></IoArrowBackCircleSharp>
            <div>
              <p className="font-[medium] text-[18px]">สินค้า (PRODUCTS)</p>
              <p className="font-[light] text-[14px] text-gray-500">หน้าหลัก / ห้องสัญญาณ</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[20px] mt-[20px] max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
            {products && products.length > 0 ? products.map((item) => {
              return (
                <div key={item.id} className="flex flex-col gap-[10px]">
                  <div className="w-[300px] h-[300px] bg-white shadow-lg rounded-[8px] p-[10px]">
                    <div className='w-full h-[200px] flex justify-center items-center'>
                      <Image alt="." width={300} height={200} src="/signal.webp" className="w-full h-full object-cover rounded-[8px]"></Image>
                    </div>
                    <div className='w-full justify-center flex'>
                      <p className='font-[light] text-[14px]'>{item.detail}</p>
                    </div>
                    <div className='flex justify-between mt-[10px]'>

                      <p className='font-[light] text-[14px]'>{item.name}</p>
                      <div className=' flex-col flex justify-end items-end'>
                        <p className='font-[light] text-[14px]'>ระยะเวลา {item.days} วัน</p>
                        <p className='font-[light] text-[14px]'>ราคา {item.price.toLocaleString('TH')} บาท</p>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => {

                    // new ProductMethod().purchaseProduct(item.id).then((res)=>{
                    //   console.log(res)
                    // })
                    setSpecificProduct(item)
                    setModal(true)
                  }} className="w-full h-[40px] cursor-pointer bg-blue-700 flex justify-center items-center rounded-[4px] text-white">
                    <p className='font-[medium]'>เช่าสัญญาณ</p>
                  </div>
                </div>
              )
            }) : null}

          </div>
        </div>


        <table className='w-[800px] mt-[50px] mb-[100px] max-lg:w-[300px]'>
          <thead className='border-b-[1px] border-black font-[medium] text-center max-lg:text-[12px]'>
            <tr>
              <td>Order ID</td>
              {/* <td>ผู้สั่งซื้อ</td> */}
              <td>สินค้า</td>
              <td>วันที่สั่งซื้อ</td>
              <td>วันหมดอายุ</td>
              <td className='max-lg:hidden'>สลิป</td>
              <td>สถานะ</td>

            </tr>
          </thead>
          <tbody className='font-[light] text-center max-lg:text-[12px]'>
            {orders && orders.length > 0 ? orders.map((item) => {
              let status = Number(item.status)
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  {/* <td>{item.username}</td> */}
                  <td>{item.product_name}</td>
                  <td>
                    <p className='text-[14px] max-lg:text-[12px]'>{dayjs(Number(item.timestamp)).format('DD/MM/YYYY hh:mm:ss')}</p>
                    {/* <p className='text-[10px]'>{dayjs(Number(item.timestamp)).fromNow()}</p> */}

                  </td>
                  <td>
                    <p className='text-[14px] max-lg:text-[12px]'>{dayjs(Number(item.timestamp)).add(30, 'day').format('DD/MM/YYYY hh:mm:ss')}</p>
                    {/* <p className='text-[12px]'>{dayjs(Number(item.timestamp)).format('DD/MM/YYYY')}</p> */}
                  </td>
                  <td className='max-lg:hidden'><a href={`${END_SLIP}/${item.slip}`} className='text-[12px] text-blue-500'>{item.slip}</a></td>
                  <td className='flex justify-center items-center'>
                    <p className={`text-[12px] w-[110px] h-[30px] flex justify-center max-lg:text-[12px] items-center ${status == 0 ? 'bg-orange-500' : status == 1 ? 'bg-green-700' : status == 2 ? 'bg-black' : null} rounded-[4px] text-white font-[light]`}>{status == 0 ? 'ตรวจสอบ 1~2 นาที' : status == 1 ? 'สั่งซื้อสำเร็จ' : status == 2 ? 'สลิปไม่ถูกต้อง' : null}</p>
                  </td>
                </tr>
              )
            }) : <tr>
              <td className='pt-[20px]' colSpan={6}>ไม่พบคำสั่งซื้อ</td>
            </tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RentSignal