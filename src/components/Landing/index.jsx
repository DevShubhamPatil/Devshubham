import Home from '../Home';
import Navbar from '../navbar'
import ContactMe from '../Contact_me';
import { Element } from 'react-scroll';
import Skills from '../Skills';
import Footer from '../footer';
import { useEffect, useRef } from 'react';
import Experiance from '../Experiance';




const Landing = () => {
    const homeRef = useRef();
    const skillsRef = useRef();
    const contactmeRef = useRef();
    const expRef = useRef();
    const downloadResume = () => {
        const atag = document.createElement("a")
        atag.setAttribute('href', '/Resume.pdf')
        atag.setAttribute('download', 'Shubham Patil.pdf')
        document.body.appendChild(atag);
        atag.click();
        document.body.removeChild(atag);
    }

    const slidein = () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry,index) => {
                if (entry.isIntersecting) {
                    entry.target.style.transitionDelay =  `${index * 50}ms`
                    entry.target.classList.remove('hidden')
                    observer.unobserve(entry.target)
                }
            })
        },
        {
            root: null,
            rootMargin: `-70% 0px -30% 0px`,
            threshold: 0,
          }
        )

        const hiddenitems = document.querySelectorAll(".hidden");
        hiddenitems.forEach((el) => {
            observer.observe(el);
        });
    }

    useEffect(slidein,[])

    return (
        <div>
            {/* <Navbar downloadResume={downloadResume} refs={{ 'home': homeRef, 'skills': skillsRef, 'contactme': contactmeRef }} /> */}
            <Navbar downloadResume={downloadResume} refs={[homeRef, skillsRef, expRef, contactmeRef]} />
            <Element name='home'>
                <div id="0el" ref={homeRef}>
                    <Home downloadResume={downloadResume} />
                </div>
            </Element>
            <Element name='Skills'>
                <div id="1el" ref={skillsRef}>
                    <Skills />
                </div>
            </Element>
            <Element name='experiance'>
                <div id="2el" ref={expRef}>
                    <Experiance />
                </div>
            </Element>
            <Element name='contactme'>
                <div id="3el" ref={contactmeRef}>
                    <ContactMe />
                </div>
            </Element>
            <Footer />
        </div>
    )
}

export default Landing