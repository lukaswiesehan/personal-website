import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLightbulbOn} from '@fortawesome/pro-solid-svg-icons'
import {faLightbulb} from '@fortawesome/pro-regular-svg-icons'
import {useTheme} from 'next-themes'

export const LightSwitch = () => {
  const {theme, setTheme} = useTheme()
  const toggleDarkMode = () => {
    if(theme =='dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <button onClick={toggleDarkMode} className="text-teal-600 dark:text-teal-500 text-xl">
      <FontAwesomeIcon icon={faLightbulbOn} className="dark:hidden"/>
      <FontAwesomeIcon icon={faLightbulb} className="hidden dark:block"/>
    </button>
  )
}