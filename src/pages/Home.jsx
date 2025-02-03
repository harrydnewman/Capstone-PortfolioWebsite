import styles from '../styles/Home.module.css'
import PictureOfMe from '../assets/images/Home/me.png'
import GitHubImage from '../assets/images/Home/github.png'
import LinkedinImage from '../assets/images/Home/linkedin.webp'
import SkillIcon from '../components/SkillIcon'
import ArrowIcon from '../assets/icons/arrow.png'
import TimeLine from '../components/TimeLine'

import CatalistImage from '../assets/images/Catalist/preview.png'
import BrainrotArchiveImage from '../assets/images/BrainrotArchive/brainrot.gif'
import CuntyRoadsImage from '../assets/images/CuntyRoads/preview.gif'

import JavaScriptImage from '../assets/images/Home/javascript.png'
import ReactImage from '../assets/images/Home/react.webp'
import PythonImage from '../assets/images/Home/python.png'
import SwiftImage from '../assets/images/Home/swift.png'
import CSharpImage from '../assets/images/Home/csharp.png'
import ArduinoImage from '../assets/images/Home/arduino.png'
import JavaImage from '../assets/images/Home/java.png'
import BashImage from '../assets/images/Home/bash.png'

import PhotoshopImage from '../assets/images/Home/photoshop.png'
import IllustratorImage from '../assets/images/Home/illustrator.png'
import AEImage from '../assets/images/Home/aftereffects.png'
import premiereImage from '../assets/images/Home/premierepro.png'
import DockerImage from '../assets/images/Home/docker.png'
import UnityImage from '../assets/images/Home/unity.png'

import EnglishImage from '../assets/images/Home/english.png'
import GermanImage from '../assets/images/Home/german.png'

import NYUImage from '../assets/images/Home/nyulogo.png'
import SAMOHIImage from '../assets/images/Home/samohi.png'
// Sites I like:
// https://jonhecky.dev/
// https://www.sunnypatel.net/
export default function Home() {
    const educationHistory = [
        {
            school: "New York University",
            subschool: "Tisch School of the Arts",
            major: "Interactive Media Arts",
            degree: "B.F.A",
            startDate: "August 2021",
            endDate: "May 2025",
            city: "New York, NY",
            gpa: "3.667",
            image: NYUImage
        },
        {
            school: "Santa Monica High School",
            degree: "High School Diploma",
            startDate: "August 2017",
            endDate: "June 2021",
            city: "Santa Monica, CA",
            gpa: "4.0",
            honors: "",
            activities: ["Chinese Club"],
            image: SAMOHIImage
        }
    ];
    return (
        <div className={styles.body}>
            <div className={styles.main}>
                {/* <h1>This Website is currently under construction</h1> */}
                <div className={styles.introduction}>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            <h1>Harrison</h1>
                            <h1>Newman</h1>
                        </div>
                        <div className={styles.blurb}>
                            <h2>New York University</h2>
                            <h2>Interactive Media Arts Senior</h2>
                        </div>
                    </div>
                    <div className={styles.imageAndLinks}>
                        <div className={styles.pictureOfMe}>
                            <img src={PictureOfMe} alt='picture of me' />
                        </div>
                        <div className={styles.emailAndLinks}>
                            <div className={styles.email}>
                                <a href='mailto:harrydnewman@gmail.com'>harrydnewman@gmail.com</a>
                                <a href='https://media.harrydnewman.com/uploads/ResumePDF.pdf' target='_blank'>Resume</a>
                            </div>
                            <div className={styles.links}>
                                <a href='https://github.com/harrydnewman/' target="_blank"><img className={styles.githubImage} src={GitHubImage} alt='github link' /></a>
                                <a href='https://www.linkedin.com/in/harrisondnewman/' target="_blank"><img className={styles.linkedinimage} src={LinkedinImage} alt='linkedin link' /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* once u scroll past this, then show the top bar IMO */}
                {/* <div className={styles.featuredProjects}> */}
                {/* <h1>Featured Projects</h1> */}
                {/* do like 3 featured projects here, then a link to the rest of my portfolio */}
                {/* catalist/taskr */}
                {/* brainrot archive */}
                {/* chattech/cunty roads */}
                {/* add cute link to more projects */}

                <div className={styles.featuredProjects}>
                    <a href='/portfolio'><h1>Projects</h1></a>
                    {/* <div className={styles.featuredProjectsDiv}>
                        <div className={styles.featuredProjectDiv}>
                            <img className={styles.horizontalImage} src={CuntyRoadsImage} alt='cunty roads animal dancing'/>
                            <h3>Cunty Roads</h3>
                        </div>
                        <div className={styles.catalistFeaturedProjectDiv}>
                            <img className={styles.verticalImage} src={CatalistImage} alt='Catalist Image'/>
                            <h3>Catalist</h3>
                        </div>
                        <div className={styles.featuredProjectDiv}>
                            <img className={styles.horizontalImage} src={BrainrotArchiveImage} alt='brainrot archive home page'/>
                            <h3>Brainrot Archive</h3>
                        </div>
                        
                    </div>  */}
                    {/* <div className={styles.LinkToRestOfPortfolioDiv}>
                        <a href='/portfolio'><h2>View Portfolio</h2></a>
                    </div> */}
                </div>

                {/* </div> */}
                <div className={styles.skills}>
                    <h1>Skills</h1>
                    <h2>Programming Languages</h2>
                    <div className={styles.skillIconDiv}>
                        <div className={styles.SkillIconRow}>
                            <SkillIcon className={styles.skillsGridItem} image={JavaScriptImage} skill="JavaScript" />
                            <SkillIcon className={styles.skillsGridItem} image={ReactImage} skill="React" />
                            <SkillIcon className={styles.skillsGridItem} image={PythonImage} skill="Python" />
                            <SkillIcon className={styles.skillsGridItem} image={SwiftImage} skill="Swift" />
                            <SkillIcon className={styles.skillsGridItem} image={CSharpImage} skill="C#" />

                        </div>
                        <div className={styles.SkillIconRow}>
                            <SkillIcon className={styles.skillsGridItem} image={ArduinoImage} skill="Arduino" />
                            <SkillIcon className={styles.skillsGridItem} image={JavaImage} skill="Java" />
                            <SkillIcon className={styles.skillsGridItem} image={BashImage} skill="Bash" />
                        </div>
                    </div>

                    <h2>Software & Tools</h2>
                    <div className={styles.skillIconDiv}>
                        <div className={styles.SkillIconRow}>
                            <SkillIcon className={styles.skillsGridItem} image={PhotoshopImage} skill="Adobe Photoshop" />
                            <SkillIcon className={styles.skillsGridItem} image={IllustratorImage} skill="Adobe Illustrator" />
                            <SkillIcon className={styles.skillsGridItem} image={AEImage} skill="Adobe After Effects" />
                            <SkillIcon className={styles.skillsGridItem} image={premiereImage} skill="Adobe Premiere Pro" />
                        </div>
                        <div className={styles.SkillIconRow}>
                            <SkillIcon className={styles.skillsGridItem} image={UnityImage} skill="Unity" />
                            <SkillIcon className={styles.skillsGridItem} image={DockerImage} skill="Docker" />
                        </div>
                    </div>
                    <h2>Languages</h2>
                    <div className={styles.skillIconDiv}>
                        <div className={styles.SkillIconRow}>
                            <SkillIcon className={styles.skillsGridItem} image={EnglishImage} skill="English - Native Speaker" />
                            <SkillIcon className={styles.skillsGridItem} image={GermanImage} skill="German - C1" />
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className={styles.educationandworkexperience}>
                <h1>Education</h1>
                <div className={styles.TimeLineDiv}>
                    {educationHistory.map((item, index) => (
                        <TimeLine key={index} timelineItem={item} />
                    ))}
                </div> */}
                {/* <h1>Work Experience</h1> */}
                {/* Mind Verse Intern */}
                {/* MindVerse Employee */}
            {/* </div> */}

            {/* <h1>Education and Work Experience</h1> */}
            {/* do it how that one guy had it for his portfolio where its like a timeline */}
            {/* bruh */}
        </div>
    )
}