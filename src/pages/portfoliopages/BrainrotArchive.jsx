import styles from '../../styles/PortfolioDocumentation.module.css'
import TitleSection from '../../components/TitleSection'

export default function BrainrotArchive(){
    return (
        <div className={styles.main}>
            <TitleSection 
                title="The Brainrot Archive"
                name="Harrison Newman"
                date="October 23rd, 2024"
                course="Augmenting the Gallery"
                skills={["React", "Vite", "CSS Modules"]}
            />
        </div>
        
    )
}