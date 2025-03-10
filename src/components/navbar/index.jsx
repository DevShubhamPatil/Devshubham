import './index.css'
import { hamb, logo } from '../svg'
import { Link } from 'react-scroll'
import { fileDownload } from '../svg'
import { useEffect, useState } from 'react'


const Navbar = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [navResumeVisible, setNavResumeVisible] = useState(false);
    const [vw, setVW] = useState(window.innerWidth)
    const [vh, setVH] = useState(window.innerHeight)
    const [section, setSection] = useState(-1)

    useEffect(() => {
        const setDiamentions = () => {
            setVW(window.innerWidth)
            setVH(window.innerHeight)
        }
        const handleScroll = () => {
            // console.log('vh: ' + vh + ' scroll: ' + window.scrollY + ' sec: ' + window.scrollY / vh + ' floor: ' + Math.floor(window.scrollY / vh))
            var actvbg = document.getElementById('actvbg')
            var actvbgX = actvbg.getBoundingClientRect().left
            var cursection = Math.floor((window.scrollY / vh)+0.45)
            if(section != cursection) {
                setSection(cursection)
                actvbg.style.setProperty('--length',`${document.getElementById(cursection).getBoundingClientRect().width+20}px`)
                actvbg.style.setProperty('--x',`${document.getElementById(cursection).getBoundingClientRect().left }px`)
            }
            requestAnimationFrame(() => {
                setScrolled(window.scrollY > 10);
                setNavResumeVisible(window.scrollY > (vw > 826 ? vh / 2 : vh * 0.75));
                document.getElementById("logo").style.transform = `rotate(${window.scrollY / 4}deg)`
            });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", setDiamentions)
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", setDiamentions)

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
                        <div className="active" id='actvbg'></div>
                        <li className='nav_link' id='0' data-active='false'> <Link to="home" smooth={true} duration={400}>About</Link> </li>
                        <li className='nav_link' id='1' data-active='flase'> <Link to="Skills" smooth={true} duration={400}>Tech Skills</Link> </li>
                        <li className='nav_link' id='2' data-active='false'> <Link to="contactme" smooth={true} duration={400}>ContactMe</Link> </li>
                        <li className='nav_link' id='3' data-active='false'> <Link to="about" smooth={true} duration={400}>about</Link> </li>
                        <li className={`nav_link btn_li ${navResumeVisible ? "" : "invisible"}`}>
                            <button className='resumeBTN' onClick={props.downloadResume}>
                                <div className="navbtnsvg" id="resume">
                                    {fileDownload}
                                </div>
                                <div className="navbtntext">
                                    {vw < 826 ? 'CV' : 'Resume'}
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