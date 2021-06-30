import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'

export const Card = ({className, children}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })

  const cardVariants = {
    inView: {y: 0, opacity: 1, scale: 1, transition: {ease: 'backIn'}},
    notInView: {y: 48, opacity: 0, scale:0.95}
  }

  return (
    <motion.div className={`group bg-warm-gray-200 dark:bg-cool-gray-600 rounded-3xl 
      border-2 border-warm-gray-100 dark:border-cool-gray-500
      transition-all duration-300 ease-in-out
      hover:border-teal-600 dark:hover:border-teal-500 hover:shadow dark:hover:shadow-lg
      leading-snug ${className}`}
      ref={ref}
      variants={cardVariants}
      initial={false}
      animate={inView ? 'inView' : 'notInView'}
    >
      {children}
    </motion.div>
  )
}