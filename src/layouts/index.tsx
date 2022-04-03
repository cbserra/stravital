import { Outlet } from 'react-router-dom'

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
