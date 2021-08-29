import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <section className='grid place-items-center w-full h-screen px-2 md:px-4 lg:px-0'>
      <div className='max-w-2xl mt-12 mx-auto'>
        <h1 className='text-center text-lg sm:text-xl md:text-3xl lg:text-3xl xl:text-5xl font-bold text-gray-700 dark:text-gray-100 antialiased'>
          Hello
          <span className='text-purple-500'> Vite</span>
          <span className='text-react'> React</span>
          <span className='text-blue-500'> Tailwind</span>!
        </h1>
        <div className='grid place-items-center max-w-md mx-auto text-center'>
          <img src={logo} alt='React Logo' className='spin w-96' />
        </div>
        <div className='flex items-center space-x-3 justify-center mt-14'>
          <a
            href='https://vitejs.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-cente p-4 rounded-md space-x-1 shadow-md dark:shadow-none bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
          >
            <span>Learn Vite</span>
            <span>&rarr;</span>
          </a>
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-cente p-4 rounded-md space-x-1  shadow-md dark:shadow-none bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
          >
            <span>Learn React</span>
            <span>&rarr;</span>
          </a>
          <a
            href='https://tailwindcss.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-cente p-4 rounded-md space-x-1  shadow-md dark:shadow-none bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
          >
            <span>Learn Tailwind</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
