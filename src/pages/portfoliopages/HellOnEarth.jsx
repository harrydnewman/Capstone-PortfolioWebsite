import TitleSection from "../../components/TitleSection"
import styles from '../../styles/PortfolioDocumentation.module.css'

import HellOnEarthImage1 from '../../assets/images/HellOnEarth/preview.png'

import HellOnEarthImage2 from '../../assets/images/HellOnEarth/bookkillerjoe.png'
import HellOnEarthImage3 from '../../assets/images/HellOnEarth/bookshooting.gif'
import HellOnEarthImage4 from '../../assets/images/HellOnEarth/computertalking.gif'
import HellOnEarthImage5 from '../../assets/images/HellOnEarth/cupponggameplay.gif'
import HellOnEarthImage6 from '../../assets/images/HellOnEarth/fratboysdancing.gif'

export default function HellOnEarth() {
    return (
        <div className={styles.main}>
            <TitleSection
                title="Hell On Earth"
                name="Harrison Newman"
                date="March 5th, 2023"
                skills={["C#", "Unity"]}
            />
            <div className={styles.shorterDocumentation}>
                <img src={HellOnEarthImage1} alt="character from game" />

                <h2>Overview</h2>
                <p>Hell On Earth is a game I made myself using Unity. It is the first project I ever made on my own using the program. Since November, I worked on teaching myself C# and Unity to create a game with my own personal touch. I created multiple mini-games with many characters and stories surrounding them, and ended up with what I felt like was a walk through hell. Or my own personal one, at least.</p>

                <h2>Image Gallery</h2>
                <img src={HellOnEarthImage2}/>
                <img src={HellOnEarthImage3}/>
                <img src={HellOnEarthImage4}/>
                <img src={HellOnEarthImage5}/>
                <img src={HellOnEarthImage6}/>
                
                <h2>Links</h2>
                <div className={styles.links}>
                    <a href="https://github.com/harrydnewman/Hell-On-Earth">Link to GitHub Repository</a>
                </div>
            </div>
        </div>
    )
}