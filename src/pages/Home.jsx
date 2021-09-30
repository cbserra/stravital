export default function Home() {
  let paraStyle = 'text-sm sm:text-base lg:text-lg xl:text-xl my-2 sm:my-4 text-gray-800 dark:text-gray-300'
  return (
    <section className='-mt-14 sm:-mt-20 lg:-mt-28'>
      <h1 className='relative text-center text-4xl lg:text-6xl xl:text-9xl font-semibold after:absolute after:bottom-0 after:left-0 after:block after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-pink-500 after:animate-ping text-blue-500 dark:text-pink-500'>
        StRaViTal
      </h1>
      <div className='max-w-prose'>
        <p className={paraStyle}>StRaViTal stands for Starter React Vite Tailwind</p>
        <p className={paraStyle}>
          Sometimes you got too lazy to getting started again from scratch with React and Tailwind, fear not, I have created
          a minimalist starter template for your next React Application.
        </p>
        <p className={paraStyle}>
          The React app was installed with Vite <code>CLI</code> instead of <code>create-react-app</code>.
        </p>
      </div>
    </section>
  )
}
