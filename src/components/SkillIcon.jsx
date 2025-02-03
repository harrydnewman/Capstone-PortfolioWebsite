import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function SkillIcon({ image, skill }) {
    const textRef = useRef(null);
    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {
        if (textRef.current) {
            setTextWidth(textRef.current.offsetWidth);
        }
    }, []);

    return (
        <div className={styles.skillIcon} style={{ "--text-width": `${textWidth}px` }}>
            <img src={image} alt={skill} />
            <div ref={textRef} className={styles.skillText}>{skill}</div>
        </div>
    );
}
