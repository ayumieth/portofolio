import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
import { BsFillMoonStarsFill } from "react-icons/bs";
import LangSelector from "../lang/langSelector";
import ThemeSelector from '../themeSelector';
import { setDarkMode } from '../../redux/action/themeAction';
import sun from '../../../public/sun.png'
import Button from '../button'

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);
  const { t } = useTranslation('common');
  const [isResponsible, setResponsible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setResponsible(true)
    } else {
      setResponsible(false)
    }
  }

  const handleThemeChange = () => {
    dispatch(setDarkMode(!darkMode))
  }

  useEffect(() => {

    window.addEventListener("resize", handleResize)
  }, [])


  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white dark:bg-gray-900">
          <div className='max-w-screen-xl mx-auto'>
            <nav className="w-11/12 mx-auto py-10 flex justify-between items-center">
              <h1 className="font-bold md:text-[36px] sm:text-[24px] xs:text-[16px] dark:text-white">{t('CRMAX')}</h1>
              <div className="flex items-center justify-center gap-[16px] menu-list">
                <Button>Services</Button>
                <Button>Contact</Button>
                <Button>Portfolio</Button>
                <LangSelector />
                <ThemeSelector darkMode={darkMode} changeTheme={handleThemeChange} />
                  {/* <BsFillMoonStarsFill
                    onClick={() => dispatch(setDarkMode(!darkMode))}
                    className=" cursor-pointer text-2xl ml-7"
                  /> */}

              </div>
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
          </div>
        </main>
      </div>
    </>
  );
}

export default Header;