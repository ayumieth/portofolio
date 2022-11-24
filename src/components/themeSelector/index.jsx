import Button from '../button'

const ThemeSelector = ({darkMode, changeTheme}) => {
  return (
    <div className="relative cursor-pointer" onClick={changeTheme}>
      <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-solid border-[#1E3E3B] dark:border-[#0CB4A3] rounded-[10px] blur-sm drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      </div>
      <div className="relative bg-gradient-to-b from-[#DEE0E0] to-[#FFFFFF] dark:from-[#08B6CD] dark:to-[#22E8D4] rounded-[10px] border border-solid border-[#1E3E3B] w-11 h-11 flex items-center justify-center">
        {
          darkMode ? <img src={`/Moon.svg`} className="pt-1 select-none" /> : <img src={'Sun.svg'} className="select-none" />
        }
      </div>
    </div>
  );
}

export default ThemeSelector;