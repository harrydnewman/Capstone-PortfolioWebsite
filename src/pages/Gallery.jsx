import styles from '../styles/PortfolioGallery.module.css'

export default function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>

            <div className={styles.Gallery}>
                <div className={styles.portfolioItem}>
                    <div className={styles.iframeContainer}>
                        <iframe src="https://zipcodeclock.harrydnewman.com" title="ZipCode Clock iFrame"></iframe>
                    </div>
                    <div className={styles.projectName}>
                        <h2>ZipCode Clock</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <div className={styles.iframeContainer}>
                        <iframe src="https://zipcodeclock.harrydnewman.com" title="ZipCode Clock iFrame"></iframe>
                    </div>
                    <div className={styles.projectName}>
                        <h2>ZipCode Clock</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <div className={styles.iframeContainer}>
                        <iframe src="https://zipcodeclock.harrydnewman.com" title="ZipCode Clock iFrame"></iframe>
                    </div>
                    <div className={styles.projectName}>
                        <h2>ZipCode Clock</h2>
                    </div>
                </div>
            </div>

            {/* items:
                - zipcode clock (code)
                - chattech (code + museums??)
                - brainrot archive (code)
                - catalist (ux)
                - hell on earth (code + game design)
                - velociraptor (physical/cnc)
                - truth or dare (storytelling)
                - cunty roads (p comp)
                - german population thing (graphing)
                - other shit
                 */}
        </div>
    )
}