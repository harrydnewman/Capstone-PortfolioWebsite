import TitleSection from "../../components/TitleSection"
import styles from '../../styles/PortfolioDocumentation.module.css'

import FeaturedWebpage from "../../components/FeaturedWebpage"
import HomePageImage from '../../assets/images/ChatTech/chathomepage.gif'
import AboutPageImage from '../../assets/images/ChatTech/aboutpage.png'
import ComparePageImage from '../../assets/images/ChatTech/compare.png'
import CodeInChatImage from '../../assets/images/ChatTech/codeinchat.png'
import FutureImage from '../../assets/images/ChatTech/future.png'
import ArtifactImage from '../../assets/images/ChatTech/artifact.png'

export default function ChatTech() {
    return (
        <div className={styles.main}>
            <TitleSection
                title="The Chat"
                name="Harrison Newman & Cate Hackett"
                date="December 11th, 2024"
                course="Augmenting The Gallery"
                skills={["React"]}
            />
            <div className={styles.shorterDocumentation}>
            <h1>NEED IMAGE</h1>
            <h1>NEED BLURB</h1>
                <h2>Why We Did It</h2>
                <p>Online chatting has become a part of everyday life in the 21st century. However, chat technology has been around for much longer than most people would assume. Our website aims to help visitors understand what the broad term &quot;chat technology&quot; encapsulates, like oral speech, written, and physical expression. As well as how they have transformed over time, bringing new affordances, but also losses. We have chosen 5 distinct types of the written chat spanning throughout different time periods, allowing users to view how chat has developed over time. We begin with letters and notes, early forms of writing which formed how we are able to chat at all today. The next topic we cover is the idea of Graffiti, essentially anonymous chats left in a public forum. We view these as some of the earliest forms of chatting, and found it interesting how this form of chat often contains politically charged or explicit messages, and how this is replicated in one of the later forms we mention (online public forums). Then we move into the adoption of the internet and the modern concept of chats, which are often shared through emails, instant messaging, or text message. The next section we cover is the digital group threads (online public forums). Examples of these would be websites such as twitter or reddit. These sites are places where anyone can contribute to a conversation, anonymously if so chosen, and often host a wide variety of different communities. The last type of chat we discuss are AI chats, a quickly emerging new form of chat. ChatBots are unique, they are the only type of chat in our archive of course that involves a non-human in the conversation. We explore how ChatBots can be programmed for a variety of different chat uses like having personas, and most significantly its origins as a "servant" or "assistant" of sorts, which could also impact our perceptions of "chatting" to come. These components all work together to create a complicated understanding of how we comprehend chatting in its different forms, and also what it could mean for the future.</p>

                <h2>What We Did</h2>
                 <FeaturedWebpage image={HomePageImage} title="Home Page" paragraphs={[`When users first land on the homepage, they are greeted with an iMessage like appearance, but with no messages. Then a bubble with 3 dots appears, and "types out" a message. This continues on, explaining the content and purpose of our site. We decided to do this to try to engage users with a unique interaction right off the bat. Getting this to work was a challenge, especially because we wanted the chat bubbles to look like speech bubbles which was a nightmare to figure out how to do. In the end though we did manage it and it definitely paid off.`, `We ended up achieving it by creating multiple different components. There is a typing bubble component which takes in a duration in milliseconds as a prop, once the duration has passed the prop vanishes. Then we also have outgoing and incoming message bubbles. We placed all of these in an array and then used a for loop and a timer to make the messages slowly appear one by one. Once all the messages have appeared, there is a welcome banner that appears at the bottom of the page and prompts the user to enter the site.`]}/>
                 <FeaturedWebpage image={AboutPageImage} title="About Page" paragraphs={[`Then Users move into the about page, which gives a general overview of the information the site contains and explains how it aims to encourage thoughtful reflection and engagement.`,`Upon reaching the about page the user can browse the site at their own leisure. We liked the idea of the Home Page being kind of controlling, but thought that this would get irritating for users if they didn't have the ability to quickly browse the site once the home page animation is over.`]}/>
                 <FeaturedWebpage image={ComparePageImage} title="Compare Page" paragraphs={[`We also implemented a compare page where users can visualize how chats have changed over time based on four different categories: speed, anonymity, two-way, and personality. To do this, we used D3.js to create Scatter Plot graphs and then used our artifacts to chart out these changes. Users can tap on the different artifacts represented by emojis to open the respective artifact pages.`,`When users switch between graphs, they can observe that over time, the “allowances” the different categories give to the different artifacts really go up and down. Our intention with these graphs was to show what we think of as technological progression doesn’t always mean positive change.`]}/>
                 <FeaturedWebpage image={ArtifactImage} title="Artifacts" paragraphs={[`For our artifact pages we mainly used images and text to explain each of them, while also using hyperlinks to link between different artifacts.`]}/>
                 <FeaturedWebpage image={CodeInChatImage} title="Code in Chat" paragraphs={[`We also dedicated a page to the codes that are often found in our chats. We did this to show how largely the way chats differ not only between personalities but between different age groups as well.`]}/>
                 <FeaturedWebpage image={FutureImage} title="Future Page" paragraphs={[`The Last page we implemented covers the future of Chatting. We did this by looking at previous evolutions of chat, as well as by observing current trends such as AI, VR, and AR.`]}/>
            <h2>How We Did It</h2>
            <h3>Working Process</h3>
            <p>We ended up splitting the work pretty evenly, with Cate doing a lot of the styling and basic components, while Harry did more of the advanced CSS and JavaScript interactions. We decided against using Glitch, and opted to use VSCode and GitHub instead. We ended up finding it easier (and more fun) to work together on most of the site rather than do it on our own, so we mainly worked off of one computer. Although we didn't end up using Glitch, we still wanted our site to be on the web so we deployed it onto a digital ocean droplet so that it can be viewed publicly. The link for this can be viewed below.</p>

            <h2>Links</h2>
            <div className={styles.links}>
            <a href="https://chattech.harrydnewman.com/">Visit the Site!</a>
            <a href="https://github.com/harrydnewman/ChatTech/">View the GitHub Repository</a>
            </div>
            </div>
        </div>
    )
}