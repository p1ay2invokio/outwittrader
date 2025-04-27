const Footer = () => {
    return (
        <div className="w-full h-[30px] flex justify-between fixed bottom-0 pl-[50px] pr-[50px]  text-white bg-[#232b2b] items-center max-[600px]:h-[50px] max-[390px]:p-[10px] z-[0]">
            <p className="font-[plight] text-[14px] max-[768px]:text-[12px] whitespace-nowrap max-[390px]:text-[11px]">Copyright © 2025 OutwitTrader</p>
            <div className="flex gap-[5px] font-[plight] text-[14px] max-[768px]:text-[12px] max-[390px]:text-[11px]">
                <a className="whitespace-nowrap" target="_Blank" href="policy.pdf">Privacy Policy</a>
                <p>·</p>
                <a className="whitespace-nowrap" target="_Blank" href="terms.pdf">Term & Conditions</a>
            </div>
        </div>
    )
}

export default Footer