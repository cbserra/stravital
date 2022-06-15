import List from '@/components/atoms/List'
import MyLink from '@/components/atoms/MyLink'

import { twclsx } from '@/utils'

const list = [
  {
    title: 'Vite Documentation',
    href: 'https://vitejs.dev'
  },
  {
    title: 'Learn React',
    href: 'https://reactjs.org'
  },
  {
    title: 'React Router V6',
    href: 'https://reactrouter.com/docs/en/v6/getting-started'
  },
  {
    title: 'React TypeScript CheatSheet',
    href: 'https://react-typescript-cheatsheet.netlify.app'
  },
  {
    title: 'Tailwind CSS Documentation',
    href: 'https://tailwindcss.com'
  }
]

const RelatedList = (): JSX.Element => {
  return (
    <ul className={twclsx('mt-2 md:mt-4 w-full', 'space-y-2 md:space-y-3')}>
      {list.map((item, idx) => (
        <List key={item.title + idx}>
          <MyLink
            href={item.href}
            as='newtab'
            className={twclsx(
              'key-visible flex items-center justify-between',
              'py-3 px-4 md:py-4 md:px-6',
              'w-full h-full transition-all duration-75 rounded border',
              'border-neutral-300 text-neutral-700 hover:border-neutral-600',
              'dark:border-transparent dark:bg-neutral-800',
              'dark:text-neutral-300 dark:hover:bg-neutral-700'
            )}
          >
            <span>{item.title}</span>

            <span className='ml-2 md:ml-4'>&rarr;</span>
          </MyLink>
        </List>
      ))}
    </ul>
  )
}

export default RelatedList
