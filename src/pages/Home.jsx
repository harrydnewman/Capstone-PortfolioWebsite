import styles from '../styles/Home.module.css'
import PictureOfMe from '../assets/images/Home/me.png'
import GitHubImage from '../assets/images/Home/github.png'
import LinkedinImage from '../assets/images/Home/linkedin.webp'

// Sites I like:
// https://jonhecky.dev/
// https://www.sunnypatel.net/
export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.introduction}>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <h1>Harry</h1>
                        <h1>Newman</h1>
                    </div>
                    <div className={styles.blurb}>
                        <h2>NYU Interactive Media Arts Senior</h2>
                    </div>
                </div>
                <div className={styles.imageAndLinks}>
                    <div className={styles.pictureOfMe}>
                        <img src={PictureOfMe} alt='picture of me' />
                    </div>
                    <div className={styles.emailAndLinks}>
                    <div className={styles.email}>
                    <a href='mailto:harrydnewman@gmail.com'>harrydnewman@gmail.com</a>
                    <a href='/resume'>Resume</a>
                    </div>
                    <div className={styles.links}>
                        <a href='https://github.com/harrydnewman/' target="_blank"><img className={styles.githubImage} src={GitHubImage} alt='github link'/></a>
                        <a href='https://www.linkedin.com/in/harrisondnewman/' target="_blank"><img className={styles.linkedinimage} src={LinkedinImage} alt='linkedin link'/></a>
                    </div>
                       
                    </div>
                    {/* add links and email here */}
                </div>
            </div>

            <h1>NEED SOME SORT OF INTRODUCTION</h1>

            {/* https://jonhecky.dev/ I like how he does his introduction and I like his links and stuff */}
            {/* <h1>Links</h1>
            <ul>
                <li>github</li>
                <li>linkedin</li>
                <li>instagram</li>
            </ul>

            <h1>Featured Projects</h1> */}

            {/* do like 3 featured projects here, then a link to the rest of my portfolio */}
            {/* catalist/taskr */}
            {/* brainrot archive */}
            {/* chattech/cunty roads */}

            {/* <h1>Skills</h1>
            <h2>Programming Languages</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Swift</li>
                <li>C#</li>
                <li>Arduino</li>
                <li>Java</li>
                <li>Bash</li>
            </ul> */}
            {/* might change the below */}
            {/* <h2>Software & Tools</h2>
            <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>After Effects</li>
                <li>Premiere Pro</li>
                <li>Unity</li>
                <li>Docker</li>
            </ul>
            <h2>Languages</h2>
            <ul>
                <li>English (Native)</li>
                <li>German (C1)</li>
            </ul> */}

            {/* <h1>Education and Work Experience</h1> */}
            {/* do it how that one guy had it for his portfolio where its like a timeline */}
        </div>

    )
}