import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowRight, faSpinnerThird, faCheck, faTimes} from '@fortawesome/pro-solid-svg-icons'

export const Submit = ({loading, success, error}) => {
  return (
    <button className={`flex-shrink-0 flex justify-center items-center h-8 w-8 rounded-lg 
      ${error ? 'bg-red-500 dark:bg-red-400' : 'bg-teal-600 dark:bg-teal-500'}
      focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500 
      focus:ring-offset-2 focus:ring-offset-warm-gray-200 dark:focus:ring-offset-cool-gray-700`}
      type="submit"
      tabIndex="0"
      aria-label="Anfrage absenden"
      disabled={loading || error || success}
    >
      {loading ? <FontAwesomeIcon icon={faSpinnerThird} className="animate-spin text-warm-gray-200 dark:text-cool-gray-700 text-lg"/>
      : success ? <FontAwesomeIcon icon={faCheck} className="text-warm-gray-200 dark:text-cool-gray-700 text-lg"/>
      : error ? <FontAwesomeIcon icon={faTimes} className="text-warm-gray-200 dark:text-cool-gray-700 text-lg"/>
      : <FontAwesomeIcon icon={faLongArrowRight} className="text-warm-gray-200 dark:text-cool-gray-700 text-lg"/>}
    </button>
  )
}