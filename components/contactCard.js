import React from "react"


function ContactCard(props) {
	console.log(props.contact)
	for (let [key, value] of Object.entries(props.contact.imgUrl)) {
		console.log(`${key}: ${value}`)
	}
	return (
        <div className="contact-card">
		<img src={Object.entries(props.contact.imgUrl)[0][1]} height={240} width={240} alt=""/>
		<h3>{props.contact.name}, {props.contact.Description}, {props.contact.Status}</h3>
        </div>	
	)
}

export default ContactCard


