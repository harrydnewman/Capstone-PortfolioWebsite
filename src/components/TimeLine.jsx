/* eslint-disable react/prop-types */
import styles from '../styles/TimeLine.module.css'

export default function TimeLine({ timelineItem }){
    return (
        <div className={styles.TimeLineDiv}>
             {timelineItem.school && <p>School: {timelineItem.school}</p>}
             {timelineItem.subschool && <p>subschool: {timelineItem.subschool}</p>}
             {timelineItem.major && <p>major: {timelineItem.major}</p>}
             {timelineItem.degree && <p>degree: {timelineItem.degree}</p>}
             {timelineItem.startDate && <p>startDate: {timelineItem.startDate}</p>}
             {timelineItem.endDate && <p>endDate: {timelineItem.endDate}</p>}
             {timelineItem.gpa && <p>gpa: {timelineItem.gpa}</p>}
        </div>
    )

}