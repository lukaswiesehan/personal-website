import {forwardRef} from 'react'

export const Checkbox = forwardRef(({id, error, onBlur, children, className}, ref) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input className={`h-4 w-4 rounded-md border-none bg-warm-gray-100 dark:bg-cool-gray-600
        text-teal-600 dark:text-teal-500
        focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500
        focus:ring-offset-2 focus:ring-offset-warm-gray-200 dark:focus:ring-offset-cool-gray-700
        ${error && 'ring-2 ring-red-500 dark:ring-red-400 ring-offset-2 ring-offset-warm-gray-200 dark:ring-offset-cool-gray-700'}`}
        type="checkbox" 
        id={id} name={id}
        onBlur={onBlur}
        ref={ref}
        tabIndex="0"
      />
      <label htmlFor="privacy" className="text-sm text-gray-500 dark:text-cool-gray-400">{children}</label>
    </div>
  )
})