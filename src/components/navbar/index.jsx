import './index.css'
import { logo } from '../svg'
import LoadingAnimation from '../LoadingAnimation'
import { Link } from 'react-router-dom'
import {fileDownload } from '../svg'

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className='logocontainer'>
                    <div className="Slogo">s</div>
                    {logo}
                </div>
                <div className="navlinks_container">
                    <ol className='navlinks'>
                        <li className='nav_link'> <Link>about</Link> </li>
                        <li className='nav_link'> <Link>about</Link> </li>
                        <li className='nav_link'> <Link>about</Link> </li>
                        <li className='nav_link'> <Link>about</Link> </li>
                        <li className='nav_link btn_li'> <button className='resumeBTN'>
                            <div className="navbtnsvg" id="resume">
                                {fileDownload}
                            </div>
                            <div className="navbtntext">
                            Resume
                            </div>
                            </button> </li>
                    </ol>

                </div>
            </nav>
        </>
    )
}

export default Navbar