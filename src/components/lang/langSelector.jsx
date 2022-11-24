import React from 'react';
import { useRouter } from 'next/router'

const LangSelector = () => {
  const router = useRouter()
  const changeLanguage = (event) => {
    router.push(event.target.value)
  }
  return (
    <>
      <div className="relative">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-solid border-black rounded-[10px] blur-sm drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" onClick={() => {console.log('first child')}}>
        </div> */}
        <select className="bg-gradient-to-b from-[#AAAFAF] to-[#353C3B] border border-[#192644] text-white font-bold rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-7 appearance-none">
          <option>English</option>
          <option>Dutch</option>
        </select>
      </div>
    </>
  );
}

export default LangSelector;