import './Works.css';
import Carousel from 'react-bootstrap/Carousel';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function Works() {
    return (
        <div className="dash">
            {/* this renders the first row */}
            <div className=" row rowcont">
                {/* this is the first column, left */}
                <div className="col-md-6">
                    {/* empty buffer row, might not be needed */}
                    <div className="row projtitle"><h2>ReciBEET</h2></div>
                    <div className="row projdesc">
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <a href="https://recibeet-2.herokuapp.com"><h5>ReciBeet</h5></a>
                            <p>A team project created using MySQL, JavaScript, Node, Axios and Bootstrap
                            The perfect recipe finder for all things vegetarian! Let us know whats in your fridge
                            and we will do the meal planning for you! Have a recipe already in mind, search or create!</p>
                            <a href="https://github.com/torresorona/ReciBEET"><i className="fa-brands fa-github" ></i></a>
                        </div>
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                    </div>
                </div>
                {/* this is the second column, right */}
                <div className='col-md-6'>
                    {/* empty buffer row, might not be needed */}
                    <div className="row carouselcont"></div>
                    <div className="row">
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <Carousel slide={false} interval={null} className="shadow">
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/recibeetlogo.png" alt="Recibeet project logo, displaying a happy beet with a chefs hat"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
{/* ///////////////////////////ROW TWO//////////////////////////////////////////// */}
            <div className="row rowcont">
                {/* this is the first column, left */}
                <div className='col-md-6'>
                    {/* empty buffer row, might not be needed */}
                    <div className="row "></div>
                    <div className="row carouselcont">
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <Carousel slide={false} interval= {null} className="shadow">
                                <Carousel.Item>
                                    <img className="d-block w-100 workimg" src="../images/weatherfive.png" alt="Recibeet project logo, displaying a happy beet with a chefs hat"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                    </div>
                </div>
                {/* this is the second column, right */}
                <div className="col-md-6">
                    {/* empty buffer row, might not be needed */}
                    <div className="row projtitle"><h2>Weather Five</h2></div>
                    <div className="row projdesc">
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p>
                                <a href="https://kkelsei127.github.io/weatherFive/"><h5>Weather Five</h5></a>
                                <p>A project utilizing the OpenWeather API, JavaScript, HTML, Bootstrap 
                                Do you know what the weather is going to be like in your city for the next five days?
                                Me neither! Check out this awesome work in progress!</p>
                                <a href="https://github.com/kkelsei127/weatherFive"><i className="fa-brands fa-github" ></i></a>
                            </p>
                        </div>
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                    </div>             
                </div>
            </div>
{/* /////////////////////////////////ROW THREE///////////////////////// */}
            <div className="row rowcont">
                {/* this is the first column, left */}
                <div className="col-md-6">
                    {/* empty buffer row, might not be needed */}
                    <div className="row projtitle"><h2>Beats and eats</h2></div>
                    <div className="row projdesc">
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p>
                                <a href="https://shobannah.github.io/BeatsAndEats/"><h5>Beats and Eats</h5></a>
                                <p>A team project created using Spotify and Google Maps API, Javascript, AJAX and Tailwind CSS
                                Jam to your favorite tunes while you search for food in your area!</p>
                                <a href="https://github.com/shobannah/BeatsAndEats"><i className="fa-brands fa-github" ></i></a>

                            </p>
                        </div>
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                    </div>
                </div>
                {/* this is the second column, right */}
                <div className='col-md-6'>
                    {/* empty buffer row, might not be needed */}
                    <div className="row carouselcont"></div>
                    <div className="row">
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                        <Carousel slide={false} interval= {null} className="shadow">
                            <Carousel.Item>
                                <img src="../images/Beatsandeats.png" className="d-block w-100" alt="Takeout container with headphones titled beats and eats"/> 
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />
                            </Carousel.Item>
                            </Carousel>
                        </div>
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                    </div>
                </div>     
            </div>
{/* ///////////////////////////ROW FOUR//////////////////////////////////////////// */}
            <div className="row rowcont">
                {/* this is the first column, left */}
                <div className='col-md-6'>
                    {/* empty buffer row, might not be needed */}
                    <div className="row "></div>
                    <div className="row carouselcont">
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                        <div className="col-md-8 ">
                            <Carousel slide={false} interval= {null} className="shadow">
                                <Carousel.Item>
                                <img src="../images/postedup.svg" className="d-block w-100" alt="Yellow post-it note with a red pushpin titled Posted Up"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                    </div>
                </div>
                {/* this is the second column, right */}
                <div className="col-md-6">
                    {/* empty buffer row, might not be needed */}
                    <div className="row projtitle"><h2>Posted Up</h2></div>
                    <div className="row projdesc">
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <a href="https://bloggingtech.herokuapp.com/"><h5>Posted Up</h5></a>
                            <p>A full stack project created with MySQL, JavaScript, Handlebars, CSS, Bootstrap 
                            A CMS style tech blog that allows users to log in and share their thoughts!</p>
                            <a href="https://github.com/kkelsei127/blogging"><i className="fa-brands fa-github" ></i></a>
                        </div>
                        {/* these are just to help center the col? */}
                        <div className="col-md-2"></div>
                    </div>             
                </div>
            </div>                
        </div> 
    );
}

export default Works;