import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../NavbarStyle.css'

const Navbar = () => {
    const [showAbout, setShowAbout] = useState(false); 
    const handleClickAbout = () => {
        setShowAbout(true);
    };
    const closeModel = () => {
        setShowAbout(false);
    };

    return(
        <>
        
        <nav className='navbar'>
            <div className='navbar-left'>
                <div>
                    <img src='./KoostLogo.png' 
                    alt='Koost-Logo' 
                    className='logo' 
                    onClick={handleClickAbout}
                    />
                </div>
                <div className='navbar-home-links'>

                    <Link to='/' style={{marginRight: '10px', color:'white', textDecoration: 'none'}}>Home</Link>
                    <Link to='/about' style={{marginRight: '10px', color:'white', textDecoration: 'none'}}>About</Link>
                </div>
            </div>
            <div className='navbar-right'>
                <div className='dropdown'>
                    <button className='dropbtn'>Courses</button>
                    <div className='dropdown-content'>
                        <ul className='navbar-links'>
                            <li>
                                <Link to='courses/corejava' style={{color:'white', textDecoration:'none'}}>Core Java</Link>                               
                          </li>
                            <li>
                                <Link to='courses/microservices' style={{color:'white', textDecoration:'none'}}>Microservices</Link>
                            </li>
                            <li>
                                <Link to='courses/springboot' style={{color:'white', textDecoration:'none'}}>Springboot</Link>
                            </li>
                        </ul>
                    </div>
                    <input type='text' placeholder='Search courses..' className='search-box' />
                </div>
            </div>
        </nav>
        {showAbout && (
            <div className='about-modal'>
                <div className='about-content'></div>
                <h2>About Koost</h2>
                <p> Koost is a Java learning portal designed to help developers master
              backend concepts, explore microservices, and build cloud-native
              applications. Dive into curated notes, interactive examples, and
              intuitive UI.</p>
              <button onClick={closeModel}>Close</button>
            </div>
        )}
        
        </>
    );


}

export default Navbar;
