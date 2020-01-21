import React from "react"

function Joke(props) {
	console.log(props.joke)

	return (
		<div className="joke">
			<h3 style={{display: !props.joke.question && "none"}}>{props.joke.question}</h3>
			<h3 style={{display: !props.joke.question && "#888888"}}>{props.joke.punchline}</h3>
			<hr/>
		</div>
	)
}

export default Joke

