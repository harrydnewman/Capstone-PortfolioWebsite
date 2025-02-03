import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.HeaderDiv}>
            
                <a href='/'>Harrison Newman</a>
           
            <div className={styles.links}>
                <a href='/portfolio'>Portfolio</a>
                <a href='/blog'>Blog</a>
            </div>
        </div>
    )
}