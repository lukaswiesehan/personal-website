import NextLink from 'next/link'

export const Link = ({href, anchor, ext}) => {
  return (
    <NextLink href={href}>
      <a className="font-bold hover:border-b-2 hover:border-teal-500" target={ext ? 'blank' : ''} rel={ext ? 'noreferrer' : ''}>{anchor}</a>
    </NextLink>
  )
}