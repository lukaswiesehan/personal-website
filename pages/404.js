import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Card} from '@/components/layout/card'
import {Heading} from '@/components/elements/heading'
import {EmojiList} from '@/components/elements/emoji-list'
import {CardLink} from '@/components/elements/card-link'

export const Error = () => {
  return (
    <Container>
      <Title
        breadcrumbs={[{text: 'Hm...'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">404</span></h1>}
        text={<p>Die gesuchte Seite existiert leider nicht. Schau' mal, ob Du unten findest, was Du suchst.</p>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8">
        <Card>
          <div className="h-full p-7 pt-6 flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <Heading>Design & Entwicklung</Heading>
              <EmojiList elements={[
                {emoji: 'flexed-biceps', text: 'Erfahre, wie ich Dir in Deinem Projekt helfen kann.'}
              ]}/>
            </div>
            <CardLink href="/services" anchor="Services"/>
          </div>
        </Card>
        <Card>
          <div className="h-full p-7 pt-6 flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <Heading>Aktuelle Projekte</Heading>
              <EmojiList elements={[
                {emoji: 'call-me-hand', text: 'Verschaffe Dir einen Eindruck von meiner Arbeit.'}
              ]}/>
            </div>
            <CardLink href="/showcase" anchor="Showcase"/>
          </div>
        </Card>
        <Card>
          <div className="h-full p-7 pt-6 flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <Heading>Was ich sonst so mache</Heading>
              <EmojiList elements={[
                {emoji: 'victory-hand', text: "Lern' mich doch erstmal ein bisschen kennen."}
              ]}/>
            </div>
            <CardLink href="/about" anchor="Über Mich"/>
          </div>
        </Card>
        <Card>
          <div className="h-full p-7 pt-6 flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <Heading><span className="text-teal-600 dark:text-teal-500">Schreib' mir!</span></Heading>
              <EmojiList elements={[
                {emoji: 'waving-hand', text: 'Lass uns über Dein Projekt oder auch einfach mal so schnacken.'}
              ]}/>
            </div>
            <CardLink href="/contact" anchor="Kontakt"/>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default Error