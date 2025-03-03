
import Home from '../Home';
import LoadingAnimation from '../LoadingAnimation';
import Navbar from '../navbar'
import ContactMe from '../Contact_me';
import {Element } from 'react-scroll';
import Skills from '../Skills';


const Landing = () => {
    return (
        <div>
            <Navbar />
            <Element name='home'>
                <Home />
            </Element>
            <Element name='Skills'>
                <Skills />
            </Element>
            <Element name='contactme'>
                <ContactMe />
            </Element>
        </div>
    )
}

export default Landing