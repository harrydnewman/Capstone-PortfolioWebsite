import styles from '../../styles/PortfolioDocumentation.module.css'
import PersonaImage from '../../assets/images/Catalist/persona.jpg'
import CurrentStateJourneyMap from '../../assets/images/Catalist/currentstatejourney.png'
import FutureStateJourneyMap from '../../assets/images/Catalist/futurestate.png'
import FlowDiagram from '../../assets/images/Catalist/flowchart.png'
import StyleGuide from '../../assets/images/Catalist/styleguide.png'
import FigmaFlow from '../../assets/images/Catalist/figmaflow.png'
import TitleSection from '../../components/TitleSection'
export default function Catalist() {
    return (
        <div className={styles.main}>
         <TitleSection 
                        title="Catalist"
                        name="Harrison Newman"
                        date="April 30th, 2024"
                        course="UX Design"
                        skills={["Figma", "UX Design"]}
                    />
        <div className={styles.bodySection}>
            <div className={styles.TableOfContents}>
                <a href='#problemStatement'>Problem Statement</a>
                <a href='#hmw'>How Might Wes</a>
                <a href='#RandA'>Research and Analysis</a>
                <a href='#persona'>Persona</a>
                <a href='#csjm'>Current State Journey Map</a>
                <a href='#companal'>Competitive Analysis</a>
                <a href='#futurestatejourney'>Future State Journey Map</a>
                <a href='#flowDiagram'>Flow Diagram</a>
                <a href='#styleguide'>Style Guide</a>
                <a href='#featurelist'>Feature List</a>
                <a href='#figmaprototype'>Figma Prototype</a>
                <a href='#testingEvidence'>Testing Evidence</a>
                <a href='#analysis'>Analysis</a>
                <a href='#nextsteps'>Next Steps</a>
                <a href='#lessons'>Lessons Learned</a>
            </div>

            <div className={styles.documentation}>
                <h3 id='problemStatement'>Problem Statement</h3>
                <p>For college students, it’s a constant challenge to efficiently manage tasks and goals. Every semester, these individuals juggle numerous assignments, extracurricular activities, and personal commitments in order to excel academically and personally. This is especially true for students with a diverse range of interests and responsibilities, as it becomes increasingly difficult to prioritize and organize tasks effectively.</p>

                <h3 id='hmw'>How Might Wes</h3>

                <ol>
                    <li>How might we create a personalized task management system that adapts to each student's unique schedule, academic workload, and extracurricular commitments to help them prioritize effectively? </li>
                    <li>How might we design a digital platform that integrates with students' existing tools and calendars to provide a centralized hub for managing tasks, deadlines, and goals across all aspects of their college life?</li>
                    <li>How might we develop a gamified task management application that motivates and rewards students for completing tasks and achieving milestones, making the process of productivity more engaging and enjoyable?</li>
                </ol>
                <h3 id='RandA'>Research and Analysis</h3>
                <h4>Questions</h4>
                <ol>
                    <li>What kinds of personal goals do you typically set for yourself?</li>
                    <li>How do you currently keep track of your progress towards your goals, if at all?</li>
                    <li>Can you share any challenges or obstacles you've faced in staying committed to your goals in the past?</li>
                    <li>When it comes to sharing your goals with friends or peers, how do you prefer to do so, and why?</li>
                    <li>What specific features or tools do you wish were available to help you track your progress towards your goals more effectively?</li>
                    <li>How do you feel about receiving reminders or notifications related to your goals, and in what format or frequency do you find them most helpful?</li>
                    <li>What does the concept of accountability mean to you in the context of achieving your goals, and how do you think an app could help foster accountability?</li>
                    <li>What features or elements would make you more likely to continue using the app regularly and stay motivated to work towards your goals over time?</li>
                    <li>Can you recall a time when you struggled to stay committed to a goal? What were the main challenges you faced?</li>
                    <li>What role do you think social comparison plays in motivating you to achieve your goals? Do you prefer to compare your progress with others?</li>
                    <li>How do you feel about incorporating gamification elements (e.g., badges, rewards, streaks) into an app designed to help you achieve your goals?</li>
                    <li>In your opinion, what are the most important aspects of goal tracking and accountability that an app should prioritize?</li>
                    <li>Have you ever used any other apps or tools designed to help you set and achieve goals? What did you like or dislike about them?</li>
                </ol>

                <h4>Interviews</h4>
                <p>For my interviews, I specifically tried to target NYU students. I purposefully found people I knew in each year to interview them and tried to get students in different majors to diversify my results.</p>

                <h4>Affinity Mapping</h4>
                <p><strong>Key:</strong></p>
                <ul>
                    <li style={{ color: "green" }}>Green</li>
                    <ul>
                        <li>Keels, 21, Man, NYU Stern Junior</li>
                    </ul>
                    <li style={{ color: "orange" }}>Orange</li>
                    <ul>
                        <li>Caitlyn, 22, Woman, NYU IMA Senior</li>
                    </ul>
                    <li style={{ color: "blue" }}>Blue</li>
                    <ul>
                        <li>Noelle, 19, Woman, NYU IMA Freshman</li>
                    </ul>
                    <li style={{ color: "pink" }}>Pink</li>
                    <ul>
                        <li>Jane, 21, Woman, NYU Film Sophomore</li>
                    </ul>
                    <li style={{ color: "yellow" }}>Yellow</li>
                    <ul>
                        <li>Nicolas, 20, Man, NYU Film Sophomore</li>
                    </ul>
                    <li>Black</li>
                    <ul>
                        <li>Lara, 21, Woman, NYU Stern Junior</li>
                    </ul>
                </ul>
                <p><a href='https://miro.com/app/board/uXjVKRtqjX8=/'>Link to affinity map</a> -  The affinity map is linked in order to view it best</p>

                <h4>Affinity mapping takeaways</h4>
                <ul>
                    <li>People have very different goals that they want to set.</li>
                    <li>Most people are currently keeping track of their goals either mentally or through the reminders app.</li>
                    <li>Most common issues people are currently having with their goals are laziness, being distracted, not being motivated, and most overall is forgetting to do them.</li>
                    <li>Most people do not really want to share their goals with their friends, and only want to share them if the goals come up naturally.</li>
                    <li>The most effective feature to improve keeping track of goals for most people was better notifications/reminders.</li>
                    <li>People want notifications to be gentle.</li>
                    <li>Most people want the frequency of notifications to be specific to the event.</li>
                    <li>People would use it more if it was designed well, easy to use, and helps users remain consistent.</li>
                    <li>People fall off on long-term goals because they lose motivation more than anything.</li>
                    <li>Majority of people like to compare progress with others.</li>
                    <li>People want gamification features.</li>
                    <li>People want to be able to share/collaborate on goals.</li>
                    <li>People want to be able to see when their friends have completed a task/how many tasks the friend has completed.</li>
                </ul>
                <h4>Overall Takeaways from Research</h4>
                <p>After conducting my research, I decided to reframe my problem statement (see Lessons Learned). I realized that what seemed to be the issue among most of the people I interviewed was that they didn't have a method to keep track of their tasks and goals that they enjoyed using, which made them stray away from keeping track of their goals in general. Additionally, 5/6 of the people I interviewed really liked the idea of gamification features. As a result, I decided to go with my third HMW (“How might we develop a gamified task management application that motivates and rewards students for completing tasks and achieving milestones, making the process of productivity more engaging and enjoyable?”).</p>

                <h3 id='persona'>Persona</h3>
                <img src={PersonaImage} alt='persona image' />

                <h3 id='csjm'>Current State Journey Map</h3>
                <img src={CurrentStateJourneyMap} alt='current state journey map'></img>

                <h3 id='companal'>Competitive Analysis</h3>
                <h4>Similar Apps:</h4>
                <h5>Reminders (Apple):</h5>
                <ul>
                    <li><strong>Strengths:</strong></li>
                    <ul>
                        <li>Straightforward, simple, and easy to use interface.</li>
                        <li>Provides basic functionality for task management and reminders.</li>
                    </ul>
                    <li><strong>Weaknesses:</strong></li>
                    <ul>
                        <li>Lacks engaging features or gamification elements.</li>
                        <li>Notification system may not be customizable enough for users' preferences.</li>
                        <li>Overall user experience might feel dull or uninspiring.</li>
                    </ul>
                </ul>
                <h5>Finch:</h5>
                <ul>
                    <li><strong>Strengths:</strong></li>
                    <ul>
                        <li>Incorporates a good notification system for reminders.</li>
                        <li>Offers some gamification elements, which interviewees appreciated.</li>
                    </ul>
                    <li><strong>Weaknesses:</strong></li>
                    <ul>
                        <li>Takes away from the effort of goal achievement by having an app that can be perceived as too childish.</li>
                        <ul>
                            <li>Users expressed a desire for a balance between gamification and practical goal management.</li>
                        </ul>
                        <li>May not appeal to a broader audience beyond those looking for a more playful task management experience.</li>
                    </ul>
                </ul>

                <h4>Analysis</h4>
                <ul>
                    <li>Users seek a balance between simplicity and engagement in task management apps.</li>
                    <li>While Reminders offers simplicity, it lacks engaging features.</li>
                    <li>Finch introduces gamification elements but may alienate users who find it too playful.</li>
                    <li>There's a need for a task management app that combines the practicality of Reminders with the engagement of Finch, offering customizable notifications and gamification features without sacrificing the seriousness of goal achievement.</li>
                </ul>
                <h3 id='futurestatejourney'>Future State Journey Map</h3>
                <img src={FutureStateJourneyMap} alt='future state journey map'></img>

                <h3 id='flowDiagram'>Flow Diagram</h3>
                <img src={FlowDiagram} alt='flow diagram' />
                <h3 id='styleguide'>Style Guide</h3>
                <img src={StyleGuide} alt='style guide' />

                <h3 id='featurelist'>Feature List</h3>
                <ol>
                    <li><strong>Goal Tracking:</strong>
                        <ul>
                            <li><strong>Features:</strong>
                                <ul>
                                    <li>Notifications based on time, place, deadline, etc.</li>
                                    <li>3 Different Types of Goals:</li>
                                    <ul>
                                        <li><strong>Short Term:</strong>
                                            <ul>
                                                <li>Ex: Send email to professor</li>
                                                <li>These are best for simple goals that will happen once</li>
                                            </ul>
                                        </li>
                                        <li><strong>Long Term:</strong>
                                            <ul>
                                                <li>Ex: UX Final Project</li>
                                                <li>These are best for goals that will go on for a while, but have an upcoming end date</li>
                                                <li>Would allow you to create subtasks of what needs to happen each time you run the task</li>
                                            </ul>
                                        </li>
                                        <li><strong>Continuous:</strong>
                                            <ul>
                                                <li>Ex: Take Meds</li>
                                                <li>Continuous goals are meant to be for the long term, with no anticipated end date. These goals are best for habit forming</li>
                                                <li>Would allow you to create subtasks of what needs to happen each time you run the task</li>
                                                <li>Ex: Take adderall, take vitamins</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li><strong>Content Approach:</strong>
                                <ul>
                                    <li>Provide clear and concise goal-setting guidance within the app to help users define their goals effectively.</li>
                                    <li>Utilize interactive elements such as checklists and progress bars to visually represent goal completion.</li>
                                </ul>
                            </li>
                            <li><strong>Metrics of Success:</strong>
                                <ul>
                                    <li>Facilitate the creation and management of goals for users to enable user productivity to increase 20%.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><strong>Gamification Elements:</strong>
                        <ul>
                            <li><strong>Features:</strong>
                                <ul>
                                    <li><strong>Streak:</strong>
                                        <ul>
                                            <li>If you did all of your goals/a set number of goals for a set of days, you will earn a streak.</li>
                                        </ul>
                                    </li>
                                    <li><strong>Badges:</strong>
                                        <ul>
                                            <li>Users get badges when completing tasks for a certain amount of time.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><strong>Content Approach:</strong>
                                <ul>
                                    <li>Develop visually appealing badges and streak indicators to motivate users.</li>
                                    <li>Implement informative pop-ups or tooltips to explain the significance of each badge.</li>
                                </ul>
                            </li>
                            <li><strong>Metrics of Success:</strong>
                                <ul>
                                    <li>Incorporate gamification elements to keep users wanting to continue working on their own personal goals, allowing the app to have a user retention rate of 60% over the next year.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><strong>Community:</strong>
                        <ul>
                            <li><strong>Features:</strong>
                                <ul>
                                    <li>Can see if your friends have completed their goals for the day.</li>
                                    <li>Can collaborate on goals.</li>
                                    <ul>
                                        <li>Ex: Workout</li>
                                        <li>You and your friend both want to go to the gym everyday, so you collaborate on a continuous goal to motivate you both to go every day.</li>
                                    </ul>
                                    <li>Can nudge friends to do their tasks for the day.</li>
                                </ul>
                            </li>
                            <li><strong>Content Approach:</strong>
                                <ul>
                                    <li>Foster a sense of community by incorporating social features such as user profiles, activity feeds, and messaging capabilities.</li>
                                    <li>Provide prompts or templates for collaborative goal-setting to facilitate interaction among users.</li>
                                </ul>
                            </li>
                            <li><strong>Metrics of Success:</strong>
                                <ul>
                                    <li>Create an enjoyable and rewarding way for users to connect with friends, allowing 50% of users to be consistently interacting with their peers through collaborative goals or nudges on a weekly basis.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
                <h3 id='figmaprototype'>Figma Prototype of Key Interactions</h3>
                {/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/c1WPisNIhE92yNcgKMAsV3/UX-Final?page-id=2%3A265&type=design&node-id=95-1207&viewport=-3437%2C-439%2C0.33&scaling=scale-down&starting-point-node-id=95%3A1207&embed-host=share" allowfullscreen></iframe> */}

                <h1>ADD THESE LINKS LATER</h1>

                <h3 id='testingEvidence'>Testing Evidence:</h3>
                {/* NEED TO COME BACK AND FIX THIS  */}
                <h4>User Test 1</h4>
                <h5>Test Participant: Keels Braga</h5>

                <h5>Goal Creation:</h5>
                <ul>
                    <li><strong>Task:</strong> Create a new continuous goal that occurs daily between 7AM - 3PM with a notification reminder for a specific time.</li>
                    <li><strong>Feedback:</strong>
                        <ul>
                            <li>Participant found it challenging due to the inability to type into text boxes.</li>
                            <li>Suggested removing the "end" field for notifications.</li>
                        </ul>
                    </li>
                    <li><strong>Time:</strong> Took a while due to difficulty with text boxes.</li>
                </ul>

                <h5>Task Management:</h5>
                <ul>
                    <li><strong>Task:</strong> Access a long-term goal and mark subtasks as complete.</li>
                    <li><strong>Feedback:</strong>
                        <ul>
                            <li>Participant found the UI enjoyable and noted positive animations.</li>
                        </ul>
                    </li>
                    <li><strong>Time:</strong> Participant was slow but enjoyed the experience.</li>
                </ul>

                <h5>Interacting with Friends:</h5>
                <ul>
                    <li><strong>Task:</strong> View a friend's goal progress and send a nudge to encourage goal completion.</li>
                    <li><strong>Feedback:</strong>
                        <ul>
                            <li>Participant suggested adding animations to nudge buttons.</li>
                        </ul>
                    </li>
                    <li><strong>Time:</strong> Participant navigated relatively quickly but noted that they wished the nudge buttons were animated.</li>
                </ul>

                <h4>User Test 2</h4>
                <h5>Test Participant: Nicolas Lucente</h5>

                <h5>Goal Creation:</h5>
                <ul>
                    <li><strong>Task:</strong> Create a new long-term goal with two subtasks and automatic time notifications.</li>
                    <li><strong>Feedback:</strong>
                        <ul>
                            <li>Participant found the process easy but noted readability issues due to white text on green background.</li>
                        </ul>
                    </li>
                    <li><strong>Time:</strong> Completed task within 18 seconds.</li>
                </ul>

                <h5>Task Management:</h5>
                <ul>
                    <li><strong>Task:</strong> Access a long-term goal and mark subtasks as complete.</li>
                    <li><strong>Feedback:</strong>
                        <ul>
                            <li>Participant found the UI intuitive and appreciated the amount of information displayed.</li>
                        </ul>
                    </li>
                    <li><strong>Time:</strong> Completed task within 9 seconds.</li>
                </ul>

                <h5>Interacting with Friends:</h5>
                <ul>
                    <li><strong>Task:</strong> View a friend's goal progress and send a nudge to encourage goal completion.</li>
                    <li><strong>Feedback:</strong>
                        <ul>
                            <li>Participant felt nudges lacked impact and found navigation to friends' progress confusing.</li>
                        </ul>
                    </li>
                    <li><strong>Time:</strong> Completed task within 5 seconds.</li>
                </ul>
                <h3 id='analysis'>Analysis</h3>
                <h4>General Feedback</h4>
                <ul>
                    <li>Participants noted that white on green text should be changed to black on green for better readability.</li>
                    <li>Clean-up of text recommended, particularly for wordiness.</li>
                    <li>Desire for animations on nudge buttons expressed.</li>
                    <li>Overall ease of use and good information presentation acknowledged.</li>
                    <li>Confusion regarding the presence of upcoming tasks on the homepage mentioned.</li>
                </ul>
                <h4>Feedback Summary</h4>
                <ul>
                    <li>Average completion time observed, but potential skew due to lacking features like textboxes.
                        <li>Immediate changes made include adjusting some button colors and updating nudge button animations.</li>
                        <li>Future changes planned include transitioning white on green text to black on green.</li>
                    </li>
                </ul>

                
                <h3 id='nextsteps'>Next Steps</h3>
                <ul>
                <li>Continue working on prototype with the goal of making this into an actual app</li>
                <li>Designing more animations overall, as well as more badges and things of that nature</li>
                <li>Adding and expanding upon community features</li>
                <li>Generally just cleaning up and making things look better.</li>
                </ul>

                <h3 id='lessons'>Lessons Learned</h3>
                <h4>Problem Statement & Changing Project:</h4>
                <p>I began this project with the problem statement: “Mental health has emerged as a critical concern among college students with rising rates of stress, anxiety, and depression. Those struggling with their mental health lack accessible resources and information to bolster their confidence in prioritizing self-care and attendance. This deficiency contributes to a pervasive reluctance among students to seek assistance and engage in self-care practices, thereby exacerbating their mental health challenges and hindering their academic success”. My original plan was to create an app for students struggling with mental health to get support from their peers in completing their tasks. However, as I began my interviews, I quickly discovered that most people do not like to share their goals directly with others. Additionally, I noticed that almost every single person I interviewed was really dissatisfied with their options for keeping track of their goals and tasks. As a result, I decided to pivot my project to what it is now, attempting to create a more effective and enjoyable way to keep students on top of their to-do lists.</p>

                <h4>Figma</h4>
                <p>Through this project, I feel like I learned a ton about Figma. I really hadn't used it before this class aside from wireframing, and I am really proud of how far I got with it in so little time.</p>
                <img src={FigmaFlow} alt='figma flow chart'/>

                

            </div>
        </div>
        </div>
    )
}