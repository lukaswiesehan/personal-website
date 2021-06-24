import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'

export const MyApp = ({Component, pageProps}) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
