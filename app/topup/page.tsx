import Header from "../Components/Header"

const Topup = () => {
    return (
        <div>
            <Header />
            <div className="h-[calc(100vh-80px)] mt-[80px] flex justify-center items-center flex-col">
                <img className="w-[300px] rounded-[8px]" src="./qr.webp"></img>

                <input type="file" className="border-[1px] mt-[20px]"></input>

                <button className="font-[medium] w-[100px] h-[40px] mt-[20px] bg-blue-600 rounded-[8px] text-white">ส่งสลิป</button>
            </div>
        </div>
    )
}

export default Topup