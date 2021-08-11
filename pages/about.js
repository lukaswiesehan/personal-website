import Image from 'next/image'
import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Memoji} from '@/components/elements/memoji'
import {Card} from '@/components/layout/card'
import {Heading} from '@/components/elements/heading'
import {EmojiList} from '@/components/elements/emoji-list'
import {CardLink} from '@/components/elements/card-link'

export const About = () => {
  return (
    <Container title="Über Mich - Lukas Wiesehan" description="Designer & Entwickler, Bastler, Ingenieur - Erfahre ein bisschen was über meinen Hintergrund und darüber, was ich abseits des Laptops so mache.">
      <Title
        breadcrumbs={[{text: 'Über Mich', emoji: 'victory-hand'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">Designer & Entwickler,</span><br/>Bastler, Ingenieur</h1>}
        text={<p>Erfahre hier ein bisschen was über meinen Hintergrund und darüber, was ich abseits des Laptops so mache.</p>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-8">
        <Card className="order-1">
          <div className="p-7 pt-6 space-y-4">
            <div className="flex justify-between">
              <div className="space-y-4">
                <Heading><span className="text-teal-600 dark:text-teal-500">Ich bin Lukas,</span></Heading>
                <p>selbstständiger Designer und Entwickler bei Hamburg.</p>
              </div>
              <div className="flex-shrink-0 ml-4 transform transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"><Memoji/></div>
            </div>
            <p>Ich lebe meine Kreativität im Design aus und fordere meine technischen Fähigkeiten bei der Entwicklung. Für mich die perfekte Kombination.</p>
          </div>
        </Card>
        <Card className="order-3 md:order-2 md:row-span-2">
          <div className="p-7 pt-6 h-full flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <Heading>Privat</Heading>
              <EmojiList elements={[
                {emoji: 'light-bulb', text: 'Ich bastle gern an Elektronik- und 3D-Druck-Projekten.'},
                {emoji: 'cat', text: 'Olli passt auf, dass ich meine Mittagspause nicht vergesse.'},
                {emoji: 'person-running', text: 'Laufen hilft mir, den Kopf frei zu bekommen.'},
                {emoji: 'parachute', text: 'Wenn das nicht reicht, gehe ich Fallschirmspringen.'},
                {emoji: 'fire-engine', text: 'Ich engagiere mich in der Freiwilligen Feuerwehr.'},
                {emoji: 'basketball', text: 'Ich spiele zu selten Basketball.'}
              ]}/>
            </div>
            <CardLink href="https://instagram.com/lukaswiesehan" anchor="Instagram" ext={true}/>
          </div>
        </Card>
        <Card className="order-2 md:order-3">
          <div className="p-7 pt-6 space-y-4">
            <Heading>Hintergrund</Heading>
            <EmojiList elements={[
              {emoji: 'hammer-and-wrench', text: 'Nach dem Abi habe ich eine Ausbildung zum Verfahrensmechaniker absolviert.'},
              {emoji: 'graduation-cap', text: 'Im Februar 2021 habe ich meinen Bachelor in Mechatronik abgeschlossen.'},
              {emoji: 'laptop', text: 'Seit 2017 bin ich selbstständig als Designer & Entwickler unterwegs.'}
            ]}/>
          </div>
        </Card>
        <Card className="order-4 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
          <div className="order-2 md:order-1 mr-8 md:mr-0 max-w-[600px] hidden dark:flex flex-col justify-end">
            <Image src="/images/illustrations/about-work-dark.png" width="600" height="336"/>
          </div>
          <div className="order-2 md:order-1 mr-8 md:mr-0 max-w-[600px] flex dark:hidden flex-col justify-end">
            <Image src="/images/illustrations/about-work-light.png" width="600" height="336"/>
          </div>
          <div className="order-1 md:order-2 px-7 pt-6 md:pb-7 md:pl-0 flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <Heading>Über die Arbeit</Heading>
              <p>In der Abi-Zeit habe ich mit dem Gestalten von Prints begonnen. Während der Ausbildung kam das Programmieren dazu. Mit der Webentwicklung hab' ich später perfekte Kombination aus Design & Technik gefunden.</p>
            </div>
            <CardLink href="/showcase" anchor="Showcase"/>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default About