import Link from 'next/link'
import {Emoji} from '@/components/elements/emoji'

export const NavigationLink = ({href, anchor, emoji}) => {
  return (
    <Link href={href}>
      <a className="group flex items-center space-x-2 font-bold text-gray-700 dark:text-cool-gray-100">
        <span className="border-b-2 border-transparent group-hover:border-teal-600 dark:group-hover:border-teal-500">{anchor}</span>
        <span className="
          opacity-0 transform -translate-x-3 scale-95
          transition-all duration-300 
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0
        "><Emoji name={emoji} size="18"/></span>
      </a>
    </Link>
  )
}