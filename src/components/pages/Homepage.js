import './Homepage.css';

import About from './About.js'

function Homepage() {
    // document.title = "kKyser  |  Homepage";
    // function renderAbout(e) {
    //     e.preventDefault();
    //     render(About)
    // }
    return (
        <div>
                <section>
                    <section className="waves">
                        <div className="air air1"></div>
                        <div className="air air2"></div>
                        <div className="air air3"></div>
                        <div className="air air4"></div>
                    </section>
                    <section className="row overlay">
                        <div className="col home-content">
                            <h1>Hello, I'm Kelsei Kyser</h1>
                            <h3>a full stack developer, creator and ardent learner.</h3>
                            <h6>I like to create functional digital art that makes an impact</h6>
                         
                            <a className='btn btn-lrg start shadow' role="button" href="/About" >Let's get started!</a>
                        </div>
                    </section>
                </section>

            {/* <!--Scripts here!-->
            <!--bootstrap--> */}
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script> */}
        </div>
    );
    
}
export default Homepage;