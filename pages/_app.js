import '../styles/globals.css'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {ThemeProvider} from 'next-themes'

export const MyApp = ({Component, pageProps}) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.body.classList.remove('nav-opened')
    })
    return () => {
      router.events.off('routeChangeStart', () => {
        document.body.classList.remove('nav-opened')
      })
    }
  })
  
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
