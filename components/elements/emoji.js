import Image from 'next/image'
export const Emoji = ({name, size}) => {
  return (
    <div className="-mb-1.5 overflow-hidden">
      <Image src={`/images/emoji/${name}.png`} width={size} height={size}/>
    </div>
  )
}