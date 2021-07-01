import {Emoji} from '@/components/elements/emoji'

export const EmojiList = ({className, elements}) => {
  if(elements.length > 1) {
    return (
      <ul className={`space-y-4 ${className}`}>
        {elements.map(({emoji, text}, index) => (
          <li key={index} className="flex space-x-4">
            <div className="flex-shrink-0"><Emoji name={emoji} size="18"/></div>
            <p className="-mt-0.5">{text}</p>
          </li>
        ))}
      </ul>
    )
  } else {
    const {emoji, text} = elements[0]
    return (
      <div className={`flex space-x-4 ${className}`}>
        <div className="flex-shrink-0"><Emoji name={emoji} size="18"/></div>
        <p className="-mt-0.5">{text}</p>
      </div>
    )
  }
  
}