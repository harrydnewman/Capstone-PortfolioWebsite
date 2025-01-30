import styles from '../styles/FeaturedWebpage.module.css'

export default function FeaturedWebpage({ image, title, points = [] }) {
    return (
        <div className={styles.main}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.description}>
            <h2>{title}</h2>
                {points.length > 0 && (
                    <>
                        <ul>
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}