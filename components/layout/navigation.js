import Link from 'next/link'
import {LightSwitch} from 'components/elements/lightswitch'

export const Navigation = () => {
  return (
      <nav className="space-y-16">
        <Link href="/">
          <div className="text-lg leading-tight cursor-pointer">
            <strong>Lukas Wiesehan</strong><br/>Design &<br/>Development
          </div>
        </Link>

        <ul className="font-bold text-gray-700 dark:text-cool-gray-100 space-y-2">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/showcase">Showcase</Link></li>
          <li><Link href="/about">Über Mich</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
        </ul>

        <LightSwitch/>

      </nav>
    
  )
}