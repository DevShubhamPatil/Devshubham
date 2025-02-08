import LoadingAnimation from "../LoadingAnimation"
import './index.css'
import Head from '../imgs/head3.jpg'
import EyeBrow from '../imgs/eb.jpg'
import Eye from '../imgs/eye.jpg'
import Body from '../imgs/body.jpg'
import { LinkdInSVG, GitHubSVG, InstaSVG, xsvg, WhatsAppSVG, eMailSVG, fileDownload } from '../svg'
const Landing = () => {
    const vpWidth = window.innerWidth
    const vpCenterX = vpWidth / 2 - 10
    const vpHeight = window.innerHeight
    const vpCenterY = vpHeight / 2 - 10

    document.addEventListener('mousemove', (event) => {

        const eyeLeft = document.getElementById('eyeLeft')
        const eyeRight = document.getElementById('eyeRight')
        const eyebroRight = document.getElementById('eyebroRight')
        const eyebroLeft = document.getElementById('eyebroLeft')
        const face = document.getElementById('face')
        const avatar = document.getElementById('avatar')
        const arect = avatar.getBoundingClientRect()
        const avatarx = arect.left + (arect.width / 2)
        const avatary = arect.top + (arect.height / 2)
        const diffx = avatarx - vpCenterX;
        const diffy = avatary - vpCenterY;
        const mousex = event.clientX
        const mousey = event.clientY
        const MovementRange = 14;
        const MaxHeadRotationDeg = 5;
        const x = (mousex * MovementRange) / (vpWidth + diffx * 2) - avatarx
        const y = (mousey * MovementRange) / (vpHeight + diffy * 2) - avatary
        const degree = Math.atan((mousey - avatary) / (mousex - avatarx)) * (180 / Math.PI) // claculates angle of mouse location with y axis if avatar center is the origin 
        const deg = (degree * MaxHeadRotationDeg) / 90
        let yleft = y;
        let yright = y;


        if (mousey < avatary) {
            let eyeleveldiff = ((avatary - mousey) * 2.5) / avatary
            if (mousex > avatarx) {
                eyebroLeft.style.transform = `translateY(${avatary - 7 + y}px) rotate(8deg)`
                eyebroRight.style.transform = 'translateY(0px) rotate(-8deg)';
                face.style.transform = `rotate(${deg}deg)`;
                yright = y - eyeleveldiff
            }

            if (mousex < avatarx) {
                eyebroRight.style.transform = `translateY(${avatary - 7 + y}px) rotate(-8deg)`
                eyebroLeft.style.transform = 'translateY(0px) rotate(8deg)';
                face.style.transform = `rotate(${deg}deg)`;
                yleft = y - eyeleveldiff
            }
        } else {
            eyebroRight.style.transform = 'translateY(0px) rotate(-8deg)';
            eyebroLeft.style.transform = 'translateY(0px) rotate(8deg)';
            face.style.transform = `rotate(0deg)`;
        }
        eyeLeft.style.transform = `translate(${avatarx - MovementRange / 2 + x}px, ${avatary - MovementRange / 2 + yleft}px)`
        eyeRight.style.transform = `translate(${avatarx - MovementRange / 2 + x}px, ${avatary - MovementRange / 2 + yright}px)`


    })
    return (
        <>
            {/* <LoadingAnimation /> */}
            <div className="container">
                <div className="headline">
                    <p className="line1">Hi, my name is</p>
                    <div className="name">Shubham Patil.</div>
                    <div className="whatIdo">I build things for the Web.</div>
                    <div className="actioncall">
                        <button> <div className="btntxt">contact me</div></button>
                        <button>
                            <div className="SVGs" id="resume">
                                {fileDownload}
                            </div>
                            <div className="btntxt">Resume</div>
                        </button>
                    </div>
                    <div className="MyLinks">
                        <div className="SVGs">
                            <a href="https://www.linkedin.com/in/shubham-patil-b4551a202" target="_blank" >
                                {LinkdInSVG}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="https://github.com/DevShubhamPatil" target="_blank" >
                                {GitHubSVG}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="https://www.instagram.com/shubham.ig" target="_blank" >
                                {InstaSVG}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="https://x.com/DevShubhamPatil" target="_blank" >
                                {xsvg}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="https://wa.me/+918378825977" target="_blank" >
                                {WhatsAppSVG}
                            </a>
                        </div>
                        <div className="SVGs">
                            <a href="mailto: to.shubhpatil@gmail.com" target="_blank" >
                                {eMailSVG}
                            </a>
                        </div>
                    </div>

                </div>
                <div className="bodycontainer" id="avatar">
                    <img id="face" className="face" src={Head} alt="" />
                    <img id="eyebroLeft" className="eyebroLeft" src={EyeBrow} alt="" />
                    <img id="eyebroRight" className="eyebroRight" src={EyeBrow} alt="" />
                    <img id="eyeLeft" className="eyeLeft" src={Eye} alt="" />
                    <img id="eyeRight" className="eyeRight" src={Eye} alt="" />
                    <img id="body" className="body" src={Body} alt="" />
                </div>
            </div>

        </>
    )
}

export default Landing