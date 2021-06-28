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
    <Container>
      <Title
        breadcrumbs={[{text: 'Über Mich', emoji: 'victory-hand'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">Designer & Entwickler,</span> Bastler, Ingenieur</h1>}
        text={<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>}
      />
      <div className="grid grid-cols-2 grid-rows-3 gap-8">
        <Card>
          <div className="p-7 pt-6 h-72 space-y-4">
            <div className="flex">
              <div className="space-y-4">
                <Heading><span className="text-teal-600 dark:text-teal-500">Ich bin Lukas,</span></Heading>
                <p>selbstständiger Designer und Entwickler bei Hamburg.</p>
              </div>
              <div className="flex-shrink-0"><Memoji/></div>
            </div>
            <p>Ich lebe meine Kreativität im Design aus und fordere meine technischen Fähigkeiten bei der Entwicklung. Für mich die perfekte Kombination.</p>
          </div>
        </Card>
        <Card className="row-span-2">
          <div className="p-7 pt-6 h-full flex flex-col justify-between">
            <div className="space-y-4">
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
        <Card>
          <div className="p-7 pt-6 space-y-4">
            <Heading>Hintergrund</Heading>
            <EmojiList elements={[
              {emoji: 'hammer-and-wrench', text: 'Nach dem Abi habe ich eine Ausbildung zum Verfahrensmechaniker absolviert.'},
              {emoji: 'graduation-cap', text: 'Im Februar 2021 habe ich meinen Bachelor in Mechatronik abgeschlossen.'},
              {emoji: 'laptop', text: 'Seit 2017 bin ich selbstständig als Designer & Entwickler unterwegs.'}
            ]}/>
          </div>
        </Card>
        <Card className="col-span-2 grid grid-cols-2 gap-8 overflow-hidden">
          <div className="hidden dark:flex flex-col justify-end">
            <Image src="/images/illustrations/about-work-dark.png" width="600" height="383"/>
          </div>
          <div className="flex dark:hidden flex-col justify-end">
            <Image src="/images/illustrations/about-work-light.png" width="600" height="383"/>
          </div>
          <div className="p-7 pt-6 pl-0 flex flex-col justify-between">
            <div className="space-y-4">
              <Heading>Über meine Arbeit</Heading>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque ornare proin auctor diam. Gravida nulla a, aliquet id elementum facilisi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <CardLink href="/showcase" anchor="Showcase" ext={true}/>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default About