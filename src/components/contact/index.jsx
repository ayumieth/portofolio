import { useTranslation } from 'next-i18next'

import Input from '../Input'

import Home from '../svg/Icons/Home'
import Phone from '../svg/Icons/Phone'
import Mail from '../svg/Icons/Mail'
import Points from '../svg/Points'
import Ellipse from '../svg/Ellipse'

const Contact = ({darkMode, ...props}) => {

  const { t } = useTranslation('common');

  return (
    <div className="py-36 dark:text-white  " {...props}>
      <div className="flex items-center justify-center md:flex xs:block ">
        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <h2 className="dark:text-white mb-6 font-bold uppercase text-[25px] sm:text-[28px] lg:text-[36px] xl:text-5xl">
              {t('GET_IN')}
            </h2>
            <p className="text-[#44647B] mb-9 text-base leading-relaxed dark:text-white w-[70%]">
              {t('LOREM')}
            </p>
            <div className="mb-8 flex items-center">
              <Home color1={darkMode?'#4784AF':'#082A2F'} color2={darkMode?'#22E8D4':'#6D7272'} className="mr-10" />
              <div>
                <h4 className="mb-1 text-xl font-bold dark:text-white">{t('OUT_LOCATION')}</h4>
                <p className="text-[#44647B] dark:text-white ">
                  Belgium
                </p>
              </div>
            </div>
            <div className="mb-8 flex items-center">
              <Phone color1={darkMode?'#4784AF':'#082A2F'} color2={darkMode?'#22E8D4':'#6D7272'} className="mr-10" />
              <div>
                <h4 className="mb-1 text-xl font-bold dark:text-white ">{t('PHONE_NUMBER')}</h4>
                <p className="text-[#44647B] dark:text-white">(+62) 81 414 257 9980</p>
              </div>
            </div>
            <div className="mb-8 flex items-center">
              <Mail color1={darkMode?'#4784AF':'#082A2F'} color2={darkMode?'#22E8D4':'#6D7272'} className="mr-10" />
              <div>
                <h4 className="mb-1 text-xl font-bold dark:text-white">{t('EMAIL')}</h4>
                <p className="text-[#44647B] dark:text-white">crmax.consultancy@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-4 lg:w-1/2 xl:w-5/12 md:mx-[48px] w-full  xs:mx-[24px] w-[90%]">
          <div>
            <Ellipse color={darkMode?'#00FFE6':'#192644'} className="absolute -top-28 -right-20"/>
            <Points color={darkMode?'#00FFE6':'#192644'} className="absolute -right-7 -bottom-7" />
            <Points color={darkMode?'#00FFE6':'#192644'} className="absolute -left-7 -bottom-7" />
          </div>
          <div className='relative'>
            <div className="absolute -top-[7px] -left-[7px] -right-[7px] -bottom-[7px] border-[14px] border-solid border-[#092A42] 
                        dark:border-[#4784AF] rounded-xl blur-[5px] drop-shadow-main">
            </div>
            <div className="relative bg-white rounded-lg p-8 shadow-lg sm:p-12 dark:bg-gradient-[137deg] from-[#192644] to-[#121928] flex flex-col border-[2px] border-solid border-[#08B6CD]" >
              <Input placeholder={"Your Name"} className="mb-6" />
              <Input placeholder={"Your Email"} className="mb-6" />
              <Input placeholder={"Your Phone"} className="mb-6" />
              <Input placeholder={"Your Message"} isTextArea  rows="6" className="mb-6" />
              <div>
                <button
                  className=" text-black text-center w-full font-bold p-3 rounded dark:text-white "
                  style={{ border: darkMode ? `1px solid #99F2FF` : `1px solid black` }}

                >
                  {t('SEND')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;