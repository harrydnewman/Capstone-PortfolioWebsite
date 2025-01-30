/* eslint-disable react/prop-types */
import styles from '../styles/PortfolioDocumentation.module.css'
export default function ImageWithCaption({ image, alt, text }) {
    return (
        <div className={styles.imageWithCaption}>
            <img src={image} alt={alt} />
            <p><i>{text}</i></p>
        </div>
    )

}