import styles from '../styles/PortfolioGallery.module.css'
import PortfolioCard from '../components/PortfolioCard'

// image imports 
import HellOnEarthImage from '../assets/images/HellOnEarth/preview.png'
import CatalistImage from '../assets/images/Catalist/preview.png'
import CuntyRoadsImage from '../assets/images/CuntyRoads/preview.gif'
import CrosswordImage from '../assets/images/Crossword/preview.png'
import BrainrotArchiveImage from '../assets/images/BrainrotArchive/brainrot.gif'
import TruthOrDareImage from '../assets/images/TruthorDare/preview.png'
import JimmyBuffettImage from '../assets/images/JimmyBuffett/preview.png'
import ChatTechImage from '../assets/images/ChatTech/chathomepage.gif'
import VelociraptorImage from '../assets/images/Velociraptor/preview.png'
export default function Gallery() {
    const portfolioItems = [
        {
            title: "ZipCode Clock",
            date: "February 23rd, 2024",
            link: "/portfolio/zipcodeclock",
            liveLink: "https://zipcodeclock.harrydnewman.com",
            iframesrc: "https://zipcodeclock.harrydnewman.com",
            image: "",
            altText: "",
            skillids: ["JavaScript"],
        },
        {
            title: "ChatTech",
            date: "December 11th, 2024",
            link: "/portfolio/chattech",
            liveLink: "",
            iframesrc: "",
            image: ChatTechImage,
            altText: "chat technology image",
            skillids: ["React"],
        },
        
        {
            title: "Hell On Earth",
            date: "March 5th, 2023",
            link: "/portfolio/hellonearth",
            liveLink: "",
            iframesrc: "",
            image: HellOnEarthImage,
            altText: "hell on earth image",
            skillids: ["Unity", "C#"],
        },
        {
            title: "Brainrot Archive",
            date: "October 23rd, 2024",
            link: "/portfolio/brainrotarchive",
            liveLink: "https://brainrot.harrydnewman.com",
            iframesrc: "",
            image: BrainrotArchiveImage,
            altText: "brainrot archive image",
            skillids: ["React"],
        },
        {
            title: "Velociraptor",
            date: "May 7th, 2024",
            link: "/portfolio/velociraptor",
            liveLink: "",
            iframesrc: "",
            image: VelociraptorImage,
            altText: "Velociraptor Image",
            skillids: ["CNC", "Digital Fabrication"],
        },
        {
            title: "Truth or Dare",
            date: "May 8th, 2023",
            link: "/portfolio/truthordare",
            liveLink: "",
            iframesrc: "",
            image: TruthOrDareImage,
            altText: "truth or dare image",
            skillids: ["Premiere Pro"],
        },
        {
            title: "Cunty Roads",
            date: "May 4th, 2024",
            link: "/portfolio/cuntyroads",
            liveLink: "",
            iframesrc: "",
            image: CuntyRoadsImage,
            altText: "cunty roads image",
            skillids: ["Touch Designer", 'Arduino', 'Physical Computing', "Ableton"],
        },
        {
            title: "Catalist",
            date: "April 30th, 2024",
            link: "/portfolio/catalist",
            liveLink: "",
            iframesrc: "",
            image: CatalistImage,
            altText: "catalist image",
            skillids: ["Figma", "UX Design"],
        },
        {
            title: "Crossword",
            date: "",
            link: "/portfolio/crossword",
            liveLink: "",
            iframesrc: "",
            image: CrosswordImage,
            altText: "crossword image",
            skillids: ["CNC", "Digital Fabrication"],
        },
        {
            title: "An Ode To Jimmy Buffett",
            date: "",
            link: "/portfolio/jimmybuffett",
            liveLink: "https://jimmybuffett.harrydnewman.com",
            iframesrc: "",
            image: JimmyBuffettImage,
            altText: "an ode to jimmy buffett image",
            skillids: ["EJS"],
        },
    ];    
    return (
        <div className={styles.main}>
            {/* <h1>Gallery</h1> */}
            <div className={styles.portfolioHeader}>
                <h1>Portfolio</h1>
            </div>

            {/* <div className={styles.Gallery}>
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/zipcodeclock'>
                        <div className={styles.iframeContainer}>
                            <iframe src="https://zipcodeclock.harrydnewman.com"></iframe>
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>ZipCode Clock</h2>
                    </div>
                </div>
                
                
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/chattech'>
                        <div className={styles.imageContainer}>
                            <img src={ChatTechImage} alt='chat technology image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                    <h2>ChatTech</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/brainrotarchive'>
                        <div className={styles.imageContainer}>
                            <img src={BrainrotArchiveImage} alt='brainrotarchive image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>Brainrot Archive</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/hellonearth'>
                        <div className={styles.imageContainer}>
                            <img src={HellOnEarthImage} alt='hell on earth image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>Hell On Earth</h2>
                    </div>
                </div>
                
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/velociraptor'>
                        <div className={styles.imageContainer}>
                            <img src={VelociraptorImage} alt='Velociraptor Image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>Velociraptor</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/truthordare'>
                        <div className={styles.imageContainer}>
                            <img src={TruthOrDareImage} alt='truthordare Image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>Truth or Dare</h2>
                    </div>
                </div>
                
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/cuntyroads'>
                        <div className={styles.imageContainer}>
                            <img src={CuntyRoadsImage} alt='cunty roads image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>Cunty Roads</h2>
                    </div>
                </div>
               
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/catalist'>
                        <div className={styles.imageContainer}>
                            <img src={CatalistImage} alt='catalist image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>Catalist</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/crossword'>
                        <div className={styles.imageContainer}>
                            <img src={CrosswordImage} alt='cunty roads image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>Crossword</h2>
                    </div>
                </div>
                <div className={styles.portfolioItem}>
                    <a href='/portfolio/jimmybuffett'>
                        <div className={styles.imageContainer}>
                            <img src={JimmyBuffettImage} alt='an ode to jimmybuffett image' />
                        </div>
                    </a>
                    <div className={styles.projectName}>
                        <h2>An Ode To Jimmy Buffett</h2>
                    </div>
                </div>
               
                

            </div> */}

            <div className={styles.Gallery}>
            {portfolioItems.map((item, index) => (
                        <PortfolioCard key={index} portfolioItem={item} />
                    ))}
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