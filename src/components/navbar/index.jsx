import './index.css'
import { hamb, logo } from '../svg'
import { Link } from 'react-scroll'
import { fileDownload } from '../svg'
import { useEffect, useRef, useState } from 'react'


const Navbar = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [navResumeVisible, setNavResumeVisible] = useState(false);
    const [vw, setVW] = useState(window.innerWidth)
    const [vh, setVH] = useState(window.innerHeight)
    const isAClick = useRef(false)
    const section = useRef(-1)
    const { refs } = props

    const getCurrentSection = () => {
        const windowCenter = window.innerHeight*(0.45)
        for (let ref of refs) {
            const top = ref.current.getBoundingClientRect().top
            const bottom = ref.current.getBoundingClientRect().bottom
            if (top <= windowCenter && bottom >= windowCenter) {
                return ref.current.id.charAt(0)
            }
        }
        return 0
    }

    const handleScroll = () => {
        // get currecnt section
        var cursection = getCurrentSection()
        // apply selection annimation if the section is changhed and its not changed by clicking
        if (section.current != cursection && !isAClick.current) {
            handleMouseHover(document.getElementById(section.current < 0 ? 0 : section.current), document.getElementById(cursection))
            section.current = cursection
        }

        setScrolled(window.scrollY > 10);
        setNavResumeVisible(window.scrollY > (vw > 826 ? vh / 2 : vh * 0.75));
        document.getElementById("logo").style.transform = `rotate(${window.scrollY / 4}deg)`
        document.getElementById("hexa").setAttribute('filter', 'url(#glowing)')
        setTimeout(() => {
            document.getElementById("hexa").setAttribute('filter', '')
        }, 1000);

    };

    useEffect(() => {
        const setDiamentions = () => {
            setVW(window.innerWidth)
            setVH(window.innerHeight)
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", setDiamentions)
        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", setDiamentions)

        };
    }, []);

    const handleMouseHover = (source, destination, b = 1) => {
        const destinationPosition = destination.getBoundingClientRect().left;
        const startpoint = document.getElementById('actvbg').getBoundingClientRect().left
        if (source === destination || (startpoint + 15) === destinationPosition) {
            return
        }

        const destId = Number(destination.id)
        const sourceId = Number(source.id)
        const destWidth = destination.getBoundingClientRect().width + 30
        const jump = destId - sourceId;
        const extra = (15 + Math.abs(jump)) * jump;

        const animation = [{ left: startpoint + 'px', offset: 0 },
        { left: (destinationPosition + extra) + 'px', width: (destWidth) + 'px', offset: 0.3 },
        { left: (destinationPosition + extra) + 'px', width: (destWidth - 20) + 'px', offset: 0.37 },
        { left: (destinationPosition - (extra / 2)) + 'px', width: destWidth + 'px', offset: 0.6 },
        { left: (destinationPosition + (extra / 4)) + 'px', width: destWidth + 'px', offset: 0.85 },
        { left: destinationPosition + 'px', width: destWidth + 'px', offset: 1 }]
        const options = {
            duration: jump > 2 ? 800 : 650,
            fill: 'forwards'
        }
        document.getElementById('actvbg').animate(animation, options)

    }
    const onlinkclick = () => {
        console.log("clicked1")
        isAClick.current = true;
        setTimeout(() => {
            isAClick.current = false;
        }, 300);
    }

    return (
        <>
            <nav id="nav" className={`navbar ${scrolled ? "shadow" : ""}`}>
                <div className='logocontainer'>
                    <div className="Slogo">s</div>
                    {logo}
                </div>
                <div className="navlinks_container">
                    <ol className='navlinks'>
                        <li className='nav_link' onMouseEnter={(e) => handleMouseHover(document.getElementById(section.current < 0 ? 0 : section.current), e.currentTarget)} onMouseLeave={(e) => handleMouseHover(e.currentTarget, document.getElementById(section.current < 0 ? 0 : section.current))} id='0' data-active='false'> <Link style={{padding:'10px 0px'}} onClick={onlinkclick} to="home" smooth={true} duration={350} >About</Link> </li>
                        <li className='nav_link' onMouseEnter={(e) => handleMouseHover(document.getElementById(section.current < 0 ? 0 : section.current), e.currentTarget)} onMouseLeave={(e) => handleMouseHover(e.currentTarget, document.getElementById(section.current < 0 ? 0 : section.current))} id='1' data-active='flase'> <Link style={{padding:'10px 0px'}} onClick={onlinkclick} to="Skills" smooth={true} duration={350}>Tech Skills</Link> </li>
                        <li className='nav_link' onMouseEnter={(e) => handleMouseHover(document.getElementById(section.current < 0 ? 0 : section.current), e.currentTarget)} onMouseLeave={(e) => handleMouseHover(e.currentTarget, document.getElementById(section.current < 0 ? 0 : section.current))} id='2' data-active='false'> <Link style={{padding:'10px 0px'}} onClick={onlinkclick} to="contactme" smooth={true} duration={350}>Contact Me</Link> </li>
                        {/* <li className='nav_link' onMouseEnter={(e) => handleMouseHover(document.getElementById(section.current < 0 ? 0 : section.current), e.currentTarget)} onMouseLeave={(e) => handleMouseHover(e.currentTarget, document.getElementById(section.current < 0 ? 0 : section.current))} id='3' data-active='false'> <Link onSetActive={(to)=>console.log(to)} to="about" smooth={true} duration={350}>about</Link> </li> */}
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
                        <div className="active" id='actvbg'></div>

                    </ol>
                </div>
            </nav>
        </>
    )
}

export default Navbar