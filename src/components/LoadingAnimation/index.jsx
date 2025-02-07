import React from "react";
import './index.css'

const LoadingAnimation = ()=>{


    return (
        <div className="box">
        <svg className="svgclass">
            <text x="87" y="115" className="text">S
            </text>
            <polygon points="100,50 60,75 60,125 100,150 140,125 140,75 100,50" fill="none" stroke="lightblue"
                strokeWidth="5" strokeDasharray="1000" strokeDashoffset="1000" strokeLinecap="round">
                <animate 
                attributeName="stroke-dashoffset" 
                from="1000" 
                to="0" dur="1.1s" 
                repeatCount="1" 
                keyTimes="0;1"
                keySplines="0.75, 0, 1, 1"
                calcMode="spline"
                fill="freeze">
                </animate>
            </polygon>
        </svg>
    </div>
    )
}

export default LoadingAnimation