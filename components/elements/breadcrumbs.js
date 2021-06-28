import {Emoji} from 'components/elements/emoji'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowRight} from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link'

export const BreadCrumbs = ({elements}) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex-shrink-0 flex">
        {elements.map(({text, emoji, href}, index) => (
          <div key={index} className="flex items-center">
            {href ? (
              <Link href={href}>
                <p className="flex items-center space-x-1 cursor-pointer">
                  <span>{text}</span>
                  {emoji && <Emoji name={emoji} size="18"/>}
                </p>
              </Link>
            ) : (
              <p className="flex items-center space-x-1">
                <span>{text}</span>
                {emoji && <Emoji name={emoji} size="18"/>}
              </p>
            )}
            {(index < elements.length - 1) && <FontAwesomeIcon icon={faLongArrowRight} className="text-teal-600 dark:text-teal-500 mx-2"/>}
          </div>
        ))}
      </div>
      <hr className="flex-grow h-0.5 bg-warm-gray-200 dark:bg-cool-gray-600 border-transparent"/>
    </div>
  )
}