import styles from '../styles/PortfolioItem.module.css'

export default function Zipcodeclock(){
    return (
        <div className={styles.MainDiv}>
            <div className={styles.Left}>
                
                {/* i want iframe here with zipcode clock */}
                <div className={styles.iframeContainer}>
                <iframe src="https://zipcodeclock.harrydnewman.com" title="ZipCode Clock iFrame"></iframe>
                </div>
                
            </div>
            <div className={styles.Right}>
                <h1 className={styles.Title}>Zip Code Clock</h1>
                <p className={styles.Description}>
                This is a zipcode clock I created for my Networked Media class. I used zipcodes from both the US and Mexico and used census data from both countries to collect the zipcodes and their coordinates, After this, I used leaflet, a free map api, and some javascript to connect my zipcodes to my clock.</p>

                <p className={styles.Description}>The clock works by taking the time and searching through an array containing zipcodes and coordinates, if it finds a match it displays the zipcode that matches the time. I also added in perameters so that if the time is longer than 5 digits, it searches for the last 5 digits in the zipcode. For example if the time is 12:34:21 the code will search for the zipcode 23421.</p>

                {/* add improvements */}
                {/* add github link */}
            </div>
            
        </div>
    )
}