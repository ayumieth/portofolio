import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
import { BsFillMoonStarsFill } from "react-icons/bs";
import LangSelector from "../lang/langSelector";
import { setDarkMode } from '../../redux/action/themeAction';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);
  const { t } = useTranslation('common');
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <nav className="py-10 flex justify-between dark:text-white">
            <h1 className="font-bold text-xl">{t('CRMAX')}</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => dispatch(setDarkMode(!darkMode))}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <LangSelector />
              </li>
              <li>
                <span className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                  <Link href='contact' >
                    Contact
                  </Link>
                </span>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </>
  );
}

export default Header;