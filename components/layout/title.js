import {BreadCrumbs} from 'components/elements/breadcrumbs'

export const Title = ({breadcrumbs, title, text}) => {
  return (
    <div className="mb-12 md:mb-24">
      <BreadCrumbs elements={breadcrumbs}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-gray-700 dark:text-cool-gray-100 font-bold text-3xl">{title}</div>
        {text && <div>{text}</div>}
      </div>
    </div>
  )
}