import styles from "../styles/TitleSection.module.css";

export default function TitleSection({ title, name, date, course = "", skills = [] }) {
    return (
        <div className={styles.title}>
            <h1>{title}</h1>
            <h2>
                {name} | {date} {course ? `| ${course}` : ""}
            </h2>
            {skills.length > 0 && (
                <p><strong>Skills:</strong> {skills.join(", ")}</p>
            )}
        </div>
    );
}
