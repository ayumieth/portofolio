const ServiceCard = ({title, content, img}) => {
  return (
    <div className="relative service-item">
      <div className="absolute -top-[7px] -left-[7px] -right-[7px] -bottom-[7px] border-[14px] border-solid border-[#092A42] 
                      dark:border-[#4784AF] rounded-xl blur-[5px] drop-shadow-main">
      </div>
      <div 
        className="relative rounded-xl max-w-lg bg-white px-[34px] py-[50px] min-h-[560px] 
                  border-[2px] border-solid border-[#08B6CD] dark:bg-gradient-[137deg] from-[#192644] to-[#4784AF]">
        <img src={img} className="w-[123px] mx-[auto] mb-14" />
        <p className=" text-[#192644] text-2xl leading-7 font-bold uppercase text-center dark:text-white mb-7" >{title}</p>
        <p className="text-[#192644] whitespace-pre-line text-2xl leading-7 font-bold text-center dark:text-white">{content} </p>
      </div>
    </div>
  )
}

export default ServiceCard;