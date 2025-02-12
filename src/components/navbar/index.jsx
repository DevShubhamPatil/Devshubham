import './index.css'
import { logo } from '../svg'
import LoadingAnimation from '../LoadingAnimation'
import { Link } from 'react-router-dom'
import { fileDownload } from '../svg'
import { useEffect, useState } from 'react'


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navResumeVisible, setNavResumeVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrolled(window.scrollY > 10);
                setNavResumeVisible(window.scrollY > window.innerHeight);
                document.getElementById("logo").style.transform = `rotate(${window.scrollY / 3}deg)`
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
                        <li className='nav_link'> <Link>about</Link> </li>
                        <li className='nav_link'> <Link>about</Link> </li>
                        <li className='nav_link'> <Link>about</Link> </li>
                        <li className='nav_link'> <Link>about</Link> </li>
                        <li className={`nav_link btn_li ${navResumeVisible ? "" : "invisible"}`}> <button className='resumeBTN'>
                            <div className="navbtnsvg" id="resume">
                                {fileDownload}
                            </div>
                            <div className="navbtntext">
                                Resume
                            </div>
                        </button> </li>
                    </ol>
                </div>
            </nav>
        </>
    )
}

export default Navbar