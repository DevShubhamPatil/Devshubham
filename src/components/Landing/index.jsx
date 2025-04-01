import Home from '../Home';
import Navbar from '../navbar'
import ContactMe from '../Contact_me';
import { Element } from 'react-scroll';
import Skills from '../Skills';
import { redirect } from 'react-router-dom';
import Footer from '../footer';


 

const Landing = () => {
    const downloadResume = () =>{
        console.log("doewnload")
        const atag = document.createElement("a")
        atag.setAttribute('href','https://drive.google.com/uc?export=download&id=1_40NA89ByJO9jzvkoVR-2dAzbc-4ZVw3')
        document.body.appendChild(atag);
        atag.click();
        document.body.removeChild(atag);
    }
    return (
        <div>
            <Navbar downloadResume={downloadResume} />
            <Element name='home' >
                <Home downloadResume={downloadResume}/>
            </Element>
            <Element name='Skills'>
                <Skills />
            </Element>
            <Element name='contactme'>
                <ContactMe />
            </Element>
            <Footer/>
        </div>
    )
}

export default Landing