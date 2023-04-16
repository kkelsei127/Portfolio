import './Homepage.css';

function Homepage() {
    return (
        <div>
                <section>
                    
                    <section className="waves">
                        <div className="air air1"></div>
                        <div className="air air2"></div>
                        <div className="col home-content">
                            <h1>Hello, I'm Kelsei Kyser</h1>
                            <h3>a full stack developer, creator and ardent learner.</h3>
                            <h6>I like to create functional digital art that makes an impact</h6>
                         
                            <a className='btn btn-lrg start shadow' role="button" href="/About" >Let's get started!</a>
                        </div>
                        <div className="air air3"></div>
                        <div className="air air4"></div>
                    </section>
                    <section className="row overlay">
                        
                    </section>
                </section>
            </div>
    );
    
}
export default Homepage;