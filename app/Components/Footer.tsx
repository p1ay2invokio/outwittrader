const Footer = () => {
    return (
        <div className="w-full h-[30px] flex justify-between fixed bottom-0 pl-[50px] pr-[50px]  text-white bg-[#232b2b] items-center max-[600px]:h-[50px]">
            <p className="font-[light] text-[14px] max-sm:text-[8px] whitespace-nowrap">Copyright © 2025 OutwitTrader</p>
            <div className="flex gap-[5px] font-[light] text-[14px] max-[600px]:text-[8px]">
                <a className="whitespace-nowrap" target="_Blank" href="policy.pdf">Privacy Policy</a>
                <p>·</p>
                <a className="whitespace-nowrap" target="_Blank" href="terms.pdf">Term & Conditions</a>
            </div>
        </div>
    )
}

export default Footer