import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className="mt-24 mb-16 text-sm text-gray-500 dark:text-cool-gray-400">
      <div className="flex items-center space-x-4 mb-4">
        <p className="flex-shrink-0">&copy; Lukas Wiesehan 2021</p>
        <hr className="flex-grow h-0.5 bg-warm-gray-200 dark:bg-cool-gray-600 border-transparent"/>
      </div>
      <div className="flex justify-between">
        <ul className="flex space-x-4">
          <li><Link href="/legal">Impressum</Link></li>
          <li><Link href="/privacy">Datenschutz</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
        </ul>
        <ul className="flex space-x-4">
          <li><Link href="/"><a target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></Link></li>
          <li><Link href="/"><a target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a></Link></li>
          <li><Link href="/"><a target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a></Link></li>
        </ul>
      </div>
    </footer>
  )
}