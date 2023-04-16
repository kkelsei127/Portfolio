import './Footer.css';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

function Footer () {
    return (
        <div>
            <footer className="footer">
                <div className="row">
                    <div className="col-md-6 ftr">
                        <p>Crafted with lots of time and love!</p>
                    </div>
                    <div className="col-md-6 icons">
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