import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./App.css"
//import TodoItem from "./TodoItem.js"
import ContactCard from "./contactCard.js"
import zoro from './images/zoro.jpeg'
import luffy from './images/luffy.jpeg'
import jinbei from './images/Jinbei.jpeg'
import ace from './images/Ace.jpeg'
import fujitora from './images/Fujitora.png'
import Joke from './joke.js'

import bg from './images/Background_plain1.jpeg'



function App() {
    let activity

   
    let imgs = {
	    zoro,
	    luffy,
	    jinbei,
	    ace,
	    fujitora,
	    bg
    }

    let getImage = (key) => imgs[key]

    console.log(getImage[0])
    
    const styles = {
        fontSize:15,
	    color:"#04756F",
        backgroundImage: 'url('+bg+')'
    }
	return (
    <div className="contacts" style={styles}> 
	<h3>
    <ContactCard 
        contact={{name:"Zoro", imgUrl:{zoro}, Description:"Straw Hat pirates Swordsman", Status:"Alive"}}
    /> 
    </h3>
    <h5>
    <Joke
        joke={{question:"knock knock ?", punchline:"Knock Knock who is there ?"}}
    />
    </h5>
        <hr/>
   	<h3>
    <ContactCard
        contact={{name:"Fujitora", imgUrl:{fujitora}, Description:"Fleet admiral", Status:"Alive"}}
    />
    </h3>
    <h5>
    <Joke
        joke={{question:"Are you Blind ?", punchline:"Being blind has its advantages..."}}
    />
    </h5>
        <hr/>
    <h3>
    <ContactCard
        contact={{name:"Ace", imgUrl:{ace}, Description:"Straw Hat pirates Swordsman", Status:"Deceased"}}
    />
    </h3>
    <h5>
    <Joke
        joke={{question:"Are you fire ?", punchline:"If I just lived through today, that will be enough..."}}
    />
    </h5> 
        <hr/>
    <h3>
    <ContactCard
        contact={{name:"Luffy", imgUrl:{luffy}, Description:"Straw Hat pirate head", Status:"Alive"}}
    />
    </h3>
    <h5>
    <Joke
        joke={{question:"Are you straw hat ?", punchline:"If you dont take risks, you cannot create a future..."}}
    />
    </h5> 
    </div>
	)
}

export default App
