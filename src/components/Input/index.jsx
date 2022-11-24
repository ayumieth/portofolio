const Input = ({placeholder, isTextArea, className, ...props}) => {
  const classes = `text-black w-full py-3 px-[14px] rounded-[4px] outline-none dark:text-white bg-[transparent] border border-solid border-black dark:border-[#99F2FF] ${className}`
  return (
    isTextArea ? 
      <textarea 
        placeholder={placeholder}
        className={classes}
        {...props}
      /> :
      <input
        type="text"
        placeholder={placeholder}
        className={classes}
        {...props}
      />
  )
}

export default Input;