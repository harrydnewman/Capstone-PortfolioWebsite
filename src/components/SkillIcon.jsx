import styles from '../styles/SkillIcon.module.css'

export default function SkillIcon({image, skill}){
    // come back and add like if hovering over then it does shit
    return (
        <div className={styles.skillIcon}>
            <img src={image} />
        </div>
    )
}