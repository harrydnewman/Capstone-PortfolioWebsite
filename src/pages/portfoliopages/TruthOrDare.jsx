import TitleSection from "../../components/TitleSection"
import styles from '../../styles/PortfolioDocumentation.module.css'
import TreeImage from '../../assets/images/TruthorDare/tree.jpg'
 
export default function TruthOrDare() {
    return (
        <div className={styles.main}>
            <TitleSection
                title="Truth or Dare"
                name="Harrison Newman & Kimi Modiri"
                date="May 8th, 2023"
                course="Communications Lab"
                skills={["Adobe Premiere Pro"]}
            />

            <div className={styles.shorterDocumentation}>
                <div className={styles.youtubeiFrame}>
                <iframe width="853" height="480" src="https://www.youtube.com/embed/IeGHQ3qFfN4" title="Truth or Dare - An Interactive Experience" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <h2>Overview</h2>
                <p>This is an interactive truth or dare game created by me and my classmate Kimi for a final in our Communications Lab class. This project features 8 different endings which the user can end up getting based on their decisions throughout the game.</p>

                <h2>Approach</h2>
                <p>We began with coming up with truths and dares which we wanted our characters to play out, and then created a tree for us to keep ourselves organized.</p>
                <img src={TreeImage} alt="tree of different endings"/>
                <p>After that, we wrote a script and found actors</p>

                <h2>Outcomes</h2>
                <p>Kimi and I were relatively happy with the outcome of this project. There were some positioning mistakes, as we shot some things out of order, but other than that we had few problems with our final cut. This was the first time either of us had attempted to do something like this, and we were happy with the final result.</p>
                <p>We originally made this game playable in Unity but have since adapted it to be played on YouTube to improve accessibility.</p>
                <h2>Links</h2>
                <div className={styles.links}>
                <a href="https://www.youtube.com/watch?v=2bAYAhXFYeY">Watch on YouTube</a>
                </div>
            </div>
        </div>
    )
}