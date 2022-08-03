import styles from "./Header.module.css"
import todologo from "../assets copy/todo-logo.svg"


export function Header(){
    return(
        <header className={styles.header}>
            <img src={todologo} alt="Logotipo da todo" />
        </header>
    )
}