import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head";
import Image from "next/image";

import ServiceCard from "../src/components/servicecard";
import Button from "../src/components/button";
import Contact from "../src/components/contact";

import computer from "../public/Computer.svg";
const thinking = "thinking.png";
const eco = "eco.png";
const online = "online.png";
const design_system = "design_system.png";
const blockchain = "blockchain.png";
const game = "game.png";

export default function Home() {
  const { t } = useTranslation('common');
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>IT Labs - IT Consultancy</title>
        <meta name="description" content="Web development and IT Consultancy" />
        <link rel="icon" href="/crmax.png" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto md:px-10">
          <section className="md:px-10 lg:px-20 mb-40">
            <div className="gap-[32px] md:flex items-end xs:block">
              <div className="flex flex-col gap-[32px] text-left mr-auto place-self-center xs:w-[100%] gap-[16px] md:w-[50%]   ">
                <h1 className="text-[24px] md:text-[48px] font-bold leading-[58px] dark:text-white drop-shadow-main">{t('A_BAD')}</h1>
                <div className="text-[#063150] text-lg lg:text-2xl dark:text-[#4784AF] leading-7 list-item ml-8">{t('JAKOB')}</div>
                <p className="text-[#063150] text-lg lg:text-2xl dark:text-[#4784AF] leading-7">{t('WE_PROVIDE')}</p>

                <div className="flex items-center md:gap-[110px] xs:gap-[48px] text-lg lg:text-2xl" >
                  <a href="#" className="inline-flex items-center justify-center text-[#4784AF] dark:text-[#0CB4A3] font-semibold">
                    {t('GET_START')}
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="#" className="dark:text-white">
                    Learn more
                  </a>
                </div>

              </div>
              {/* <div className=" lg:mt-0 lg:col-span-5 md:w-[50%] xs:w-[100%] ">
                <Image src={computer} width={500} height={500} />
              </div> */}
              <div className="text-center md:w-[50%] xs:w-[100%]" >
                <Image src={computer} width={500} height={500} />
              </div>

            </div>
          </section>
        </div>
        <div className="bg-[url('/Back-light.png')] dark:bg-[url('/Back-dark.png')] bg-no-repeat">
          <div className="max-w-screen-xl mx-auto">
            <section className="pt-80 md:px-10">
              <h2 className="text-[#192644] text-center font-bold dark:text-white md:text-[64px] text-[32px] pb-[48px] drop-shadow-main" >{t('SERVICES')}</h2>
              <div className="flex flex-wrap justify-between gap-32 " >
                <ServiceCard title={t('SERVICE_ITEM_TITLE1')} content={t('SERVICE_ITEM_CONTENT1')} img={thinking}/>
                <ServiceCard title={t('SERVICE_ITEM_TITLE2')} content={t('SERVICE_ITEM_CONTENT2')} img={eco}/>
                <ServiceCard title={t('SERVICE_ITEM_TITLE3')} content={t('SERVICE_ITEM_CONTENT3')} img={online}/>
                <ServiceCard title={t('SERVICE_ITEM_TITLE4')} content={t('SERVICE_ITEM_CONTENT4')} img={design_system}/>
                <ServiceCard title={t('SERVICE_ITEM_TITLE5')} content={t('SERVICE_ITEM_CONTENT5')} img={blockchain}/>
                <ServiceCard title={t('SERVICE_ITEM_TITLE6')} content={t('SERVICE_ITEM_CONTENT6')} img={game}/>
              </div>
            </section>
            <section className="relative z-10 overflow-hidden py-20 lg:py-[120px] md:px-10">
              <h2 className="text-[32px] text-[#192644] text-center font-intro font-bold dark:text-white md:text-[64px] " >{t('BOOKMEETING')}</h2>
              <div className="flex items-center justify-center">
                <Button>Book Now</Button>
              </div>
            </section>
            <section>
              <Contact darkMode={darkMode}/>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}