import logo from '@/logo.svg'
import { logoStyle as classes } from '@/utils/Style'

export default function Logo() {
  return (
    <div className={classes.container}>
      <img src={logo} alt='React Logo' className={classes.containerImage} />
    </div>
  )
}
