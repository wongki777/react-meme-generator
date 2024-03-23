import React from "react"

export default function Header(props) {
    return (
        
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
                alt=".."
            />
            <h2 className="header--title">React Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}
