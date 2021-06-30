import {motion, useCycle} from 'framer-motion'
import Link from 'next/link'
import {NavigationLink} from '@/components/elements/navigation-link'
import {LightSwitch} from '@/components/elements/lightswitch'

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
)

export const MobileNavigation = ({className}) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const toggleNav = () => {
    if(!isOpen) {
      document.body.classList.add('nav-opened')
    } else {
      document.body.classList.remove('nav-opened')
    }
    toggleOpen()
  }

  const bgVariants = {
    open: {opacity: 1, transition: {staggerChildren: 0.07, delayChildren: 0.2}, display: 'block'},
    closed: {opacity: 0, transition: {delay: 0.40, staggerChildren: 0.05, staggerDirection: -1}, transitionEnd: {display: 'none'}}
  }

  const childVariants = {
    open: {x: 0, opacity: 1},
    closed: {x: -24, opacity: 0, transition: {ease: 'backIn'}}
  }

  return (
    <motion.nav className={className} initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="fixed z-10 w-screen h-screen left-0 top-0 space-y-16
        pt-8 px-8 
        bg-warm-gray-300 dark:bg-cool-gray-700" 
        variants={bgVariants}
      >
        <motion.div variants={childVariants}>
          <Link href="/services">
            <div className="text-lg leading-tight cursor-pointer">
              <strong>Lukas Wiesehan</strong><br/>Design &<br/>Development
            </div>
          </Link>
        </motion.div>
        <motion.ul variants={childVariants} className="space-y-2">
          <li><NavigationLink href="/services" anchor="Services" emoji="flexed-biceps"/></li>
          <li><NavigationLink href="/showcase" anchor="Showcase" emoji="call-me-hand"/></li>
          <li><NavigationLink href="/about" anchor="Über Mich" emoji="victory-hand"/></li>
          <li><NavigationLink href="/contact" anchor="Kontakt" emoji="waving-hand"/></li>
        </motion.ul>
        <motion.div variants={childVariants}>
          <LightSwitch/>
        </motion.div>
      </motion.div>
      <button className="fixed z-20 bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center h-12 w-12 rounded-xl 
        bg-teal-600 dark:bg-teal-500 shadow dark:shadow-lg text-warm-gray-200 dark:text-cool-gray-600
        focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500 
        focus:ring-offset-2 focus:ring-offset-warm-gray-200 dark:focus:ring-offset-cool-gray-600
        active:bg-teal-700 dark:active:bg-teal-600"
        onClick={toggleNav}
      >
        <svg className="w-6 h-6 stroke-current" viewBox="0 0 22 20">
          <Path variants={{closed: {d: "M 2 2.5 L 20 2.5"}, open: {d: "M 4 16.5 L 18 2.5"}}}/>
          <Path d="M 2 9.423 L 20 9.423" variants={{closed: {opacity: 1}, open: {opacity: 0}}} transition={{duration: 0.1}}/>
          <Path variants={{closed: {d: "M 2 16.346 L 20 16.346"}, open: {d: "M 4 2.5 L 18 16.346"}}}/>
        </svg>
      </button>
    </motion.nav>
  )
}