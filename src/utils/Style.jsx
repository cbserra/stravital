// instead use tailwindcss directive `@layer components`, for minimize css file size, we can use this method, for every component have their own object which have Tailwind utilities that will be used by each component

export const buttonStyle = {
  button:
    'flex items-cente p-2 lg:p-4 text-xs sm:text-sm md:text-base rounded-md space-x-1 shadow-md dark:shadow-none bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
}

export const logoStyle = {
  container: 'grid place-items-center max-w-md mx-auto text-center select-none',
  containerImage: 'spin w-full',
}

export const headingStyle = {
  heading:
    'text-center text-lg sm:text-xl md:text-3xl lg:text-3xl xl:text-5xl font-bold text-gray-700 dark:text-gray-100 antialiased',
  vite: 'text-purple-500',
  react: 'text-react',
  tailwind: 'text-blue-500',
}

export const appStyle = {
  container: 'grid place-items-center w-full h-screen px-2 md:px-4 lg:px-0',
  subContainer: 'max-w-2xl mt-12 mx-auto',
  buttonsContainer: 'flex items-center space-x-3 justify-center mt-14',
}
