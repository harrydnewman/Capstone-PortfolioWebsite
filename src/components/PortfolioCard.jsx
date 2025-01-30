/* eslint-disable react/prop-types */
import styles from '../styles/PortfolioCard.module.css'
export default function PortfolioCard({ portfolioItem }) {
    return (
        <div className={styles.PortfolioCardDiv}>
            {portfolioItem.iframesrc &&
                <div className={styles.iframeContainer}>
                <iframe src={portfolioItem.iframesrc}></iframe>
                </div>
            }
            {portfolioItem.image &&
                <div className={styles.imageContainer}>
                            <img src={portfolioItem.image} alt={portfolioItem.altText} />
                        </div>
            }
            <h2>{portfolioItem.title}</h2>
        </div>
    )

}