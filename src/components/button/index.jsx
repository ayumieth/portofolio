const Button = ({children}) => {
  return (
    <div className="relative">
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 border-2 border-solid border-[#1E3E3B] 
                    dark:border-[#0CB4A3] rounded-[10px] blur-sm drop-shadow-main">
      </div>
      <button 
        className="relative bg-gradient-to-b from-[#DEE0E0] to-[#FFFFFF] dark:from-[#08B6CD] dark:to-[#22E8D4] rounded-[10px] 
                    border border-solid border-[#1E3E3B] px-4 py-2.5 font-bold text-[16px] leading-[19px] dark:text-white">
        {children}
      </button>
    </div>
  )
}

export default Button;