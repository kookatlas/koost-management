import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Svg from './koostSVG'


const Footer = () => {
    return (
    <footer className='footer'>
        <div className='footer-inner'>
            <div className="wave-container">
               <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#621bddff" />
      <stop offset="50%" stopColor="#010713" />
      <stop offset="100%" stopColor="#0740a9" />
    </linearGradient>
  </defs>

  <path
    d="M0,0 C300,150 900,0 1200,150 L1200,200 L0,200 Z"
    fill="url(#waveGradient)"
  >
    <animate
      attributeName="d"
      dur="4s"
      repeatCount="indefinite"
      values="
        M0,0 C300,150 900,0 1200,150 L1200,200 L0,200 Z;
        M0,0 C400,100 800,50 1200,100 L1200,200 L0,200 Z;
        M0,0 C300,150 900,0 1200,150 L1200,200 L0,200 Z"
    />
  </path>
</svg>


            </div>


            <div className='footer-content'>
                <div className='footer-section logo'>
                    <h2><Svg/></h2>
                </div>
                <div className='footer-section links'>
                    <h4>Quick links</h4>
                    <ul className='footer-links'>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/contact'>Contact</a></li>
                     </ul>
                </div>
                <div className='footer-section social'>
                    <h4>Fallow us on</h4>
                    <div className='social-icons'>
                        <a href='https://github.com/kookatlas?tab=repositories' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/kookatla-srinivas-yadav-904016a3/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; {new Date().getFullYear()} Koost. All rights reserved </p>
            </div>
        </div>
    </footer>
    )


}

export default Footer;