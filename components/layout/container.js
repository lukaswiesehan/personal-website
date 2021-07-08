import Head from 'next/head'
import {useRouter} from 'next/router'
import {Navigation} from '@/components/layout/navigation'
import {MobileNavigation} from '@/components/layout/mobile-navigation'
import {Footer} from '@/components/layout/footer'

export const Container = ({children, ...customMeta}) => {
  const router = useRouter()
  const meta = {
    title: 'Lukas Wiesehan - Designer & Entwickler',
    description: 'Ich sorge für Deinen modernen & professionellen Auftritt innerhalb und außerhalb des Internets.',
    url: 'https://lukaswiesehan.de',
    name: 'Lukas Wiesehan',
    image: 'https://lukaswiesehan.de/images/banner.jpg',
    type: 'website',
    ...customMeta
  }
  const jsonLd = {
    '@context': "http://www.schema.org",
    '@type': 'WebSite',
    'name': meta.name,
    'url': meta.url
  }

  return (
    <div className="w-full max-w-screen-lg px-4 lg:px-0 mt-8 lg:mt-32 lg:mx-auto lg:flex lg:justify-between">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index"/>
        <meta content={meta.description} name="description"/>
        <meta property="og:url" content={`${meta.url}${router.asPath}`}/>
        <link rel="canonical" href={`${meta.url}${router.asPath}`}/>
        <meta property="og:type" content={meta.type}/>
        <meta property="og:site_name" content={meta.name}/>
        <meta property="og:description" content={meta.description}/>
        <meta property="og:title" content={meta.title}/>
        <meta property="og:image" content={meta.image}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={meta.title}/>
        <meta name="twitter:description" content={meta.description}/>
        <meta name="twitter:image" content={meta.image}/>
        <link rel="icon" href="/favicon.ico"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
      </Head>
      <Navigation className="hidden lg:block lg:ml-8 xl:ml-0"/>
      <MobileNavigation className="lg:hidden"/>
      <div className="w-full mx-auto max-w-screen-md">
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}