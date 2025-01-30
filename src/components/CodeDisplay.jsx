import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from '../styles/CodeDisplay.module.css'
import CopyIcon from '../assets/icons/copyicon.png'
import { ClipboardCopy } from "lucide-react";

export default function CodeDisplay({ code, language, displayLanguage }) {
    const copyToClipboard = () => {
        console.log("Copied")
        navigator.clipboard.writeText(code);
      };
    return (
        <div className={styles.DisplayDiv}>
            <div className={styles.topBar}>
                <p>{displayLanguage}</p>
                <div className={styles.copyButton} onClick={copyToClipboard}>
                    <p>Copy</p>
                    <img src={CopyIcon} alt="Copy" />
                </div>


            </div>
            <div className={styles.code}>
                <SyntaxHighlighter className={styles.syntaxHighlighter} language={language} style={atomOneDark} wrapLongLines>
                    {code}
                </SyntaxHighlighter>
            </div>

        </div>
    )
}