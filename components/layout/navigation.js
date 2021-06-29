import Link from 'next/link'
import {NavigationLink} from '@/components/elements/navigation-link'
import {LightSwitch} from 'components/elements/lightswitch'

export const Navigation = () => {
  return (
      <nav className="space-y-16">
        <Link href="/services">
          <div className="text-lg leading-tight cursor-pointer">
            <strong>Lukas Wiesehan</strong><br/>Design &<br/>Development
          </div>
        </Link>
        <ul className="space-y-2">
          <li><NavigationLink href="/services" anchor="Services" emoji="flexed-biceps"/></li>
          <li><NavigationLink href="/showcase" anchor="Showcase" emoji="call-me-hand"/></li>
          <li><NavigationLink href="/about" anchor="Über Mich" emoji="victory-hand"/></li>
          <li><NavigationLink href="/contact" anchor="Kontakt" emoji="waving-hand"/></li>
        </ul>
        <LightSwitch/>
      </nav>
  )
}