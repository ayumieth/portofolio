import React from 'react';
import { useRouter } from 'next/router'

const LangSelector = () => {
  const router = useRouter()
  const changeLanguage = (event) => {
    router.push(event.target.value)
  }
  return (
    <>
      <select id="countries" onChange={changeLanguage} className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:ml-[15px] xs:mx-[auto] my-[16px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ maxWidth: '100px' }}>
        <option value='en'>English</option>
        <option value='nl'>Dutch</option>
      </select>
    </>
  );
}

export default LangSelector;