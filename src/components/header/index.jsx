import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
import { BsFillMoonStarsFill } from "react-icons/bs";
import LangSelector from "../lang/langSelector";
import { setDarkMode } from '../../redux/action/themeAction';
import sun from '../../../public/sun.png'

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);
  const { t } = useTranslation('common');
  const [isResponsible, setResponsible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setResponsible(true);
    } else {
      setResponsible(false)
    }
  }

  useEffect(() => {

    window.addEventListener("resize", handleResize)
  }, [])


  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <nav className="py-10 flex justify-between items-center dark:text-white">
            <h1 className="font-bold md:text-[36px] sm:text-[24px] xs:text-[16px] ">{t('CRMAX')}</h1>
            <ul className="flex items-center">

              {
                !isResponsible && <div className='menu-list justify-center items-center gap-[16px] flex' >
                  <li>
                    <span
                      className="bg-white  text- to-teal-500  px-4 py-2 border-none rounded-md dark:bg-gradient-to-r from-cyan-500 "
                      style={{ color: darkMode ? `white` : `#192644` }}
                    >
                      <Link href='#' >
                        Services
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span className="bg-white  text- to-teal-500  px-4 py-2 border-none rounded-md dark:bg-gradient-to-r from-cyan-500 "
                      style={{ color: darkMode ? `white` : `#192644` }}>
                      <Link href='#' >
                        Contact
                      </Link>
                    </span>
                  </li>

                  <li>
                    <span className="bg-white  text- to-teal-500  px-4 py-2 border-none rounded-md dark:bg-gradient-to-r from-cyan-500 "
                      style={{ color: darkMode ? `white` : `#192644` }}>
                      <Link href='#' >
                        Portfolio
                      </Link>
                    </span>
                  </li>
                </div>

              }

              <li>
                <LangSelector />
              </li>
              <li>
                {
                  darkMode &&
                  <div style={{
                    background: `linear-gradient(180deg, #08B6CD 0%, #22E8D4 100%)`,
                    borderRadius: `12px`,
                    marginLeft: `24px`,
                    padding: `4px 4px 0px`,
                    cursor: `pointer`
                  }} >
                    <img
                      src={`/moon.png`}
                      onClick={() => dispatch(setDarkMode(false))}
                    />
                  </div>

                }

                {
                  !darkMode &&
                  <div style={{
                    background: `white`,
                    borderRadius: `12px`,
                    marginLeft: `24px`,
                    border: `1px solid #192644`,
                    padding: `6px 8px`,
                    cursor: `pointer`

                  }}>
                    <img
                      src={`/sun.png`}
                      onClick={() => dispatch(setDarkMode(true))}

                    />
                  </div>
                }
                {/* <BsFillMoonStarsFill
                  onClick={() => dispatch(setDarkMode(!darkMode))}
                  className=" cursor-pointer text-2xl ml-7"
                /> */}
              </li>
            </ul>
          </nav>
          {
            isResponsible && <ul className="menu-list flex justify-center items-center gap-[16px]">

              <li>
                <span className="bg-white  text- to-teal-500  px-4 py-2 border-none rounded-md dark:bg-gradient-to-r from-cyan-500 "
                  style={{ color: darkMode ? `white` : `#192644` }}>
                  <Link href='#' >
                    Services
                  </Link>
                </span>
              </li>

              <li>
                <span className="bg-white  text- to-teal-500  px-4 py-2 border-none rounded-md dark:bg-gradient-to-r from-cyan-500 "
                  style={{ color: darkMode ? `white` : `#192644` }}>
                  <Link href='#' >
                    Contact
                  </Link>
                </span>
              </li>

              <li>
                <span className="bg-white  text- to-teal-500  px-4 py-2 border-none rounded-md dark:bg-gradient-to-r from-cyan-500 "
                  style={{ color: darkMode ? `white` : `#192644` }}>
                  <Link href='#' >
                    Portfolio
                  </Link>
                </span>
              </li>

            </ul>
          }


        </main>
      </div>
    </>
  );
}

export default Header;