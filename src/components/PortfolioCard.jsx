/* eslint-disable react/prop-types */
import styles from '../styles/PortfolioCard.module.css';
import { useState } from 'react';

export default function PortfolioCard({ portfolioItem }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`${styles.PortfolioCardDiv} ${hovered ? styles.expanded : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {portfolioItem.iframesrc && portfolioItem.link && (
                <a href={portfolioItem.link} >
                <div className={styles.iframeContainer}>
                    <iframe src={portfolioItem.iframesrc}></iframe>
                </div>
                </a>
            )}
            {portfolioItem.image && portfolioItem.link && (
                <a href={portfolioItem.link} >
                <div className={styles.imageContainer}>
                    <img src={portfolioItem.image} alt={portfolioItem.altText} />
                </div>
                </a>
            )}
            <h2>{portfolioItem.title}</h2>
            <div className={styles.linkContainer}>
                {portfolioItem.date && (
                    <h3 className={styles.link}>{portfolioItem.date}</h3>
                )}
                {portfolioItem.liveLink && (
                    <a href={portfolioItem.liveLink} target='_blank'>
                    <div className={styles.linkButton}>
                        <p>View Live</p>
                    </div>
                    </a>
                )}
                

            </div>
        </div>
    );
}
