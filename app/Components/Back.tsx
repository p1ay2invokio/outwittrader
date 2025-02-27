import { useRouter } from "next/navigation"

const Back = () => {

    let navigate = useRouter()

    return (
        <div onClick={() => {
            navigate.push('/')
        }} className='w-[80px] absolute left-[100px] top-[100px] cursor-pointer h-[40px] bg-blue-600 rounded-[8px] flex justify-center items-center'>
            <p className='font-[medium] text-white'>กลับ</p>
        </div>
    )
}

export default Back