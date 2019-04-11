import React from "react"

function ContactCard(props){
    return(
        <div>
            <img src={props.contact.img} style={{height:150}}/>
            <h1>{props.contact.name}</h1>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard