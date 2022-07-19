import { Image } from '@/components/atoms'

import react_icon from '@/assets/react.svg'

const Home: React.FunctionComponent = () => {
  return (
    <section className='py-10 md:py-10'>
      <Image src={react_icon} alt='React' className='w-40 h-40 react animate-spin' />
      <h1>Stravital</h1>
    </section>
  )
}

export default Home
