import { Link, useLocation } from 'react-router-dom'
import styles from './menulink.module.css'

export default function MenuLink({ children, to }) {
  const localizacao = useLocation()

  return(
    <Link
    className={
   `${styles.link}
   ${localizacao.pathname === to ? styles.linkDestacado : ""}`} to={to}>
       {children}
    </Link>
  )
}