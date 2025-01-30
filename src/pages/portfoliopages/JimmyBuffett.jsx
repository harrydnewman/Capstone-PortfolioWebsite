import TitleSection from "../../components/TitleSection"
import styles from '../../styles/PortfolioDocumentation.module.css'
import FeaturedWebpage from "../../components/FeaturedWebpage"
import AccountPageImage from '../../assets/images/JimmyBuffett/accountpage.png'
import RecipePageImage from '../../assets/images/JimmyBuffett/recipepage.png'
import MargaritavillePageImage from '../../assets/images/JimmyBuffett/margaritavillepage.png'

import SitemapImage from '../../assets/images/JimmyBuffett/sitemap.png'

export default function JimmyBuffett() {
    return (
        <div className={styles.main}>
            <TitleSection
                title="An Ode To Jimmy Buffett"
                name="Harrison Newman & Keels Braga"
                date="May 8th, 2023"
                course="Communications Lab"
                skills={["EJS", "JavaScript"]}
            />
            <div className={styles.shorterDocumentation}>
            <h1>NEED IMAGE HERE</h1>
                <h2>Our Idea</h2>
                <p>For our Networked Media final project, my classmate, Keels Braga, and I decided to make a website dedicated to the late Jimmy Buffett</p>
                <p>We combined our appreciation for classic Americana and the laid-back lifestyle Buffett often sang about with our technical skills to build a comprehensive website that showcases the many aspects of his life.</p>

                <h2>Featured Pages</h2>
                <FeaturedWebpage image={AccountPageImage} title="Account Page" points={["If user is under 21, it will tell them how long until they can go to Margaritaville for the first time", "User Can add and save recipes"]}/>
                <FeaturedWebpage image={MargaritavillePageImage} title="Margaritaville Page" points={["Users can see a list of all Margaritaville locations across the globe with an interactive map.","By pressing on a specific city you can see exactly where the closest Margaritaville is located."]}/>
                {/* <FeaturedWebpage image={RecipePageImage} title="Recipe Page" points={["If user is under 21, it will blur the recipes", "Users Can add and save recipes"]}/> */}

                <h2>Sitemap</h2>
                <img src={SitemapImage} alt="image of sitemap"/>

                <h2>Lessons Learned</h2>

                <p>This was my first ever big web project I took on. Although it was silly and has a lot of bugs, I think I really learned a lot from this experience</p>

                <h2>Challenges Overcome</h2>
                <p>The biggest technical challenge for us involved passing the user's birthday from signup to the recipe page and conditionally blurring recipes for users under 21 using inline EJS scripting.</p>
            </div>
        </div>
    )
}