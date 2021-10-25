import Image from 'next/image'
import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Heading} from '@/components/elements/heading'
import {ArrowLink} from '@/components/elements/arrow-link'
import {Link} from '@/components/elements/link'
import {Card} from '@/components/layout/card'

export const Project = () => {
  return (
    <Container title="Web-Projekt: Moin Skydive - Lukas Wiesehan">
      <Title
        breadcrumbs={[{text: 'Showcase', emoji: 'call-me-hand', href: '/showcase'}, {text: 'Scoo Brewery'}]}
        title={<h1>Web-Projekt:<br/><span className="text-teal-600 dark:text-teal-500">Scoo Brewery</span></h1>}
        text={<div className="space-y-8"><p>Unternehmens-Website einer Kombucha-Brauerei mit Shopsystem, Händler-Suche und Instagram-Anbindung.</p><ArrowLink href="https://thescoo.de/" anchor="thescoo.de" ext/></div>}
      />
      <div className="space-y-12">
        <div className="space-y-4">
          <Heading>Das Projekt</Heading>
          <p>Das Stader Startup Scoo Brewery hat sich zum Ziel gemacht, das erfrischende Tee-Getränk Kombucha lokal bekannt zu machen und dabei einen alternativen, kulturellen Lebensstil zu vermitteln. Das Design-Konzept der Marke stammt von <Link href="https://www.ninaloudesign.com" anchor="Nina Sander" ext/> und bringt neben dem einprägsamen Logo einige tolle Illustrationen mit. Nina hat auch das Design der Website erarbeitet, welches ich im Frühjahr und Sommer 2021 technisch umsetzen durfte.</p>
          <p>Besonders hervorzuheben sind hierbei eine eigens entwickelte Händler-Suche und die Einbindung eines Shop-Systems zum Online-Verkauf des Erfrischungsgetränks.</p>
        </div>
        <div className="space-y-4">
          <Heading>Technologie</Heading>
          <p>Die Website basiert im Wesentlichen auf <Link href="https://nextjs.org" anchor="Next.js" ext/> und wird statisch auf <Link href="https://vercel.com/" anchor="Vercel" ext/>-CDN (Content Delivery Network) gehostet. Das statische Hosting, für das kein Webspace oder Server nötig ist, sorgt dabei für optimale Performance und Sicherheit, während dank Next.js keine Einbußen in Funktionalität und Interaktivität gemacht werden müssen. Dynamische Daten werden über verschiedene Services bereitgestellt, die nachfolgend näher beschrieben werden. Eine solche Architektur wird auch als <Link href="https://jamstack.org" anchor="Jamstack" ext/>-Architektur bezeichnet.</p>
          <p>Das schlichte, aber technisch anspruchsvolle Design der Website wurde mithilfe von <Link href="https://tailwindcss.com" anchor="Tailwind CSS" ext/> verwirklicht.</p>
        </div>
        <div className="space-y-4">
          <Heading>Shopsystem</Heading>
          <p>Für den Verkauf des Scoo Kombucha auf der Website werden grundlegende Shop-Funktionen benötigt. Da kein ganzes Shop-Frontend benötigt wird, sondern nur eine geringe Anzahl an Produkten auf einer einzelnen Seite dargestellt werden sollen, wurde <Link href="https://www.shopify.com" anchor="Shopify" ext/> in einer Headless-Variante (also ohne Frontend) eingebunden. So können Produkte, Kunden und Bestellungen in Shopify verwaltet werden. Die Produkte inklusive der Beschreibungen, Bilder, Varianten und Preise werden über eine Schnittstelle aus Shopify abgerufen und auf der Website im individuell umgesetzten Design dargestellt. Warenkörbe werden lokal im Browser-Speicher des Nutzers gesichert, sodass hierzu keine Cookies notwendig sind. Der Bezahlvorgang wird schließlich über die Shopify-Schnittstelle initiiert und dann sicher auf Shopify-Servern durchgeführt. </p>
        </div>
        <Card className="overflow-hidden">
          <div className="mx-4 sm:mx-7 max-w-[1200px] hidden dark:flex flex-col justify-end">
            <Image src="/images/showcase/scoo-brewery/shop-dark.png" width="1200" height="500"/>
          </div>
          <div className="mx-4 sm:mx-7 max-w-[1200px] flex dark:hidden flex-col justify-end">
            <Image src="/images/showcase/scoo-brewery/shop-light.png" width="1200" height="500"/>
          </div>
        </Card>
        <div className="space-y-4">
          <Heading>Händler-Suche</Heading>
          <p>Zur Darstellung der lokalen Händler, bei denen Scoo Kombucha erworben werden kann, wurden Dienste der <Link href="https://mapsplatform.google.com" anchor="Google Maps Platform" ext/> eingebunden. Zur Anzeige der Karte wurde ein individuelles Design erarbeitet, das perfekt zum Stil der Website passt.</p>
          <p>Die Händler-Daten werden in einem Headless Content Management System (CMS), in diesem Fall <Link href="https://graphcms.com" anchor="GraphCMS" ext/>, verwaltet und automatisch mit einem Such-Index in <Link href="https://algolia.com" anchor="Algolia" ext/> synchronisiert. Mit Algolia können Such-Anfragen anhand von Koordinaten verarbeitet werden, sodass dem Nutzer die nächstgelegenen Händler anhand der gesuchten Position angezeigt werden können. Neben der Suche an aktuellen Position des Nutzers, die aus dem Browser abgefragt werden kann, wurde auch eine Adress-Suche eingebunden. Über eine Schnittstelle der Google Maps Dienste werden gesuchte Adressen in Koordinaten transformiert, bevor die Suchanfrage mit Algolia verarbeitet wird.</p>
        </div>
        <div className="space-y-4">
          <Heading>Instagram-Einbindung</Heading>
          <p>Auf Basis der offiziellen <Link href="https://developers.facebook.com/docs/instagram-basic-display-api/" anchor="Instagram Basic Display API" ext/> wurde eine Anbindung entwickelt, die sich optimal in die Jamstack-Architektur einfügt. Instagram wird hierbei wie ein Microservice eingebunden, sodass die aktuellsten Bilder beim Aufruf der Website direkt von Instagram geladen werden. Dadurch, dass an dieser Stelle kein Drittanbieter-Service verwendet wird, können die Instagram-Fotos direkt an das Website-Design angepasst werden.</p>
        </div>
        <Card className="overflow-hidden">
          <div className="mx-4 sm:mx-7 max-w-[1200px] hidden dark:flex flex-col justify-end">
            <Image src="/images/showcase/scoo-brewery/merchants-and-instagram-dark.png" width="1200" height="500"/>
          </div>
          <div className="mx-4 sm:mx-7 max-w-[1200px] flex dark:hidden flex-col justify-end">
            <Image src="/images/showcase/scoo-brewery/merchants-and-instagram-light.png" width="1200" height="500"/>
          </div>
        </Card>
        <div className="space-y-4">
          <Heading>Dein Projekt</Heading>
          <p>Du hast Fragen oder möchtest etwas ähnliches umsetzen? Schreib mir eine Email oder lass uns gern auch telefonieren.</p>
          <p><ArrowLink href="/contact" anchor="Kontakt"/></p>
        </div>
      </div>
    </Container>
  )
}

export default Project