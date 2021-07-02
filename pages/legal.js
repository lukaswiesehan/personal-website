import Mailto from 'react-protected-mailto'
import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Card} from '@/components/layout/card'
import {Heading} from '@/components/elements/heading'
import {EmojiList} from '@/components/elements/emoji-list'
import {CardLink} from '@/components/elements/card-link'

export const Legal = () => {
  return (
    <Container>
      <Title
        breadcrumbs={[{text: 'lukaswiesehan.de'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">Impressum</span></h1>}
        text={''}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <div className="h-full p-7 pt-6 flex flex-col justify-between">
            <div className="space-y-4 mb-2">
              <Heading>Betreiber der Website</Heading>
              <p><strong>Lukas Wiesehan</strong><br/>Design & Development</p>
              <EmojiList elements={[
                {emoji: 'house', text: <>Herrenstraße 30a<br/>21698 Harsefeld</>},
                {emoji: 'e-mail', text: <Mailto email="mail@lukaswiesehan.de" obfuscatedHref="email"/>}
              ]}/>
            </div>
          </div>
        </Card>
        <Card>
          <div className="h-full p-7 pt-6 flex flex-col justify-between">
            <div className="space-y-4 mb-2">
              <Heading>Steuerliche Angaben</Heading>
              <p><strong>Steuernummer: </strong>43/148/05020</p>
              <p><strong>Umsatzsteuer-ID: </strong>DE341117007</p>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default Legal