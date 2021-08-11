import Image from 'next/image'
import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Heading} from '@/components/elements/heading'
import {ArrowLink} from '@/components/elements/arrow-link'
import {Link} from '@/components/elements/link'
import {Card} from '@/components/layout/card'

export const Project = () => {
  return (
    <Container>
      <Title
        breadcrumbs={[{text: 'Showcase', emoji: 'call-me-hand', href: '/showcase'}, {text: 'Moin Skydive'}]}
        title={<h1>Webdesign & Entwicklung: <span className="text-teal-600 dark:text-teal-500">Moin Skydive</span></h1>}
        text={<div className="space-y-8"><p>Marketing-Website mit Instagram-Einbindung und Buchungs- und Zahlungssystem für Tandem-Fallschirmsprünge.</p><ArrowLink href="https://moin-skydive.hamburg/" anchor="moin-skydive.hamburg" ext/></div>}
      />
      <div className="space-y-12">
        <div className="space-y-4">
          <Heading>Das Projekt</Heading>
          <p>Moin Skydive ist ein Hamburger Unternehmen, das Tandem-Fallschirmsprünge an verschiedenen Sprungplätzen in Norddeutschland anbietet. Die passende Website durfte ich im Frühjahr 2021 gestalten und umsetzen. Neben einer ansprechenden Landing Page, die bereits die wichtigsten Informationen zum Tandemsprung enthält, wurden eine Instagram-Einbindung, ein Buchungs- und Zahlungssystem, eine Anfahrtskarte und ein Kontaktformular eingebunden.</p>
        </div>
        <div className="space-y-4">
          <Heading>Technologie</Heading>
          <p>Die Website basiert im Wesentlichen auf <Link href="https://nextjs.org" anchor="Next.js" ext/> und wird statisch auf dem <Link href="https://vercel.com/" anchor="Vercel" ext/>-CDN (Content Delivery Network) gehostet. Das statische Hosting, für das kein dedizierter Webspace oder Server nötig ist, sorgt dabei für optimale Performance und Sicherheit, während dank Next.js keine Einbußen in Funktionalität und Interaktivität gemacht werden müssen. Eine solche Architektur wird auch als <Link href="https://jamstack.org" anchor="Jamstack" ext/>-Architektur bezeichnet.</p>
          <p>Das Design der Website wurde speziell für dieses Projekt erarbeitet und mithilfe von <Link href="https://tailwindcss.com" anchor="Tailwind CSS" ext/> umgesetzt.</p>
        </div>
        <Card className="overflow-hidden">
          <div className="mx-4 sm:mx-7 max-w-[1200px] hidden dark:flex flex-col justify-end">
            <Image src="/images/showcase/moin-skydive/landing-page-dark.png" width="1200" height="500"/>
          </div>
          <div className="mx-4 sm:mx-7 max-w-[1200px] flex dark:hidden flex-col justify-end">
            <Image src="/images/showcase/moin-skydive/landing-page-light.png" width="1200" height="500"/>
          </div>
        </Card>
        <div className="space-y-4">
          <Heading>Instagram-Anbindung</Heading>
          <p>Auf Basis der offiziellen Instagram-API wurde eine Anbindung entwickelt, die sich optimal in die Jamstack-Architektur einfügt. Instagram wird hierbei wie ein Microservice eingebunden, sodass die aktuellsten Bilder beim Aufruf der Website direkt von Instagram geladen werden. Dadurch, dass an dieser Stelle kein Drittanbieter-Service verwendet wird, können die Instagram-Fotos direkt an das Website-Design angepasst werden.</p>
        </div>
        <div className="space-y-4">
          <Heading>Buchungs- und Zahlungssystem</Heading>
          <p>Es wurde ein Buchungssystem entwickelt, das als Microservice in die Jamstack-Architektur eingebunden werden kann, sodass auch hierfür kein dedizierter Server bzw. keine dedizierte Datenbank notwendig ist. Das Buchungssystem basiert dabei auf <Link href="https://www.google.com/intl/de/calendar/about/" anchor="Google Calendar" ext/>, wo buchbare Slots einfach als Kalendereinträge angelegt werden können. Bei einer Buchung wird der Kalendereintrag entsprechend als belegt gekennzeichnet.</p>
          <p>Als Zahlungssystem wurde <Link href="https://stripe.com" anchor="Stripe" ext/> eingebunden. Stripe ermöglicht Zahlungen mittels SEPA-Lastschrift, Kredit-/Debitkarte, Apple Pay, Google Pay und weiterer Zahlungsmethoden. Der Zahlungsvorgang wird dabei sicher auf Stripe-Servern verarbeitet, sodass Finanz- und Zahlungsdaten geschützt sind.</p>
        </div>
        <Card className="overflow-hidden">
          <div className="mx-4 sm:mx-7 max-w-[1200px] hidden dark:flex flex-col justify-end">
            <Image src="/images/showcase/moin-skydive/features-dark.png" width="1200" height="500"/>
          </div>
          <div className="mx-4 sm:mx-7 max-w-[1200px] flex dark:hidden flex-col justify-end">
            <Image src="/images/showcase/moin-skydive/features-light.png" width="1200" height="500"/>
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