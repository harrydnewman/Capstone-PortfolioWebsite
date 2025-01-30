import TitleSection from "../../components/TitleSection"
import styles from '../../styles/PortfolioDocumentation.module.css'

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
                <h2>Why We Did It</h2>
                <p>Online chatting has become a part of everyday life in the 21st century. However, chat technology has been around for much longer than most people would assume. Our website aims to help visitors understand what the broad term "chat technology" encapsulates, like oral speech, written, and physical expression. As well as how they have transformed over time, bringing new affordances, but also losses. We have chosen 5 distinct types of the written chat spanning throughout different time periods, allowing users to view how chat has developed over time. We begin with letters and notes, early forms of writing which formed how we are able to chat at all today. The next topic we cover is the idea of Graffiti, essentially anonymous chats left in a public forum. We view these as some of the earliest forms of chatting, and found it interesting how this form of chat often contains politically charged or explicit messages, and how this is replicated in one of the later forms we mention (online public forums). Then we move into the adoption of the internet and the modern concept of chats, which are often shared through emails, instant messaging, or text message. The next section we cover is the digital group threads (online public forums). Examples of these would be websites such as twitter or reddit. These sites are places where anyone can contribute to a conversation, anonymously if so chosen, and often host a wide variety of different communities. The last type of chat we discuss are AI chats, a quickly emerging new form of chat. ChatBots are unique, they are the only type of chat in our archive of course that involves a non-human in the conversation. We explore how ChatBots can be programmed for a variety of different chat uses like having personas, and most significantly its origins as a "servant" or "assistant" of sorts, which could also impact our perceptions of "chatting" to come. These components all work together to create a complicated understanding of how we comprehend chatting in its different forms, and also what it could mean for the future.</p>
            </div>
        </div>
    )
}