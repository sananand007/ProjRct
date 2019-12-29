import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./App.css"

/*
class App extends Component{
	render() {
	    return(
            <div className="App">
                <h1>Creating a Simple Todo App in React</h1>
            </div>
        );	
	}
}
*/

function App() {
	const date = new Date(2019, 12, 28, 15)
	const hours = date.getHours()
	let timeofDay
	const styles = {
		fontSize:30
	}

	if (hours < 12) {
		timeofDay = "morning"
		styles.color = "#04756F"
	} else if (hours >= 12 && hours < 17) {
		timeofDay = "afternoon"
		styles.color = "#2E0927"
	} else {
		timeofDay = "night"
		styles.color = "#D90000"
	}

	return (
		<h1 style={styles}>Good {timeofDay}!</h1>
	)
}

export default App
