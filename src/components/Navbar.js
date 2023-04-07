import { NavLink } from 'react-router-dom';
import './Navbar.css';

 function Navbar() {
    return(
        
        <div className="container-fluid bg">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand">kKyser</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    {/* <a className={currentPage === 'Homepage' ? "nav-link active" :'nav-link'} aria-current="page" href="#hompage.js"
                    onClick={() => handlePageChange('Homepage')}>Home</a> */}
                    <NavLink to="/" className={({ isActive, isPending}) => isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"}>Home</NavLink>
                    <NavLink to="/About" className={({ isActive, isPending}) => isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"}>About</NavLink>
                    <NavLink to="/Works" className={({ isActive, isPending}) => isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"}>Works</NavLink>
                    <NavLink to="/Contact" className={({ isActive, isPending}) => isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"}>Contact</NavLink>

                    {/* <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#About.js"  
                    onClick={() => handlePageChange('About')}>About Me</a> */}

                    {/* <a className={currentPage === 'Works' ? 'nav-link active' : 'nav-link'} href="#Works.js"
                    onClick={() => handlePageChange('Works')}>Works</a> */}

                    {/* <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#Contact.js"
                    onClick={() => handlePageChange('Contact')}>Contact</a> */}
                  </div>
                </div>
              </div>
            </nav>
        </div> 
       
    );
}

export default Navbar;