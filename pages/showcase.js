import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Card} from '@/components/layout/card'
import {Heading} from '@/components/elements/heading'
import {CardLink} from '@/components/elements/card-link'
import {EmojiList} from '@/components/elements/emoji-list'

export const Showcase = () => {
  return (
    <Container>
      <Title
        breadcrumbs={[{text: 'Showcase', emoji: 'call-me-hand'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">Aktuelle Projekte</span></h1>}
        text={<p>Hier findest Du eine Auswahl meiner aktuellen Projekte und einige Details zur Umsetzung.</p>}
      />
      <Card>
        <div className="p-7 pt-6">
          <div className="space-y-4 mb-8">
            <Heading>Schau' bei Gelengenheit nochmal rein</Heading>
            <EmojiList className="md:w-3/4" elements={[
              {emoji: 'writing-hand', text: 'Ich schreibe zu jedem der Projekte einen kleinen Artikel, um die technischen Details und Hintergründe möglichst ausführlich darzustellen. Hierfür brauche ich noch ein wenig Zeit.'},
              {emoji: 'e-mail', text: 'Du kannst mich in der Zwischenzeit kontaktieren, wenn Du genaueres zu meiner Arbeit wissen möchtest.'}
            ]}/>
          </div>
          <CardLink href="/contact" anchor="Kontakt aufnehmen"/>
        </div>
      </Card>
    </Container>
  )
}

export default Showcase