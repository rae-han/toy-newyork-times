import Link from "next/link";
import styles from './index.module.scss'

const Header = () => {
  return <nav className={styles.Nav}>
    <Link href={`/`}>Home</Link>
    <Link href={`/about`}>About</Link>
  </nav>
}

export default Header;