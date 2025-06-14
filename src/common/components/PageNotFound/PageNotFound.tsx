import styles from "./PageNotFound.module.css"
import { Link } from "react-router"
import { Path } from "@/common/routing/Routing.tsx"
import Button from '@mui/material/Button'

export const PageNotFound = () => (
  <div className={styles.contain}>
    <h1 className={styles.title}>404</h1>
    <h2 className={styles.subtitle}>page not found</h2>
    <Button children={<Link to={Path.Main} className={styles.redirectBtn}>На главную</Link>}/>
  </div>
)