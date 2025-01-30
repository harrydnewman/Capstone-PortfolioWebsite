import TitleSection from "../../components/TitleSection"
import styles from '../../styles/PortfolioDocumentation.module.css'

export default function ChatTech() {
    return (
        <div>
            <TitleSection
                title="ChatTech"
                name="Harrison Newman & Cate Hackett"
                date="December 11th, 2024"
                course="Augmenting The Gallery"
                skills={["React"]}
            />
        </div>
    )
}