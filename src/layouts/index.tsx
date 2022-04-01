import { Outlet } from 'react-router'

/* export type LayoutMainProps = {
  children?: React.ReactNode
} */

const LayoutMain = (): JSX.Element => {
  return (
    <>
      <main className='layout'>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutMain
