import Mailto from 'react-protected-mailto'
import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Heading} from '@/components/elements/heading'
import {EmojiList} from '@/components/elements/emoji-list'

export const Legal = () => {
  return (
    <Container title="Impressum - Lukas Wiesehan">
      <Title
        breadcrumbs={[{text: 'lukaswiesehan.de'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">Impressum</span></h1>}
        text={''}
      />
      <div className="space-y-12">
        <div className="space-y-4">
          <Heading>Betreiber der Website</Heading>
          <p><strong>Lukas Wiesehan</strong><br/>Design & Development</p>
          <EmojiList elements={[
            {emoji: 'house', text: <>Herrenstraße 30a<br/>21698 Harsefeld</>},
            {emoji: 'e-mail', text: <Mailto email="mail@lukaswiesehan.de" obfuscatedHref="email"/>}
          ]}/>
        </div>
        <div className="space-y-4">
          <Heading>Steuerliche Angaben</Heading>
          <p><strong>Steuernummer: </strong>43/148/05020</p>
          <p><strong>Umsatzsteuer-ID: </strong>DE341117007</p>
        </div>
      </div>
    </Container>
  )
}

export default Legal