import React from "react";
import './index.css'

const LoadingAnimation = ()=>{
    return (
        <div className="box">
        <svg className="svgclass">
            <text x="87" y="115" className="text">S
            </text>
            <polygon points="100,50 60,75 60,125 100,150 140,125 140,75 100,50" fill="none" 
                strokeWidth="5" strokeDasharray="290" strokeDashoffset="290" strokeLinecap="round">
                <animate 
                attributeName="stroke-dashoffset" 
                from="290" 
                to="0" dur="1.5s"
                begin="0.3s"
                repeatCount="1" 
                keyTimes="0;1"
                keySplines="0.77 0 0.18 1"
                calcMode="spline"
                fill="freeze">
                </animate>
            </polygon>
        </svg>
    </div>
    )
}

export default LoadingAnimation