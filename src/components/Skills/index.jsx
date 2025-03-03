import { useEffect } from 'react';
import './index.css'
import { Skillsvg } from '../svg';
import { SkillArr } from './SkillArr';


const Skills = () => {

    const runclickanimation = (event) => {
        const border = event.currentTarget;
        border.style.zIndex = 2
        border.style.animation = 'none'
        void border.offsetWidth;
        border.style.animation = 'bounce 0.6s'
    }

    const borders = document.getElementsByClassName('border')
    useEffect(() => {

        const handleMouseMove = (event) => {
            for (const border of borders) {
                border.style.setProperty('--x', (event.pageX - border.offsetLeft) + 'px')
                border.style.setProperty('--y', (event.pageY - border.offsetTop) + 'px')
            };
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="skillscontainer">
            <div className="skillheading">Tech Skills</div>
            <div className="techcontainer">
                {SkillArr.map((skill) => (
                    <div className="border" onClick={runclickanimation}><div className="content"><div>{skill.svg}</div><div>{skill.title}</div></div></div>
                ))}
            </div>
        </div>
    )
}


export default Skills