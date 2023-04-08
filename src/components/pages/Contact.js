import './Contact.css';


function Contact() {
    return (
        <div className="dash">
            <div className="container wrapper">
                <div className="row">
                    <h3>Let's get in touch!</h3>
                    {/* <h6>fill the form out below</h6> */}
                </div>
                <div className="row contactform">
                    <div className="col">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Adam Duritz"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="hello@kKyser.com"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Have you heard the latest news?!"></textarea>
                            </div>
                            <button className="btn btn-primary send" type="submit" value="Send!">Send!   <i class="fa-solid fa-envelope fa-bounce" style={{color: "#FFFFFF", paddingLeft: "5px"}}></i></button>
                        </form>
                    </div>
                    <div className="col text">
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