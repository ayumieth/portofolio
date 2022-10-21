import Head from "next/head";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import code from "../public/code.png";
import design from "../public/design.png";
import conversation from "../public/conversation.png";
import computer from "../public/computer.svg";
import Image from "next/image";

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
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-3xl mb-3 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{t('A_BAD')}</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{t('JAKOB')}</p>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{t('WE_PROVIDE')}</p>

                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-teal-600 font-bold text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  {t('GET_START')}
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Learn more
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Image src={computer} width={500} height={500} />
              </div>
            </div>
          </section>
        </section>


        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">{t('SERVICES')}</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              {t('WE_PROVIDE_WIDE')}
              <span className="text-teal-500"> {t('WEBDESIGN')} </span>
              and <span className="text-teal-500"> {t('BLOCKCHAIN')} </span>

            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2  ">
                {t('MOBILE')}
              </h3>
              <p className="py-2">
                {t('WE_DESIGN')}
              </p>
              <h4 className="py-4 text-teal-600">{t('TOOLS')}</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2 ">
                {t('WEB_DEVELOPMENT')}
              </h3>
              <p className="py-2">
                {t('DO_YOU_HAVE')}
              </p>
              <h4 className="py-4 text-teal-600">{t('ALL_WEB')}</h4>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1">Responsive Web Applications</p>
              <p className="text-gray-800 py-1">Modernize old websites</p>
              <p className="text-gray-800 py-1">Website Maintenance</p>
              <p className="text-gray-800 py-1">Hosting</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={conversation} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2 ">{t('BLOCKCHIN_CON')}</h3>
              <p className="py-2">
                {t('SUCCEED_IN_YOUR')}
              </p>
              <h4 className="py-4 text-teal-600">{t('DEFI_WEB3')}</h4>
              <p className="text-gray-800 py-1">Deliver Web3 Strategies</p>
              <p className="text-gray-800 py-1">NFT Development</p>
              <p className="text-gray-800 py-1">Smart Contracts</p>
              <p className="text-gray-800 py-1">Tokenomics</p>
            </div>
          </div>
        </section>
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