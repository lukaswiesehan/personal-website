import Link from 'next/link'
import Mailto from 'react-protected-mailto'
import {Container} from '@/components/layout/container'
import {Title} from '@/components/layout/title'
import {Heading} from '@/components/elements/heading'
import {EmojiList} from '@/components/elements/emoji-list'

export const Privacy = () => {
  return (
    <Container title="Datenschutzerklärung - Lukas Wiesehan">
      <Title
        breadcrumbs={[{text: 'lukaswiesehan.de'}]}
        title={<h1><span className="text-teal-600 dark:text-teal-500">Datenschutzerklärung</span></h1>}
        text={''}
      />
      <div className="space-y-12">
        <div className="space-y-4">
          <Heading>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-DSGVO</Heading>
          <p>Lukas Wiesehan<br/>Design & Development</p>
          <EmojiList elements={[
            {emoji: 'house', text: <>Herrenstraße 30a<br/>21698 Harsefeld</>},
            {emoji: 'e-mail', text: <Mailto email="mail@lukaswiesehan.de" obfuscatedHref="email"/>}
          ]}/>
        </div>
        <div className="space-y-4">
          <Heading>Deine Betroffenenrechte</Heading>
          <p>Mit einer kurzen Email kannst Du jederzeit von folgenden Rechten Gebrauch machen:</p>
          <ul className="list-disc ml-4">
            <li>Auskunft über Deine bei mir gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
            <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
            <li>Löschung Deiner bei mir gespeicherten Daten (Art. 17 DSGVO),</li>
            <li>Einschränkung der Datenverarbeitung, sofern ich Deine Daten aufgrund gesetzlicher Pflichten noch nicht löschen darf (Art. 18 DSGVO),</li>
            <li>Widerspruch gegen die Verarbeitung Deiner Daten (Art. 21 DSGVO) und</li>
            <li>Datenübertragung, sofern Du der Datenverarbeitung zugestimmt oder einen Vertrag mit mir abgeschlossen hast (Art. 20 DSGVO).</li>
          </ul>
          <p>Sofern Du mir eine Einwilligung erteilt hast, kannst Du diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
          <p>Du kannst Dich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z.B. an die zuständige Aufsichtsbehörde des Bundeslands Deines Wohnsitzes oder an die für mich als verantwortliche Stelle zuständige Behörde.</p>
          <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift findest Du unter: <Link href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"><a target="_blank" rel="noreferrer">https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html</a></Link>.</p>
        </div>
        <div className="space-y-4">
          <Heading>Erfassung allgemeiner Informationen beim Besuch der Website</Heading>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Art und Zweck der Verarbeitung</h3>
          <p>Wenn Du auf meine Website zugreifst, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Deines Internet-Service-Providers, Deine IP-Adresse und ähnliches.</p>
          <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
          <ul className="list-disc ml-4">
            <li>Sicherstellung eines problemlosen Verbindungsaufbaus zur Website,</li>
            <li>Sicherstellung einer reibungslosen Nutzung der Website,</li>
            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
            <li>zur Optimierung der Website.</li>
          </ul>
          <p>Ich verwenden Deine Daten nicht, um Rückschlüsse auf Deine Person zu ziehen. Informationen dieser Art werden wenn überhaupt anonymisiert statistisch ausgewertet, um meinen Internetauftritt und die dahinterstehende Technik zu optimieren.</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Rechtsgrundlage und berechtigtes Interesse</h3>
          <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis meines berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität der Website.</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Empfänger</h3>
          <p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung der Webseite als Auftragsverarbeiter tätig werden.</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Speicherdauer</h3>
          <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Bereitstellung vorgeschrieben oder erforderlich</h3>
          <p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.</p>
        </div>
        <div className="space-y-4">
          <Heading>Kontaktformular</Heading>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Art und Zweck der Verarbeitung</h3>
          <p>Die von Dir eingegebenen Daten werden zum Zweck der individuellen Kommunikation gespeichert. Hierfür ist die Angabe einer validen Email-Adresse bzw. Telefonnummer sowie Deines Namens erforderlich. Diese Daten dienen der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist nicht erforderlich.</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Rechtsgrundlage</h3>
          <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).</p>
          <p>Durch Bereitstellung des Kontaktformulars möchte ich Dir eine unkomplizierte Kontaktaufnahme ermöglichen. Deine gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>
          <p>Sofern Du Kontakt mit mir aufnimmst, um über eine mögliche Zusammenarbeit zu sprechen, erfolgt die Verarbeitung der eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Empfänger</h3>
          <p>Empfänger der Daten bin ich und ggf. Auftragsverarbeiter (technisch notwendig).</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Speicherdauer</h3>
          <p>Deine Kontaktdaten lösche ich, wenn Du mich dazu aufforderst.</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Bereitstellung vorgeschrieben oder erforderlich</h3>
          <p>Die Bereitstellung Deiner personenbezogenen Daten erfolgt freiwillig. Ich können Deine Anfrage jedoch nur bearbeiten, sofern Du mir Deinen Namen. Deine Email-Adresse oder Telefonnummer und den Grund der Anfrage mitteilst.</p>
        </div>
        <div className="space-y-4">
          <Heading>SSL-Verschlüsselung</Heading>
          <p>Um die Sicherheit Deiner Daten bei der Übertragung zu gewährleisten, werden dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren über HTTPS verwendet.</p>
        </div>
        <div className="space-y-4">
          <Heading>Information über Dein Widerspruchsrecht nach Art. 21 DSGVO</Heading>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Einzelfallbezogenes Widerspruchsrecht</h3>
          <p>Du hast das Recht, aus Gründen, die sich aus Deiner besonderen Situation ergeben, jederzeit gegen die Verarbeitung Dich betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</p>
          <p>Legst Du Widerspruch ein, werde ich Deine personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Deine Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
          <h3 className="font-bold text-gray-700 dark:text-cool-gray-100">Empfänger eines Widerspruchs</h3>
          <p>Lukas Wiesehan<br/>Design & Development</p>
          <EmojiList elements={[
            {emoji: 'house', text: <>Herrenstraße 30a<br/>21698 Harsefeld</>},
            {emoji: 'e-mail', text: <Mailto email="mail@lukaswiesehan.de" obfuscatedHref="email"/>}
          ]}/>
        </div>
        <div className="space-y-4">
          <Heading>Änderung der Datenschutzbestimmungen</Heading>
          <p>Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Deinen erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
        </div>
        <div className="space-y-4">
          <Heading>Fragen zum Datenschutz</Heading>
          <p>Wenn Du Fragen zum Datenschutz hast, schreib' mir bitte eine Email.</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-cool-gray-400">Die Datenschutzerklärung wurde mithilfe des Generators der <Link href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/"><a target="_blank" rel="noreferrer">activeMind AG</a></Link> erstellt.</p>
      </div>
    </Container>
  )
}

export default Privacy