import styles from '../styles/Button.module.css'

export default function Button( {clickFunction, text} ){
    return (
        <button className={styles.button} onClick={clickFunction}><h5>{text}</h5></button>
    )
}