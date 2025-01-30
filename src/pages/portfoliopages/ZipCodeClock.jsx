import styles from '../../styles/PortfolioDocumentation.module.css'
import TitleSection from '../../components/TitleSection'
export default function Zipcodeclock() {
    return (
        <div className={styles.main}>
            <TitleSection
                title="ZipCode Clock"
                name="Harrison Newman"
                date="February 23rd, 2024"
                course="Networked Media"
                skills={["JavaScript"]}
            />


            


            <div className={styles.shorterDocumentation}>
            {/* i want iframe here with zipcode clock */}
            <div className={styles.iframeContainer}>
                <iframe src="https://zipcodeclock.harrydnewman.com" title="ZipCode Clock iFrame"></iframe>
            </div>
            <h2>Overview</h2>

                <p>This is a clock I created for my Networked Media class. I used zipcodes from both the US and Mexico along with census data from both countries to collect the zipcodes and their coordinates, After this, I used leaflet, a free map api, and some javascript to connect my zipcodes to my clock.</p>

                <p>The clock works by taking the time and searching through an array containing zipcodes and coordinates, if it finds a match it displays the zipcode that matches the time. I also added in perameters so that if the time is longer than 5 digits, it searches for the last 5 digits in the zipcode. For example if the time is 12:34:21 the code will search for the zipcode 23421.</p>

                <h2>Links</h2>
                <div className={styles.links}>


                    <a href='https://zipcodeclock.harrydnewman.com/'>View the ZipCode Clock</a>
                    <a href='https://github.com/harrydnewman/ZipCode-Clock'>GitHub Repository</a>
                </div>
            </div>

        </div>
    )
}