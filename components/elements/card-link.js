import Link from 'next/link'
import Mailto from 'react-protected-mailto'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowRight} from '@fortawesome/pro-solid-svg-icons'

export const CardLink = ({href, anchor, ext, email}) => {
  if(email) {
    return (
      <p className="flex items-center space-x-2 font-bold text-gray-700 dark:text-cool-gray-100" target={ext && 'blank'}>
        <FontAwesomeIcon icon={faLongArrowRight} className="text-teal-600 dark:text-teal-500 text-lg"/>
        <span className="
          md:opacity-0 transform md:-translate-x-3 md:scale-95
          transition-all duration-300 
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0
        ">
          <span className="border-b-2 border-transparent hover:border-teal-600 dark:hover:border-teal-500"><Mailto email={email} obfuscatedHref="email"/></span>
        </span>
      </p>
    )
  } else {
    return (
      <Link href={href}>
        <a className="flex items-center space-x-2 font-bold text-gray-700 dark:text-cool-gray-100" target={ext && 'blank'}>
          <FontAwesomeIcon icon={faLongArrowRight} className="text-teal-600 dark:text-teal-500 text-lg"/>
          <span className="
            md:opacity-0 transform md:-translate-x-3 md:scale-95
            transition-all duration-300 
            group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0
          ">
            <span className="border-b-2 border-transparent hover:border-teal-600 dark:hover:border-teal-500">{anchor}</span>
          </span>
        </a>
      </Link>
    )
  }
}