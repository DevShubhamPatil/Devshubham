import './index.css'
import { hamb, logo } from '../svg'
import LoadingAnimation from '../LoadingAnimation'
import { Link } from 'react-scroll'
import { fileDownload } from '../svg'
import { useEffect, useState } from 'react'


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navResumeVisible, setNavResumeVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrolled(window.scrollY > 10);
                setNavResumeVisible(window.scrollY > (window.innerWidth > 826 ? window.innerHeight / 2 : window.innerHeight * 0.75));
                document.getElementById("logo").style.transform = `rotate(${window.scrollY / 4}deg)`
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav id="nav" className={`navbar ${scrolled ? "shadow" : ""}`}>
                <div className='logocontainer'>
                    <div className="Slogo">s</div>
                    {logo}
                </div>
                <div className="navlinks_container">
                    <ol className='navlinks'>
                        <li className='nav_link'> <Link to="home" smooth={true} duration={500}>About</Link> </li>
                        <li className='nav_link'> <Link to="Skills" smooth={true} duration={500}>Tech Skills</Link> </li>
                        <li className='nav_link'> <Link to="contactme" smooth={true} duration={500}>ContactMe</Link> </li>
                        <li className='nav_link'> <Link to="about" smooth={true} duration={500}>about</Link> </li>
                        <li className={`nav_link btn_li ${navResumeVisible ? "" : "invisible"}`}>
                            <button className='resumeBTN'>
                                <div className="navbtnsvg" id="resume">
                                    {fileDownload}
                                </div>
                                <div className="navbtntext">
                                    {window.innerWidth < 826 ? 'CV' : 'Resume'}
                                </div>
                            </button> </li>
                        <li className='nav_link btn_li'>
                            <div className="hamBContainer">
                                {hamb}
                            </div>
                        </li>

                    </ol>
                </div>
            </nav>
        </>
    )
}

export default Navbar