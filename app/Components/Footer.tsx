const Footer = () => {
    return (
        <div className="w-full h-[30px] flex justify-between fixed bottom-0 pl-[50px] pr-[50px] z-[20]  text-white bg-transparent items-center max-[600px]:h-[50px] max-[390px]:p-[10px]">
            <p className="font-[plight] text-[14px] max-[768px]:text-[12px] whitespace-nowrap max-[390px]:text-[11px]">Copyright © 2025 OutwitTrader</p>
            <div className="flex gap-[5px] font-[plight] text-[14px] max-[768px]:text-[12px] max-[390px]:text-[11px]">
                <a className="whitespace-nowrap" target="_Blank" href="th_privacy.pdf">Privacy Policy</a>
                <p>·</p>
                <a className="whitespace-nowrap" target="_Blank" href="th_terms.pdf">Term & Conditions</a>
            </div>
        </div>
    )
}

export default Footer