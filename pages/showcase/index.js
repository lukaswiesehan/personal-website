import Image from 'next/image'
import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Card} from '@/components/layout/card'
import {SubHeading} from '@/components/elements/subheading'
import {Heading} from '@/components/elements/heading'
import {CardLink} from '@/components/elements/card-link'

export const Showcase = () => {
  return (
    <Container title="Showcase - Lukas Wiesehan" description="Eine Auswahl meiner aktuellen Projekte & Details zur jeweiligen Umsetzung.">
      <Title
        breadcrumbs={[{text: 'Showcase', emoji: 'call-me-hand'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">Aktuelle Projekte</span></h1>}
        text={<p>Hier findest Du eine Auswahl meiner aktuellen Projekte und einige Details zur Umsetzung.</p>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
          <div className="md:order-2 px-7 pt-6 md:pl-0 md:pb-7 flex flex-col justify-end">
            <div className="space-y-4 mb-8">
              <div>
                <SubHeading>Website</SubHeading>
                <Heading>Scoo Brewery</Heading>
              </div>
              <p>Unternehmens-Website einer Kombucha-Brauerei mit Shopsystem, Händler-Suche und Instagram-Anbindung.</p>
            </div>
            <CardLink href="/showcase/scoo-brewery" anchor="Mehr erfahren"/>
          </div>
          <div className="md:order-1 mx-7 md:mt-7 md:mr-0 max-w-[600px] hidden dark:flex flex-col justify-end">
            <Image src="/images/showcase/scoo-brewery-dark.png" width="600" height="445"/>
          </div>
          <div className="md:order-1 mx-7 md:mt-7 md:mr-0 max-w-[600px] flex dark:hidden flex-col justify-end">
            <Image src="/images/showcase/scoo-brewery-light.png" width="600" height="445"/>
          </div>
        </Card>
        <Card className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
          <div className="px-7 pt-6 md:pr-0 md:pb-7 flex flex-col justify-end">
            <div className="space-y-4 mb-8">
              <div>
                <SubHeading>Website</SubHeading>
                <Heading>Moin Skydive</Heading>
              </div>
              <p>Marketing-Website mit Instagram-Einbindung und Buchungs- und Zahlungssystem für Tandem-Fallschirmsprünge.</p>
            </div>
            <CardLink href="/showcase/moin-skydive" anchor="Mehr erfahren"/>
          </div>
          <div className="mx-7 md:mt-7 md:ml-0 max-w-[600px] hidden dark:flex flex-col justify-end">
            <Image src="/images/showcase/moin-skydive-dark.png" width="600" height="445"/>
          </div>
          <div className="mx-7 md:mt-7 md:ml-0 max-w-[600px] flex dark:hidden flex-col justify-end">
            <Image src="/images/showcase/moin-skydive-light.png" width="600" height="445"/>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default Showcase