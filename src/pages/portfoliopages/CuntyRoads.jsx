import styles from '../../styles/PortfolioDocumentation.module.css'
import TitleSection from '../../components/TitleSection'
import ImageWithCaption from '../../components/ImageWithCaption'
import SystemImage from '../../assets/images/CuntyRoads/system.png'
import WiringFrontImage from '../../assets/images/CuntyRoads/wiringfront.png'
import NewBoardImage from '../../assets/images/CuntyRoads/newboard.png'
import CodeDisplay from '../../components/CodeDisplay'
import AbletonImage from '../../assets/images/CuntyRoads/ableton.png'
import AnimalsImage from '../../assets/images/CuntyRoads/animals.png'
import ChickenImage from '../../assets/images/CuntyRoads/preview.gif'
import TouchDesignerImage1 from '../../assets/images/CuntyRoads/touchdesigner1.jpg'
import TouchDesignerImage2 from '../../assets/images/CuntyRoads/td2.jpg'

export default function CuntyRoads() {

    const arduinoCode = `
#include <FastLED.h>
#include <Wire.h>
#include <Arduino_LSM6DS3.h>
#include <MIDIUSB.h>
#include <MIDIUSB_Defs.h>
#include <frequencyToNote.h>
#include <pitchToFrequency.h>
#include <pitchToNote.h>

bool countryRoadsPlaying = false;
bool sevenPlaying = false;
bool agPlaying = false;
bool basicPlaying = false;
bool mpePlaying = false;
bool clappingPlaying = false;
bool cowBellsPlaying = false;

#define COUNTRY_ROADS_BUTTON_PIN 7  //Plays track 1
#define SEVENOSEVEN_BUTTON_PIN 11   //Plays track 2
#define AG_BUTTON_PIN 12            //Plays track 3

#define BASICFINE_BUTTON_PIN 10  //Plays track 4
#define MPE_BUTTON_PIN 4         //Plays track 5
#define CLAPPING_BUTTON_PIN 2    //Plays track 6
#define COWBELLS_BUTTON_PIN 9
#define STOP_BUTTON_PIN 6  //Stops all Tracks




void noteOn(byte channel, byte pitch, byte velocity) {
  midiEventPacket_t noteOn = { 0x09, 0x90 | channel, pitch, velocity };
  MidiUSB.sendMIDI(noteOn);
}

void noteOff(byte channel, byte pitch, byte velocity) {
  midiEventPacket_t noteOff = { 0x08, 0x80 | channel, pitch, velocity };
  MidiUSB.sendMIDI(noteOff);
}


void controlChange(byte channel, byte control, byte value) {
  midiEventPacket_t event = { 0x0B, 0xB0 | channel, control, value };
  MidiUSB.sendMIDI(event);
}

void setup() {
  Serial.begin(9600);
  pinMode(COUNTRY_ROADS_BUTTON_PIN, INPUT_PULLUP);
  pinMode(SEVENOSEVEN_BUTTON_PIN, INPUT_PULLUP);
  pinMode(AG_BUTTON_PIN, INPUT_PULLUP);
  pinMode(BASICFINE_BUTTON_PIN, INPUT_PULLUP);
  pinMode(MPE_BUTTON_PIN, INPUT_PULLUP);
  pinMode(CLAPPING_BUTTON_PIN, INPUT_PULLUP);
  pinMode(COWBELLS_BUTTON_PIN, INPUT_PULLUP);
  pinMode(STOP_BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  byte countryRoadsButtonState = digitalRead(COUNTRY_ROADS_BUTTON_PIN);
  byte sevenButtonState = digitalRead(SEVENOSEVEN_BUTTON_PIN);
  byte agButtonState = digitalRead(AG_BUTTON_PIN);
  byte basicFineButtonState = digitalRead(BASICFINE_BUTTON_PIN);
  byte mpeButtonState = digitalRead(MPE_BUTTON_PIN);
  byte clappingButtonState = digitalRead(CLAPPING_BUTTON_PIN);
  byte cowbellButtonState = digitalRead(COWBELLS_BUTTON_PIN);
  byte stopButtonState = digitalRead(STOP_BUTTON_PIN);

  // Serial.println(countryRoadsButtonState);


  if (countryRoadsButtonState == LOW) {
    // Serial.println("Button is pressed");
    if (countryRoadsPlaying == false) {
      countryRoadsPlaying = true;
      Serial.println("country Roads is Playing");
      controlChange(1, 1, 127);
    }
  }

  if (sevenButtonState == LOW) {
    // if (countryRoadsPlaying == true) {
    if (sevenPlaying == false) {
      sevenPlaying = true;
      Serial.println("Seven is Playing");
      controlChange(2, 1, 127);
    } else if (sevenPlaying == true) {
      sevenPlaying = false;
      Serial.println("Seven is Stopping");
      controlChange(2, 2, 127);
    }
    // }
    delay(3000);
  }

  if (agButtonState == LOW) {
    // if (countryRoadsPlaying == true) {
    if (agPlaying == false) {
      agPlaying = true;
      Serial.println("AG is Playing");
      controlChange(3, 1, 127);
    } else if (agPlaying == true) {
      agPlaying = false;
      Serial.println("AG is Stopping");
      controlChange(3, 2, 127);
    }
    // }
    delay(3000);
  }

  if (basicFineButtonState == LOW) {
    // if (countryRoadsPlaying == true) {
    if (basicPlaying == false) {
      basicPlaying = true;
      Serial.println("Basic is Playing");
      controlChange(4, 1, 127);
    } else if (basicPlaying == true) {
      basicPlaying = false;
      Serial.println("Basic is Stopping");
      controlChange(4, 2, 127);
    }
    // }
    delay(3000);
  }

  if (mpeButtonState == LOW) {
    // if (countryRoadsPlaying == true) {
    if (mpePlaying == false) {
      mpePlaying = true;
      Serial.println("MPE is Playing");
      controlChange(5, 1, 127);
    } else if (mpePlaying == true) {
      mpePlaying = false;
      Serial.println("MPE is Stopping");
      controlChange(5, 2, 127);
    }
    // }
    delay(3000);
  }

  if (clappingButtonState == LOW) {
    // if (countryRoadsPlaying == true) {
    if (clappingPlaying == false) {
      clappingPlaying = true;
      Serial.println("Clapping is Playing");
      controlChange(6, 1, 127);
    } else if (clappingPlaying == true) {
      clappingPlaying = false;
      Serial.println("Clapping is Stopping");
      controlChange(6, 2, 127);
    }
    // }
    delay(3000);
  }

  if (cowbellButtonState == LOW) {
    // if (countryRoadsPlaying == true) {
    if (cowBellsPlaying == false) {
      cowBellsPlaying = true;
      Serial.println("Cowbells is Playing");
      controlChange(7, 1, 127);
    } else if (cowBellsPlaying == true) {
      cowBellsPlaying = false;
      Serial.println("Cowbells is Stopping");
      controlChange(7, 2, 127);
    }
    delay(3000);
  }

  if (stopButtonState == LOW) {
    controlChange(8, 1, 127);
    Serial.println("Stopping");
    countryRoadsPlaying = false;
    sevenPlaying = false;
    agPlaying = false;
    basicPlaying = false;
    mpePlaying = false;
    clappingPlaying = false;
    cowBellsPlaying = false;
    delay(3000);
  }
}

`;

    return (
        <div className={styles.main}>
            <TitleSection
                title="Cunty Roads"
                name="Harrison Newman"
                date="May 4th, 2024"
                course="Designing Interfaces for Live Performance"
                skills={["Touch Designer", "Arduino", "Physical Computing", "Ableton"]}
            />

            <div className={styles.bodySection}>
                <div className={styles.TableOfContents}>
                <a href='#intro'>Introduction</a>
                <a href='#system'>System</a>
                <a href='#buttons'>Buttons</a>
                <a href='#wiring'>Wiring</a>
                <a href='#arduinoandcode'>Arduino and Code</a>
                <a href='#code'>Code</a>
                <a href='#ableton'>Ableton</a>
                <a href='#touchdesigner'>Touch Designer</a>
                <a href='#performance'>Performance</a>
                <a href='#conclusion'>Conclusion</a>
                <a href='#performanceVideo'>Video of Performance</a>
                </div>
                <div className={styles.documentation}>
                    <h3 id='intro'>Introduction</h3>
                    <p>For my final project, I wanted to create a wearable. Wearables have always been the most interesting part of physical computing for me, as I think that they are difficult to pull off, and wanted a challenge. I made a wearable for the midterm and found it to be a good  challenge, and wanted to do a full body wearable for my final performance.</p>
                    <p>I ended up buying overalls because of my goal of doing a full body wearable, and a friend suggested I do some kind of folk/country music for my final, which is how I got to the idea of country roads.</p>

                    <h3 id='system'>System</h3>
                    <ImageWithCaption image={SystemImage} alt="image of how the interface works" text="Overview of all components" />

                    <h3 id='buttons'>Buttons</h3>
                    <p>Originally when I designed the buttons, I originally went to Kay (the TA) with the intention of making fabric buttons. However, they made me kind of nervous that they would work, especially after being transported and taken on and off over and over. I also didn’t like that there was no tactile response for me to know when I had actually pressed the button. This led me to actually make my own buttons. To do this, I took a regular button and soldered the two wires to the other side. I then hot glued the button onto a piece of fabric. I then hot glued a piece of cardboard to the top of the button, and hot glued another piece of fabric to the top of the cardboard which I wrapped around everything.</p>

                    <h3 id='wiring'>Wiring</h3>
                    <p>When I originally planned all of this out, I intended to wire everything with conductive thread. I’ve had issues with conductive thread in the past, as I find it to be flimsy and I am not the best sewer. It worked at the beginning, but I kept finding problems with the thread overlapping other threads. I ended up having a chat with Kay and decided to rip it out and use these thin wires that they recommended. Once those came, I ripped out all the conductive thread, and soldered the new wire directly to the wires on the buttons to attempt to ensure that everything would stay connected.</p>
                    <p>After about 10 sticks of hot glue and a lot of soldering, I finally had all my wires connected and glued down to the overalls.</p>
                    <ImageWithCaption image={WiringFrontImage} alt='image showing front of inside of overalls' text="After everything was glued down on the front" />

                    <p>Right before I tested performing in it for the first time, some of the pins came disconnected from the board I was using. This was probably because I was using a lily pad instead of a regular board. I ended up going back and redoing the board using a regular board which ended up working perfectly.</p>

                    <ImageWithCaption image={NewBoardImage} alt="image of new board" text="New Board" />

                    <h3 id='arduinoandcode'>Arduino and Code</h3>
                    <p>The code on my arduino was relatively simple. I ended up having to do a really long delay as I kept having buttons being pressed by accident or starting endless loops.</p>

                    <h3 id='code'>Code</h3>
                    <CodeDisplay code={arduinoCode} language="cpp" displayLanguage="arduino" />

                    <p>When pressed, each button would play a different instrument on Ableton. I also had a stop button but I ended up making it not work right before I performed, and used the Tilde button instead. I made this decision because during every rehearsal I had used this to stop, and then during the last rehearsal I had the stop button and pressed it accidentally and stopped too early. I decided just to be safe I would keep the stop button mapped to a key on the computer instead of a button on the outfit. This ended up working out really well for me, as one of the buttons broke before I performed and I was able to change that instrument to take the place of the original stop button.</p>

                    <h3 id='ableton'>Ableton</h3>
                    <p>For Ableton, I used a sped up version of an instrumental of country roads. I then composed every other instrument myself except for the cowbells, which I found online and just really liked how they fit into the piece.</p>
                    <ImageWithCaption image={AbletonImage} alt="image showing final ableton file" text="My Final Ableton File"/>
                    <p>When played, every instrument besides the country roads audio itself made a different animal appear in touch designer.</p>

                    <h3 id='touchdesigner'>Touch Designer</h3>
                    <p>I originally took an image of a bunch of farm animals, I cut them out in photoshop and image traced them in illustrator to change them.</p>
                    <ImageWithCaption image={AnimalsImage} alt="Animals used for project" text="All the animals I used"/>

                    <p>Once I had my animals, I took each one at a time, cut it out into different parts, and used after effects to animate them walking on and off screen. I then took the animal’s head and body and exported them separately. In touch designer. I used a timer that went off when the music was either played or stopped. Then I made the animal’s head change its rotation based on the beat of the music.</p>
                    <ImageWithCaption image={ChickenImage} alt="example of video I made" text="Example of the video I made in After Effects"/>
                    <p>This was my first time using Touch Designer, and I probably could have made it a lot more efficient, but I was really pleased with how it turned out in the end.</p>

                    <ImageWithCaption image={TouchDesignerImage1} alt="picture of touch designer interface" text="All containers feeding to out"/>
                    <p>Each animal was stored in its own container, and then this was all overlaid over an image of the farm background.</p>
                    <p>Each touch designer container was connected to the Ableton data of each individual instrument. It took the beat for the rotation of the animal head, as well as the slot fired index and slot playing index. All of this worked together to figure out where the animals needed to be.</p>
                    <ImageWithCaption image={TouchDesignerImage2} alt="picture of touch designer interface" text="Example of what each TD container looked like"/>

                    <h3 id='performance'>Performance</h3>
                    <p>I ended up naming my performance “Cunty Roads”. It was suggested to me by someone working on the show and I really liked it and thought it fit the silly nature of the performance well. I was actually really proud of how my performance came out. I also had a little dance that a friend of a friend who was visiting taught me, which was based on the cotton eye joe dance. Although I did use the computer to play audio more than I anticipated as the buttons were being somewhat unresponsive at times. </p>
                
                    <h3 id='conclusion'>Conclusion</h3>
                    <p>Overall I am really satisfied with how this performance came out. I am genuinely terrified of things like public speaking and performing, and I was so happy with how well this came out for me. I also think I pushed myself a lot more than I had originally anticipated (I decided to do Touch Designer kind of late in my process of working on the final), and I was so happy with how it came out and I am so glad I decided to incorporate the visuals. I wish I had had more time to refine the touch designer a little more, and if I could do it again, I would probably practice my movement on stage more.</p>

                    <h3 id='performanceVideo'>Video of Performance</h3>
                    <div className={styles.youtubeiFrame}>
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/sh3wzLleDo8" title="DILP Final" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}