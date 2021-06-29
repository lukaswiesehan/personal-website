import {forwardRef} from 'react'

export const Input = forwardRef(({id, type, placeholder, error, onBlur}, ref) => {
  return (
    <input className={`px-3 h-8 w-full rounded-lg border-none border-warm-gray-100 dark:border-cool-gray-500 bg-warm-gray-100 dark:bg-cool-gray-500
      placeholder-gray-500 dark:placeholder-cool-gray-300 text-gray-700 dark:text-cool-gray-100
      focus:outline-none focus:border-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500
      focus:ring-offset-2 focus:ring-offset-warm-gray-200 dark:focus:ring-offset-cool-gray-600
      ${error && 'ring-2 ring-red-500 dark:ring-red-400 ring-offset-2 ring-offset-warm-gray-200 dark:ring-offset-cool-gray-600'}`}
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      onBlur={onBlur}
      ref={ref}
      autoComplete="off"
      autoComplete="chrome-off"
      tabIndex="0"
    />
  )
})