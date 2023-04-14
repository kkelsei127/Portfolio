import './Works.css';
import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import {AiFillGithub} from 'react-icons/ai';
import { IoArrowRedo } from "react-icons/io5";

function Works() {
    return (
        <div className="dash">
            <div className=" row rowcont">
                <div className="col-md-6">
                    <div className="row projtitle"><p>ReciBEET</p></div>
                    <div className="row projdesc">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <p>A team project created using MySQL, JavaScript, Node, Axios and Bootstrap. <br/>
                            ReciBeet is the perfect recipe finder for all things vegetarian! Leveraging the Spoonacular
                            API, you can search for recipes by name or you can let us know whats already in your fridge or 
                            pantry and we will do the meal planning for you! Have an awesome family recipe? Utilize the create
                            recipe function to have it saved and displayed for other users! Each user profile features both their 
                            saved and personally created recipes!</p>
                            <h5>
                                <a href="https://github.com/torresorona/ReciBEET"><AiFillGithub/></a>
                                <a href="https://recibeet-2.herokuapp.com"><IoArrowRedo/></a>
                            </h5>
                            </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="row carouselcont"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <Carousel slide={false} interval={null} className="shadow">
                                <Carousel.Item> 
                                    <img className="d-block w-100 workimg" src="../images/recibeetlogo.svg" alt="Recibeet project logo, displaying a happy beet with a chefs hat"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/rbhome.svg" alt="Recibeet home page with featured user recipes"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/rbrec.svg" alt="Recipe page showcasing ingredients and directions with an aside of user options"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
{/* ///////////////////////////ROW TWO//////////////////////////////////////////// */}
            <div className="row rowcont">
                <div className="row unl">
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <img src="../images/diamond.svg" className="d-block w-100 dmnd" alt="diamond with a line"/>  
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className='col-md-6'>
                    <div className="row carouselcont">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <Carousel slide={false} interval= {null} className="shadow" >
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/wflogo.svg" alt="Recibeet project logo, displaying a happy beet with a chefs hat"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/wfhome.svg" alt="Second slide"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/wfday.svg" alt="Third slide"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row projtitle"><p>Weather Five</p></div>
                    <div className="row projdesc">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <p>A project utilizing the OpenWeather API, JavaScript, HTML, Bootstrap.<br/>
                            Do you know what the weather is going to be like in your city for the next five days?
                            Me neither! With the help of the OpenWeather API, this project allows you to search for the weather
                            forecast in any city and have your previous searches saved for quick easy access. Check out this 
                            awesome work in progress! </p>
                            <h5>
                            <a href="https://github.com/kkelsei127/weatherFive"><AiFillGithub/></a>
                            <a href="https://kkelsei127.github.io/weatherFive/"><IoArrowRedo/></a>
                            </h5>
                        </div>
                        <div className="col-md-1s"></div>
                    </div>             
                </div>
            </div>
{/* /////////////////////////////////ROW THREE///////////////////////// */}
            <div className="row rowcont">
                <div className="row unl">
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <img src="../images/diamond.svg" className="d-block w-100 dmnd" alt="diamond with a line"/>      
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className="col-md-6">
                    <div className="row projtitle"><p>Beats & Eats</p></div>
                    <div className="row projdesc">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <p>A team build created using Spotify and Google Maps API, JavaScript, AJAX and Tailwind.<br/>
                            Built for the hungriest of students, initially the Google Maps API loads places near you to study,
                            select your favorite tunes via genre and then look for food nearest you! You can search 
                            for food based off your latest craving! Want to skip the current song? Need to pause the music to 
                            order food? The Spotify API call features all this and more.</p>
                            <h5>
                                <a href="https://github.com/shobannah/BeatsAndEats"><AiFillGithub/></a>
                                <a href="https://shobannah.github.io/BeatsAndEats/"><IoArrowRedo/></a>
                            </h5>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="row carouselcont"></div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                        <Carousel slide={false} interval= {null} className="shadow">
                            <Carousel.Item>
                                <img src="../images/Beatsandeats.svg" className="d-block w-100 workimg" alt="Takeout container with headphones titled beats and eats"/> 
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 workimg" src="../images/beoverall.svg" alt="Second slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 workimg" src="../images/besearch.svg" alt="Third slide" />
                            </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>     
            </div>
{/* ///////////////////////////ROW FOUR//////////////////////////////////////////// */}
            <div className="row rowcont">
                <div className="row unl">
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <img src="../images/diamond.svg" className="d-block w-100 dmnd" alt="diamond with a line"/>      
                    </div>
                    <div className="col-md-5"></div>
                </div>
                <div className='col-md-6'>
                    <div className="row "></div>
                    <div className="row carouselcont">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <Carousel slide={false} interval= {null} className="shadow">
                                <Carousel.Item>
                                <img src="../images/postedup.svg" className="d-block w-100 workimg" alt="Yellow post-it note with a red pushpin titled Posted Up"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/puhome.svg" alt="Second slide"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/pupost.svg" alt="Third slide"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row projtitle"><p>Posted Up</p></div>
                    <div className="row projdesc">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <p>A full stack project created with MySQL, JavaScript, Handlebars, CSS, Bootstrap.<br/>
                            We all have a lot to say in this day and age and this build is perfect for it. A CMS style tech blog that
                            allows users to share their thoughts and add to other user's posts. Create an account or sign in to comment and 
                            allow for full functionality.</p>
                            <h5>
                                <a href="https://github.com/kkelsei127/blogging"><AiFillGithub/></a>
                                <a href="https://bloggingtech.herokuapp.com/"><IoArrowRedo/></a>
                            </h5>
                        </div>
                        <div className="col-md-1"></div>
                    </div>             
                </div>
            </div>                
        </div> 
    );
}

export default Works;