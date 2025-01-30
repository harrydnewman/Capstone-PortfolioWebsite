import styles from '../styles/FeaturedWebpage.module.css'

export default function FeaturedWebpage({ image, title, points = [], paragraphs = [] }) {
    return (
        <div className={styles.main}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.description}>
            <h2 style={{ marginLeft: points.length > 0 ? '25px' : '0px' }}>{title}</h2>
                {points.length > 0 && (
                    <>
                        <ul>
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </>
                )}
                { paragraphs.length > 0 && (
                    <>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}