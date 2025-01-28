import styles from '../styles/PortfolioGallery.module.css'

// image imports 
import HellOnEarthImage from '../assets/images/HellOnEarth/preview.png'
import CuntyRoadsImage from '../assets/images/CuntyRoads/preview.gif'
import CrosswordImage from '../assets/images/Crossword/preview.png'
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
                    <div className={styles.imageContainer}>
                        <img src={HellOnEarthImage} alt='hell on earth image'/>
                    </div>
                    <div className={styles.projectName}>
                        <h2>Hell On Earth</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <div className={styles.imageContainer}>
                        <img src={CuntyRoadsImage} alt='cunty roads image'/>
                    </div>
                    <div className={styles.projectName}>
                        <h2>Cunty Roads</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <div className={styles.imageContainer}>
                        <img src={CrosswordImage} alt='cunty roads image'/>
                    </div>
                    <div className={styles.projectName}>
                        <h2>Crossword</h2>
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

                 {/* to do:
                 - need to add tags

                  */}
        </div>
    )
}