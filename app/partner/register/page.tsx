"use client"

import Header from "@/app/Components/Header"
import LeftSide from "@/app/Components/LeftSide"
import { UserInterface } from "@/app/Interfaces/UserInterface"
import { UserMethod } from "@/app/methods/UserMethod"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const Register = () => {

    let navigate = useRouter()

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [thai_id, setThai_id] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [bod, setBod] = useState<string>('')
    const [job, setJob] = useState<string>('')
    const [salary, setSalary] = useState<string>('')
    const [bank_account, setBankAccount] = useState<string>('')
    const [bank_name, setBankName] = useState<string>('')
    const [team_name, setTeamName] = useState<string>('')
    const [face, setFace] = useState<File | Blob | null | string>(null)
    const [thai_id_img, setThai_id_img] = useState<File | Blob | null | string>(null)
    const [bankImg, setBankImg] = useState<File | Blob | null | string>(null)
    const [agree, setAgree] = useState<boolean>(false)

    // const [gender, setGender] 

    // console.log(gender)


    const intial = async () => {
        let token = localStorage.getItem('token')
        let user: UserInterface | null = token ? await new UserMethod().getUserAccounts(token) : null

        console.log(user)

        if (user?.team_id) {
            navigate.push('/partner')
        }

        if (user) {
            setName(user.name)
            setSurname(user.surname)
            setThai_id(user.thai_id)
            setAge(String(user.age))
            setGender(user.gender)
            setBod(user.bod)
            setJob(user.job)
            setSalary(String(user.salary))
            setBankAccount(user.bank_account)
            setBankName(user.bank_name)
            // setTeamName(user.team_name)
            setFace(user.face_img)
            setThai_id_img(user.thai_id_img)
            setBankImg(user.bank_img)
        }
    }

    useEffect(() => {
        intial()
    }, [])

    return (
        <div>
            <Header />
            <LeftSide />

            {agree ? <div className="w-full fixed top-[0px] h-[100vh] left-0 bg-black/60 flex justify-center items-center z-[10]">
                <div className="w-[600px] h-[550px] bg-white rounded-[8px] p-[20px] shadow-lg">
                    <p className='font-[bold] mb-[5px]'>กฏกติกาการเป็นพาร์ทเนอร์</p>
                    <object data="/terms.pdf#toolbar=0" className="w-full h-[85%]"></object>
                    <div className="flex gap-[5px]">
                        <button onClick={async () => {
                            if (name && surname && thai_id && age && gender && bod && job && salary && bank_account && bank_name && team_name) {
                                let formData = new FormData()
                                formData.append('name', name);
                                formData.append('surname', surname);
                                formData.append('thai_id', thai_id);
                                formData.append('age', age);
                                formData.append('gender', gender);
                                formData.append('bod', bod);
                                formData.append('job', job);
                                formData.append('salary', salary);
                                formData.append('bank_account', bank_account);
                                formData.append('bank_name', bank_name);
                                formData.append('team_name', team_name);

                                formData.append("face_img", face!)
                                formData.append("bank_img", bankImg!)
                                formData.append("thai_id_img", thai_id_img!)

                                let response = await new UserMethod().updatePartner(formData)

                                if (response.updated) {
                                    Swal.fire("สมัครเป็นพาร์ทเนอร์เสร็จสิ้น", "รอดำเนินการ 7-14 วัน", "success")
                                    navigate.push("/partner")
                                }
                            } else {
                                Swal.fire("กรุณากรอกข้อมูลใหครบถ้วน", '', "error")
                            }
                        }} className="w-[100px] h-[35px] shadow-lg bg-green-600 rounded-[4px] text-white mt-[10px] font-[medium]">ยินยอม</button>
                        <button onClick={() => {
                            setAgree(false)
                        }} className="w-[100px] h-[35px] shadow-lg bg-orange-600 rounded-[4px] text-white mt-[10px] font-[medium]">ยกเลิก</button>
                    </div>
                </div>
            </div> : null}

            <div className="pl-[300px] pt-[100px] pr-[50px] max-[768px]:pl-[10px] max-[768px]:pt-[260px]">
                <div className="w-full h-[calc(100vh)] border-[1px] border-transparent p-[10px] flex justify-center items-center">
                    <div className="w-[600px] h-[800px] flex justify-center flex-col border-[1px] border-transparent p-[20px]">
                        <div className="w-full grid grid-cols-2 max-[768px]:grid-cols-1 gap-[20px] items-end font-[light] text-[14px]">
                            <div className="flex flex-col">
                                <label>ชื่อ</label>
                                <input required onChange={(e) => {
                                    setName(e.target.value)
                                }} className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>นามสกุล</label>
                                <input required onChange={(e) => {
                                    setSurname(e.target.value)
                                }} className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>

                            <div className="flex flex-col">
                                <label>เลขบัตรประชาชน 13 หลัก</label>
                                <input maxLength={13} required onChange={(e) => {
                                    setThai_id(e.target.value)
                                }} className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-[12px]">
                                <div className="flex flex-col justify-between">
                                    <label>อายุ</label>
                                    <input maxLength={2} required onChange={(e) => {
                                        setAge(e.target.value)
                                    }} className="border-b-[1px] outline-none p-[5px]"></input>
                                </div>
                                <div className="flex flex-col">
                                    <label>เพศ</label>
                                    <select required onChange={(e) => {
                                        setGender(e.target.value)
                                    }} name="gender">
                                        <option value={"empty"} id="empty">ระบุเพศ</option>
                                        <option value={"male"} id="male">ชาย</option>
                                        <option value={"female"} id="female">หญิง</option>
                                        <option value={"non"} id="non">ไม่ระบุเพศ</option>
                                    </select>
                                    {/* <input type="" value={gender} onChange={(e) => {
                                        setGender(e.target.value)
                                    }} className="border-b-[1px] outline-none p-[5px]"></input> */}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label>ว/ด/ป เกิด</label>
                                <input required onChange={(e) => {
                                    setBod(e.target.value)
                                }} className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-[12px]">
                                <div className="flex flex-col">
                                    <label>อาชีพ</label>
                                    <select onChange={(e) => {
                                        setJob(e.target.value)
                                    }} name="gender">
                                        <option value={"empty"} id="empty">เลือกอาชีพ</option>
                                        <option value={"student"} id="student">นักเรียน / นักศึกษา</option>
                                        <option value={"private-bussiness"} id="private-bussiness">ธุรกิจส่วนตัว</option>
                                        <option value={"govern"} id="govern">รับราชการ</option>
                                        <option value={"others"} id="others">อื่นๆ</option>
                                    </select>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <label>รายได้/ปี</label>
                                    <input type="number" required onChange={(e) => {
                                        setSalary(e.target.value)
                                    }} className="border-b-[1px] outline-none p-[5px]"></input>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label>เลขบัญชีธนาคาร</label>
                                <input required onChange={(e) => {
                                    setBankAccount(e.target.value)
                                }} className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>ธนาคาร</label>
                                <select required onChange={(e) => {
                                    setBankName(e.target.value)
                                }} name="gender">
                                    <option value={"empty"} id="empty">เลือกธนาคาร</option>
                                    <option value={"kbank"} id="male">ธนาคารกสิกรไทย</option>
                                    <option value={"scb"} id="female">ธนาคารไทยพาณิชย์</option>
                                    <option value={"memo"} id="non">ธนาคารกรุงไทย</option>
                                    <option value={"memo"} id="non">ธนาคารกรุงเทพ</option>
                                    <option value={"kbank"} id="male">ธนาคารกรุงศรีอยุธยา</option>
                                    <option value={"scb"} id="female">ธนาคารทหารไทยธนชาต (ทีทีบี)</option>
                                    <option value={"memo"} id="non">ธนาคารซีไอเอ็มบี ไทย</option>
                                    <option value={"memo"} id="non">ธนาคารยูโอบี</option>
                                    <option value={"memo"} id="non">ธนาคารออมสิน</option>
                                    <option value={"memo"} id="non">ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธ.ก.ส.)</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label>อัพโหลดใบหน้า</label>
                                <input required onChange={(e) => {
                                    const files = e.target.files
                                    if (files) {
                                        setFace(files[0])
                                    }
                                }} type="file" className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>อัพโหลดสมุดบัญชีธนาคาร</label>
                                <input required onChange={(e) => {
                                    const files = e.target.files
                                    if (files) {
                                        setBankImg(files[0])
                                    }
                                }} type="file" className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>

                            <div className="flex flex-col">
                                <label>อัพโหลดบัตรประชาชน</label>
                                <input required onChange={(e) => {
                                    const files = e.target.files
                                    if (files) {
                                        setThai_id_img(files[0])
                                    }
                                }} type="file" className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>ชื่อทีมของคุณ(En)</label>
                                <input required value={team_name} onChange={(e) => {
                                    setTeamName(e.target.value.replace(/[^a-zA-Z]/g, ""))
                                }} className="border-b-[1px] outline-none p-[5px]"></input>
                            </div>
                        </div>

                        <div className="mt-[10px] flex flex-col gap-[20px] justify-center items-center">
                            <div className="flex flex-col">
                                <div className="flex gap-[10px] items-center mt-[10px]">
                                    <input required type="radio" id="general" name="general" className="hidden peer"></input>
                                    <label className="w-[20px] h-[17px] rounded-[4px] border-[1px] bg-gray-50 cursor-pointer peer-checked:bg-green-500" htmlFor="general"></label>
                                    <p onClick={()=>{
                                        window.open('/general.pdf')
                                    }} className="font-[light] text-[13px] underline cursor-pointer">เงื่อนไข ทั่วไป</p>
                                </div>
                                {/* <div className="flex gap-[10px] items-center mt-[10px]">
                                    <input required type="radio" id="privacy" name="privacy" className="hidden peer"></input>
                                    <label className="w-[20px] h-[17px] rounded-[4px] border-[1px] bg-gray-50 cursor-pointer peer-checked:bg-green-500" htmlFor="privacy"></label>
                                    <p className="font-[light] text-[13px]">เงื่อนไข Privacy by Design</p>
                                </div> */}
                                {/* <div className="flex gap-[10px] items-center mt-[10px]">
                                    <input required type="radio" id="payment" name="payment" className="hidden peer"></input>
                                    <label className="w-[20px] h-[17px] rounded-[4px] border-[1px] bg-gray-50 cursor-pointer peer-checked:bg-green-500" htmlFor="payment"></label>
                                    <p className="font-[light] text-[13px]">เงื่อนไข การชำระเงิน</p>
                                </div> */}
                                <div className="flex gap-[10px] items-center mt-[10px]">
                                    <input required type="radio" id="ilegal" name="ilegal" className="hidden peer"></input>
                                    <label className="w-[20px] h-[17px] rounded-[4px] border-[1px] bg-gray-50 cursor-pointer peer-checked:bg-green-500" htmlFor="ilegal"></label>
                                    <p onClick={()=>{
                                        window.open('/law.pdf')
                                    }} className="font-[light] text-[13px] underline cursor-pointer">เงื่อนไข กฏหมาย</p>
                                </div>
                            </div>
                            <div onClick={()=>{
                                setAgree(true)
                            }} className="w-[200px] cursor-pointer h-[40px] bg-blue-800 rounded-[8px] flex justify-center items-center text-white font-[medium]">

                                <p>ส่งข้อมูล</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register 