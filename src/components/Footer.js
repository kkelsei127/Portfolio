import './Footer.css';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

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
                            <a href="https://github.com/kkelsei127" style={{color: "#ce8cb1c1"}}><AiFillGithub/></a>
                            <a href="https://www.linkedin.com/in/kelsei-kyser/" style={{color: "#ce8cb1c1"}}><AiFillLinkedin/></a>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    );
}

export default Footer;