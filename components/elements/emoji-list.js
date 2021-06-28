import {Emoji} from '@/components/elements/emoji'

export const EmojiList = ({elements}) => {
  return (
    <ul className="space-y-4">
      {elements.map(({emoji, text}, index) => (
        <li key={index} className="flex space-x-4">
          <div className="flex-shrink-0"><Emoji name={emoji} size="18"/></div>
          <p className="-mt-0.5">{text}</p>
        </li>
      ))}
    </ul>
  )
}