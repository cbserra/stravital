export type LayoutMainProps = {
  children: React.ReactNode
}

const LayoutMain = ({ children }: LayoutMainProps) => {
  return <main className='layout'>{children}</main>
}

export default LayoutMain
