import { buttonStyle as classes } from '@/utils/Style'

export default function Button({ children, hyperlink }) {
  return (
    <a href={hyperlink} target='_blank' rel='noopener noreferrer' className={classes.button}>
      <span>{children}</span>
      <span>&rarr;</span>
    </a>
  )
}
