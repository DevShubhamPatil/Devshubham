import './index.css'
import { logo } from '../svg'
import LoadingAnimation from '../LoadingAnimation'

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className='logocontainer'>
                    <div className="Slogo">s</div>
                    {logo}
                </div>
            </div>
        </>
    )
}

export default Navbar