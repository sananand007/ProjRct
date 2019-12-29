import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./App.css"
import TodoItem from "./TodoItem.js"

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
    let activity
    const styles = {
        fontSize:30,
	color:"#04756F"
    }
	return (
        <div className="todo-list">
	<h3 style={styles}><TodoItem /></h3>
   	<h3 style={styles}><TodoItem /></h3>
	<h3 style={styles}><TodoItem /></h3>
	<h3 style={styles}><TodoItem /></h3>
        </div>
	)
}

export default App
