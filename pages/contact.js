import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Card} from '@/components/layout/card'
import {Heading} from '@/components/elements/heading'
import {EmojiList} from '@/components/elements/emoji-list'
import {CardLink} from '@/components/elements/card-link'
import {ContactForm} from '@/components/elements/contact-form' 

export const Contact = () => {
  return (
    <Container>
      <Title
        breadcrumbs={[{text: 'Kontakt', emoji: 'waving-hand'}]}
        title={<h1>Lass uns über<br/><span className="text-teal-600 dark:text-teal-500">Dein Projekt</span><br/>sprechen</h1>}
        text={<div className="space-y-4">
          <p>Schreib' mir oder lass mich Dich zurückrufen, damit wir über Dein Projekt schnacken können.</p>
          <p>Ich bin gespannt, wie ich mich einbringen und Dein Projekt auf das nächste Level bringen kann!</p>
        </div>}
      />
      <div className="grid grid-cols-2 gap-8">
        <Card>
          <div className="p-7 pt-6 h-full flex flex-col justify-between">
            <div className="space-y-4 mb-4">
              <Heading>Schreib' mir eine Email.</Heading>
              <EmojiList elements={[
                {emoji: 'e-mail', text: 'Schreib’ mir über Dein Projekt und lass uns gemeinsam sehen, wie ich Dich unterstützen kann.'}
              ]}/>
            </div>
            <CardLink email="mail@lukaswiesehan.de"/>
          </div>
        </Card>
        <Card>
          <div className="p-7 pt-6 h-full flex flex-col justify-between">
            <div className="space-y-4 mb-4">
              <Heading>Lieber schnacken?</Heading>
              <EmojiList elements={[
                {emoji: 'telephone', text: 'Trag’ hier Deinen Namen und Deine Telefonnummer ein - ich rufe Dich an.'}
              ]}/>
            </div>
            <ContactForm/>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default Contact