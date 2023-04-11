import './About.css';

const styles = {
    fontStyle: {
        fontWeight: '600',
        paddingTop: '40px',
    }
};


function About() {
    document.title = 'kKyser  |  About';

    return(
        <div>
            <div className='dash'>
                <section id="abthero">
                    <div className="container">
                        <div className="row">
                            <div className="col about">
                                <aside>
                                    <h1 style={styles.fontStyle} className="abthead">Howdy!</h1>
                                    
                                    
                                    <h3 style={styles.fontStyle} >I'm Kelsei!</h3>
                                    
                                    <h5 style={styles.fontStyle}>
                                        A <span className="txt"> Kentucky </span> based full stack developer with an admiration for clean, creative designs. 
                                        In my free time you can find me <span className="txt">learning</span> about the latest technologies 
                                        and frameworks to further my skillset. If you catch me away from the screen, I'm likely
                                        sipping a freshly brewed cup of coffee or creating something new in the kitchen.<br/>
                                        <br/>
                                        With a background in pastry arts and <span className="txt">data analytics</span>, I am currently looking for a junior
                                         <span className="txt">fullstack </span> developer role to kickstart my recipe for
                                        success in a new field. 
                                        <br/>
                                        <br/>                                        
                                    </h5>
                                    <h5 style={styles.fontStyle}>You can download my resume <a id="resumelink" href="./KKyser.jpg" download="KKyser.jpg">here</a>.</h5>
                                </aside>
                            </div>
                            <div className="col">
                                <div className="col photocont">
                                    <div className="col" id="img">
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>           
                </section>
            </div>
            <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-2">
                            <img src="../images/diamond.svg" className="d-block w-100 abtdmnd" alt="diamond with a line"/>  
                        </div>
                        <div className="col-md-5"></div>
                    </div>
            
            <section className="proficiencies">
                <div  className="row">
                    
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="prgcont shadow">
                                <div className="row">
                                    <div className="col-sm left">
                                        <p>JavaScript</p>
                                    </div>
                                    <div className="col-sm middle">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div className="col-sm right">
                                        <p>Node</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm left">
                                        <p>Mongo</p>
                                    </div>
                                    <div className="col-sm middle">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div className="col-sm right">
                                        <p>SQL</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm left">
                                        <p>PHP</p>
                                    </div>
                                    <div className="col-sm middle">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div className="col-sm right">
                                        <p>React</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm left">
                                        <p>Bootstrap</p>
                                    </div>
                                    <div className="col-sm middle">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div className="col-sm right">
                                        <p>Tailwind</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 prghead shadow">
                            <h3>Skills</h3>
                            <h5>
                                Most of my projects utilize a <span className="txt"> MERN </span> or a <span className="txt"> MEAN </span> stack, but I am always open to learning new
                                technologies!<br/>
                                <br/>
                                Whether it is agonizing over pixel <span className="txt">perfection </span> or getting data to the user
                                in an <span className="txt"> efficient </span> way, I enjoy the unique challenges that front end and back end 
                                development present.
                              </h5>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default About;