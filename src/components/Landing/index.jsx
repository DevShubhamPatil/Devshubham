import LoadingAnimation from "../LoadingAnimation"
import './index.css'
import Head from '../imgs/head3.jpg'
import EyeBrow from '../imgs/eb.jpg'
import Eye from '../imgs/eye.jpg'
import Body from '../imgs/body.jpg'

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
        const degree =  Math.atan((mousey- avatary)/(mousex-avatarx)) *(180/Math.PI) // claculates angle of mouse location with y axis if avatar center is the origin 
        const deg = (degree*MaxHeadRotationDeg)/90
        let yleft =y; 
        let yright =y; 


        if (mousey < avatary) {    
            let eyeleveldiff = ((avatary - mousey)*2.5)/avatary
            if (mousex > avatarx) {
                eyebroLeft.style.transform = `translateY(${avatary - 7 + y}px)`
                eyebroRight.style.transform = 'translateY(0px)';
                face.style.transform = `rotate(${deg}deg)`;
                yright = y - eyeleveldiff
            }

            if (mousex < avatarx) {
                eyebroRight.style.transform = `translateY(${avatary - 7 + y}px)`
                eyebroLeft.style.transform = 'translateY(0px)';
                face.style.transform = `rotate(${deg}deg)`;
                yleft = y -eyeleveldiff
            }
        } else {
            eyebroRight.style.transform = 'translateY(0px)';
            eyebroLeft.style.transform = 'translateY(0px)';
            face.style.transform = `rotate(0deg)`;
        }
        eyeLeft.style.transform = `translate(${avatarx - MovementRange/2 + x}px, ${avatary - MovementRange/2 + yleft}px)`
        eyeRight.style.transform = `translate(${avatarx - MovementRange/2 + x}px, ${avatary - MovementRange/2 + yright}px)`


    })
    return (
        <>
            <LoadingAnimation />
            <div className="cont2">
                <div className="headline">
                    <p className="line1">Hi, my name is</p>
                    <div className="name">Shuhbham Patil.</div>
                    <div className="subname">I build things for the Web.</div>
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