import { appStyle as classes } from '@/utils/Style'
import Heading from '@/components/Heading'
import Logo from '@/components/Logo'
import Button from '@/components/Button'

export default function App() {
  return (
    <section className={classes.container}>
      <div className={classes.subContainer}>
        <Heading />
        <Logo />
        <div className={classes.buttonsContainer}>
          <Button hyperlink='https://vitejs.dev/'>Learn ViteJS</Button>
          <Button hyperlink='https://reactjs.org/'>Learn ReactJS</Button>
          <Button hyperlink='https://tailwindcss.com/'>Learn Tailwind CSS</Button>
        </div>
      </div>
    </section>
  )
}
