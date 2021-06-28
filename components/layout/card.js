export const Card = ({className, children}) => {
  return (
    <div className={`
      group bg-warm-gray-200 dark:bg-cool-gray-600 rounded-3xl 
      border-2 border-warm-gray-100 dark:border-cool-gray-500
      transition-all duration-300 ease-in-out
      hover:border-teal-600 dark:hover:border-teal-500 hover:shadow dark:hover:shadow-lg
      leading-snug
      ${className}
    `}>
      {children}
    </div>
  )
}