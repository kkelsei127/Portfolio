import './Contact.css';
import React, {useState} from 'react';
import axios from 'axios';
import {validateEmail} from "../helpers"
import { FaEnvelope } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({name: '', email: '', body: ''})
    const [errorMessage, setErrorMessage] = useState("")
    const handleInputChange = (event) =>{
        const {name, value} = event.target
        setFormData({...formData, [name]: value })
    }


    const handleFormSubmit = (e) =>{
        e.preventDefault();
        //if the email is invalid or no name / message then prompt user to enter deets
        if (!validateEmail(e.target.email) || !e.target.name || !e.target.body) {
            setErrorMessage("Please be sure to fill out all the fields!");
            setTimeout(function(){
                setErrorMessage("")
            },4000)
            //exit out of this
            return;
        } else{
            setErrorMessage("")
        }        
        try{
            axios
            .post("https://getform.io/f/47e86798-253c-4857-aebc-738d3a56fe3f", {
                name: formData.name,
                email: formData.email,
                body: formData.body,
            }, 
            { headers: {'Accept': 'application/json'}})
            .then(response => console.log(response))
            .catch(error => console.log(error))

        } catch(err) {
            console.error(err);
        }
        setFormData({name: "", email:"", body:""})
    }
    return (
        <div className="dash">
            <div className="container wrapper">
                <div className="row">
                    <h3 className='intro'>Want to chat?</h3>
                </div>
                <div className="row contactform">
                    <div className="col-md-7">
                        <form onSubmit={handleFormSubmit}>
                            {errorMessage && ( 
                                <p>{errorMessage}</p>
                            )}
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="name" className="form-control" id="name" name="name" onChange={handleInputChange} value={formData.name} placeholder="Adam Duritz"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={handleInputChange} value={formData.email}placeholder="hello@kKyser.com"/>
                            </div>
                            <div className="form-group">
                                <label for="body">Your Message</label>
                                <textarea className="form-control" id="body" rows="3" name="body" onChange={handleInputChange} value={formData.body} placeholder="Have you heard the latest news?!"></textarea>
                            </div>
                            <button type="submit" className="btn btn-lrg btn-primary send shadow">Send! <FaEnvelope className="envelope"/></button>
                        </form>
                    </div>
                    <div className="col-md-5 text">
                        <h3>Let's talk about <span className="blue">everything.</span></h3>
                        <br/>
                        <h6>Whether you have an idea that needs to come to life, a team that needs an extra hand, or you
                            just want to chit chat about your favorite recipes, drop me a line!
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;