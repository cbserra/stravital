import { headingStyle as classes } from '@/utils/Style'

export default function Heading() {
  return (
    <h1 className={classes.heading}>
      Hello
      <span className={classes.vite}> Vite</span>
      <span className={classes.react}> React</span>
      <span className={classes.tailwind}> Tailwind</span>!
    </h1>
  )
}
