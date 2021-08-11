import Image from 'next/image'
import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Card} from '@/components/layout/card'
import {Heading} from '@/components/elements/heading'
import {SubHeading} from '@/components/elements/subheading'
import {EmojiList} from '@/components/elements/emoji-list'
import {CardLink} from '@/components/elements/card-link'

export const Services = () => {
  return (
    <Container title="Services - Lukas Wiesehan" description="Full Service Design, Druck & Entwicklung - Ich sorge für Deinen modernen & professionellen Auftritt innerhalb und außerhalb des Internets.">
      <Title
        breadcrumbs={[{text: 'Services', emoji: 'flexed-biceps'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">Full Service</span><br/>Design, Druck & Entwicklung</h1>}
        text={
          <div className="space-y-4">
            <p>Hier erhältst Du einen kompakten Überblick darüber, wie ich Dir helfen kann.</p>
            <p>Wenn Du Dir nicht sicher bist, ob Dein Projekt was für mich ist, schreib' mir einfach eine kurze Email.</p>
          </div>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8">
        <Card className="md:col-span-2 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-1 md:col-span-2 p-7 pt-6 pb-0 space-y-4">
              <div>
                <SubHeading>Design & Entwicklung</SubHeading>
                <Heading>Website, Online-Shop & Web-App</Heading>
              </div>
              <p>Gemeinsam erarbeiten wir ein einzigartiges Design, das perfekt zur Dir oder Deinem Unternehmen passt. Durch die individuelle Entwicklung sind wir dabei nicht an irgendwelche Systeme oder Themes gebunden. Bei der Entwicklung setze ich auf neueste Technologien, um Dir und Deinen Nutzern die bestmögliche Erfahrung zu bieten - genau an Deine Bedürfnisse angepasst.</p>
            </div>
            <div className="order-3 md:order-2 mr-8 md:mr-0 max-w-[600px] hidden dark:flex flex-col justify-end">
              <Image src="/images/illustrations/web-services-dark.png" width="600" height="383"/>
            </div>
            <div className="order-3 md:order-2 mr-8 md:mr-0 max-w-[600px] flex dark:hidden flex-col justify-end">
              <Image src="/images/illustrations/web-services-light.png" width="600" height="383"/>
            </div>
            <div className="order-2 md:order-3 px-7 md:pb-7 md:pl-0 flex flex-col justify-between">
              <div className="mb-8">
                <EmojiList elements={[
                  {emoji: 'hammer-and-wrench', text: 'Abgestimmter Funktionsumfang'},
                  {emoji: 'high-voltage', text: 'Herausragende Performance'},
                  {emoji: 'mobile-phone', text: 'Optimiert für alle Endgeräte'},
                  {emoji: 'magnifying-glass-tilted-right', text: 'Suchmaschinenoptimiert'}
                ]}/>
              </div>
              <CardLink href="/contact" anchor="Lass uns loslegen"/>
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-7 pt-6 h-full flex flex-col justify-between">
            <div className="space-y-8 mb-8">
              <div>
                <SubHeading>Visual Design</SubHeading>
                <Heading>Grafik & Prints</Heading>
                <p className="mt-4">Alles, was Du an visuellen Elementen und Drucksachen für einen modernen und professionellen Auftritt brauchst.</p>
              </div>
              <EmojiList elements={[
                {emoji: 'artist-palette', text: 'Logo & Brand Guide'},
                {emoji: 'mobile-phone', text: 'Social Media Kit'},
                {emoji: 'envelope', text: 'Briefpapier & Emailsignatur'},
                {emoji: 'page-with-curl', text: 'Visitenkarten, Flyer, Plakate'},
                {emoji: 'printer', text: 'Viele weitere Druckprodukte'}
              ]}/>
            </div>
            <CardLink href="/contact" anchor="Erzähl mir mehr"/>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-4 p-7 pt-6 pb-0">
              <div>
                <SubHeading>Druck</SubHeading>
                <Heading>Druckservice</Heading>
              </div>
              <EmojiList elements={[
                {emoji: 'triangular-ruler', text: 'Ich kümmere mich um das korrekte Anlegen der Druckdaten und den Druckerei-Auftrag.'},
                {emoji: 'package', text: 'Lieferung bis vor Deine Haustür.'}
              ]}/>
            </div>
            <div className="hidden dark:flex flex-col justify-end items-end ml-8 mt-8">
              <div className="max-w-[600px] -mb-2">
                <Image src="/images/illustrations/print-services-dark.png" width="600" height="383"/>
              </div>
            </div>
            <div className="flex dark:hidden flex-col justify-end items-end ml-8 mt-8">
              <div className="max-w-[600px] -mb-2">
                <Image src="/images/illustrations/print-services-light.png" width="600" height="383"/>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default Services