import { Carousel } from "flowbite-react";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLine } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mt-[100px] flex justify-center items-center flex-col">
            <div>
                <p className="font-[medium] text-[20px]">ช่องทางการติดต่อ</p>
            </div>
            <div className="grid grid-cols-5 gap-[20px] max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 mb-[100px]">
                <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                    <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                        <FaDiscord size={50} />
                        <p className="font-[bold]">Discord</p>
                    </div>
                    <a target='blank' href="https://discord.gg/MVj5YnsMNM" className="font-[light] text-[12px]">https://discord.gg/MVj5YnsMNM</a>
                </div>
                <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                    <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                        <FaFacebook size={50} />
                        <p className="font-[bold]">Facebook</p>
                    </div>
                    <a target='blank' href="https://www.facebook.com/share/17yQJBhhVs/" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.facebook.com/share/17yQJBhhVs/</a>
                </div>
                <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                    <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                        <FaTiktok size={50} />
                        <p className="font-[bold]">Tiktok</p>
                    </div>
                    <a target='blank' href="https://www.tiktok.com/@outwittrader?_t=ZS-8u1IHEygb6G&_r=1" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.tiktok.com/@outwittrader</a>
                </div>
                <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                    <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                        <FaYoutube size={50} />
                        <p className="font-[bold]">Youtube</p>
                    </div>
                    <a target='blank' href="https://www.youtube.com/@OutwitTrade" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://www.youtube.com/@OutwitTrade</a>
                </div>

                <div className="w-[200px] h-[250px] bg-white shadow-lg rounded-[8px] flex flex-col justify-center items-center">
                    <div className="flex gap-[10px] justify-center items-center mb-[10px]">
                        <FaLine size={50} />
                        <p className="font-[bold]">Line OA</p>
                    </div>
                    <a target='blank' href="https://lin.ee/mV3lgMw" className="font-[light] text-[12px] w-[150px] overflow-hidden text-ellipsis">https://lin.ee/mV3lgMw</a>
                </div>

            </div>
        </div>
    )
}

export default Contact