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
        // {
        //     title: "Velociraptor",
        //     date: "May 7th, 2024",
        //     link: "/portfolio/velociraptor",
        //     liveLink: "",
        //     iframesrc: "",
        //     image: VelociraptorImage,
        //     altText: "Velociraptor Image",
        //     skillids: ["CNC", "Digital Fabrication"],
        // },
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
        // {
        //     title: "Crossword",
        //     date: "",
        //     link: "/portfolio/crossword",
        //     liveLink: "",
        //     iframesrc: "",
        //     image: CrosswordImage,
        //     altText: "crossword image",
        //     skillids: ["CNC", "Digital Fabrication"],
        // },
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

 

            <div className={styles.Gallery}>
            {portfolioItems.map((item, index) => (
                        <PortfolioCard key={index} portfolioItem={item} />
                    ))}
            </div>
            <p className={styles.note}><i>This is a new site, portfolio items are still being added!</i></p>

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