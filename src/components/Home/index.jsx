
import { Link } from 'react-scroll'
import './index.css'
import Me from '../imgs/myimg.png'

import { LinkdInSVG, GitHubSVG, InstaSVG, xsvg, WhatsAppSVG, eMailSVG, fileDownload } from '../svg'
const Landing = () => {
    
    return (
        <>
            <div className="container">
                <div className="headline">
                    <p className="line1">Hi, my name is,</p>
                    <div className="name">Shubham Patil.</div>
                    <div className="whatIdo">I build things for the Web.</div>
                    <div className="actioncall">
                        <button> <Link to="contactme" smooth={true} duration={500}> <div className="btntxt">contact me</div></Link></button>
                        <button>
                            <div className="SVGs" id="resume">
                                {fileDownload}
                            </div>
                            <div className="btntxt">Resume</div>
                        </button>
                    </div>
                    <div className="MyLinks">
                        <div className="SVGs">
                            <a href="https://www.linkedin.com/in/shubham-patil-b4551a202" target="_blank" rel="noopener" >
                                {LinkdInSVG}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="https://github.com/DevShubhamPatil" target="_blank" rel="noopener" >
                                {GitHubSVG}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="https://www.instagram.com/shubham.ig" target="_blank" rel="noopener" >
                                {InstaSVG}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="https://x.com/DevShubhamPatil" target="_blank" rel="noopener" >
                                {xsvg}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="https://wa.me/+918378825977" target="_blank" rel="noopener" >
                                {WhatsAppSVG}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="mailto: to.shubhpatil@gmail.com" target="_blank" rel="noopener" >
                                {eMailSVG}
                            </a>
                        </div>
                    </div>

                </div>
                <div className="mainbodycontainer">
                <div className="bodycontainer" id="avatar">
                    <img id="face" className="face" src={Me} alt="" />
                </div>
                
                </div>
            </div>

        </>
    )
}

export default Landing