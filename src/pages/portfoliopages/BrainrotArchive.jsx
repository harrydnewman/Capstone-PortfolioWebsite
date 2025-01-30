import styles from '../../styles/PortfolioDocumentation.module.css'
import TitleSection from '../../components/TitleSection'
import BrainrotGif from '../../assets/images/BrainrotArchive/brainrot.gif'

export default function BrainrotArchive(){
    return (
        <div className={styles.main}>
            <TitleSection 
                title="The Brainrot Archive"
                name="Harrison Newman"
                date="October 23rd, 2024"
                course="Augmenting the Gallery"
                skills={["React", "Vite"]}
            />
            <div className={styles.singleImageContainer}>
                <img src={BrainrotGif} alt='gif of brainrot archive home page'/>
            </div>
            <div className={styles.shorterDocumentation}>

            
            <h2>Overview</h2>
            <p>The Brainrot Archive is a React application dedicated to preserving viral videos, memes, and digital artifacts often labeled "brainrot." This project is part of an ongoing effort to save these fleeting moments of internet culture before they are lost to platform changes and online evolution. The mission of the archive is to create a space where users can access and appreciate the creativity and chaos of the internet long after these videos disappear from mainstream visibility.</p>
            

            <h2>Features</h2>
            <ul>
                <li><strong>Content Preservation:</strong> Access videos that define internet culture.</li>
                <li><strong>Educational Insight:</strong> Explore trends, humor, and online creativity through brainrot videos.</li>
                <li><strong>Community Contributions:</strong> (Upcoming) User-uploaded videos to further grow the archive.</li>
            </ul>

            <h2>Technologies Used</h2>
            <ul>
            <li><strong>React:</strong> For building the user interface.</li>
            <li><strong>Vite:</strong> For fast development and bundling.</li>
            <li><strong>npm:</strong> For package management.</li>
            </ul>

            <h2>Future Plans</h2>
            <ul>
                <li>Add a user-upload feature to allow visitors to contribute to the archive</li>
                <li>Improve video metadata and categorization.</li>
                <li>Optimize the archive for better content discovery.</li>
            </ul>

            <h2>Links</h2>
            <div className={styles.links}>
            <a href='https://brainrot.harrydnewman.com/'>Visit the Brainrot Archive</a>

            <a href='https://github.com/harrydnewman/Brainrot-Archive'>View the Github Repository</a>
            </div>
            </div>
        </div>
        
    )
}