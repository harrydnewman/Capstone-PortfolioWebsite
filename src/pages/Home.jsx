import Button from "../components/Button"
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [text, setText] = useState("Click me") //add this
    const [helloText, setHelloText] = useState("Hello");

    const hellos = [
        "Hallo I am harry",
        "Hello",
        "Hola",
        "Ciao"
    ]

    function handleClick() { // add this function and everything inside 
        if (text == "Click me") {
            setText("I've been clicked")
        }
        else {
            setText("Click me")
        }
    }

    function changeHello() {
        const randomNumber = Math.floor(Math.random() * hellos.length);
        setHelloText(hellos[randomNumber]);
    }

    return (
        <div className={styles.HomeDiv}>
            <h1 className={styles.homeH1}>Home Page</h1>
            <Button text={helloText} clickFunction={changeHello}></Button>
            <p>{helloText}</p>
            <Button text={text} clickFunction={handleClick}></Button>
        </div>
    )
}