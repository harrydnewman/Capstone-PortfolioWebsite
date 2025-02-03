import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.FooterDiv}>
            <div className={styles.siteTitle}>
                <a href='/'>Harrison Newman</a>
                
            </div>
            <a href='/login'>Login</a>
            <div className={styles.links}>
                <a href='/portfolio'>Portfolio</a>
                <a href='/blog'>Blog</a>
            </div>
        </div>
    )
}