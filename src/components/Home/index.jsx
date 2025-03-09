import './index.css'
import Me from '../imgs/myimg.png'

import { LinkdInSVG, GitHubSVG, InstaSVG, xsvg, WhatsAppSVG, eMailSVG, fileDownload, copy } from '../svg'
import client from 'react-dom/client'
import { useState } from 'react'
const Home = (props) => {
    
const handlecopy =(event)=>{
    console.log('handlecopy')
    navigator.clipboard.writeText('npx devshubham')
    const copybtn = document.getElementById('copybtn')
    copybtn.style.setProperty('--visibility','visible')
    setTimeout(()=>{
    copybtn.style.setProperty('--visibility','hidden')
    },1500)
}
    return (
        <>
            <div className="container">
                <div className="headline">
                    <p className="line1">Hi, my name is,</p>
                    <div className="name">Shubham Patil.</div>
                    <div className="whatIdo">I build things for the Web.</div>
                    <div className="actioncall">
                        <button id='copybtn' onClick={handlecopy}>
                        <div className="btntxt">npx devshubham</div>
                            <div className="SVGs" id='copy'>
                                {copy}
                            </div>
                        </button>
                        <button onClick={props.downloadResume}>
                        <div className="btntxt">Resume</div>
                            <div className="SVGs" id="resume">
                                {fileDownload}
                            </div>
                        </button>
                    </div>
                    <div className="MyLinks">
                        <div className="SVGs">
                            <a href="https://www.linkedin.com/in/devshubh" target="_blank" rel="noopener" >
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

export default Home