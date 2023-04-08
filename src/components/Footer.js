import './Footer.css';

function Footer () {
    return (
        <div>
            <footer className="footer">
                    <div className="row">
                        <div className="col-md ftr">
                            <h6>Computer crafted with lot's of time and love!</h6>
                        </div>
                        <div className="col-sm icons">
                            <div className="icons">
                            <a href="https://github.com/kkelsei127"><i class="fa-brands fa-github icon" style={{color: "#000000",}}></i></a>
                            <a href="https://www.linkedin.com/in/kelsei-kyser-767934b4/"><i class="fa-brands fa-linkedin" style={{color: "#000000",}}></i></a>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    );
}

export default Footer;