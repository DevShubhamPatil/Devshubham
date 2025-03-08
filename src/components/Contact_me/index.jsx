import { useState } from 'react'
import './index.css'

const ContactMe = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        option: '',
        message: ''
    })
    const [formerr, setFormerr] = useState({
        name: true,
        email: true,
        option: true,
        message: true
    })

    const showOptions = () => {
        const selectbox = document.getElementById("selectbox");
        selectbox.style.top = window.innerWidth>826? '178px':'255px'
        selectbox.style.opacity = '1'
        selectbox.style.visibility = 'visible'
    }
    const hideOptions = () => {
        const selectbox = document.getElementById("selectbox");
        selectbox.style.top =  window.innerWidth>826? '140px':'205px'
        selectbox.style.opacity = '0'
        selectbox.style.visibility = 'hidden'
    }
    const handleOptionClick = (e) => {
        setFormData(prevState => ({
            ...prevState,
            option: e.target.getAttribute('value')
        }))
    }
    const validate = (id) => {
        if (id == 'name') {
            console.log("checking name : length : "+ formData.name.length)
            if (formData.name.length < 2) {
                setFormerr((prevState => ({
                    ...prevState,
                    name: true
                })))
                console.log('ERR')
            } else {
                document.getElementById('name').style.border = 'none'
                setFormerr((prevState => ({
                    ...prevState,
                    name: false
                })))
                console.log('NO ERR')
            }
        } else {
            if (!emailRegex.test(formData.email)) {

                setFormerr((prevState => ({
                    ...prevState,
                    email: true
                })))
            } else {
                document.getElementById('email').style.border = 'none'
                setFormerr((prevState => ({
                    ...prevState,
                    email: false
                })))
            }
        }
    }

    const handleSubmit = () => {
        if (formerr.name) {
            document.getElementById('name').style.border = '2px red solid'
            if (formerr.email) {
                document.getElementById('email').style.border = '2px red solid'
            }
            console.log("return")
            return
        } else {
            if (formerr.email) {
                document.getElementById('email').style.border = '2px red solid'
                console.log("return")
                return
            }
            console.log(formData)
        }
    }

    const handleChange = (e) => {
        console.log("in here")
        const { id, value } = e.target
        validate(id)
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    return (
        <div className="contact_container">
            <div className="heading_cont">
                <div className="heading">LET'S WORK</div>
                <div className="subheading">TOGETHER</div>
            </div>
            <div className="form_cont">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="group half">
                        <label htmlFor="name" id='nameL'>Name</label>
                        <input onChange={handleChange} type="text" id='name' placeholder='Your Name' />
                    </div>
                    <div className="group half">
                        <label htmlFor="email" id='emailL'>Email</label>
                        <input onChange={handleChange} type="email" id='email' placeholder='your@email.com' />
                    </div>
                    <div className="group full">
                        <label htmlFor="EnquiryType" >Enquiry Type</label>
                        <input type="" onFocus={(e) => showOptions(e)} onBlur={(e) => { hideOptions(e) }} id='EnquiryType' placeholder='-- Select --' value={formData.option} readOnly />
                        <div className="selectbox" id='selectbox' >
                            <div className="options" value='Job Oportunity' onClick={(e) => handleOptionClick(e)}>Job Oportunity</div>
                            <div className="options" value='Freelance Project' onClick={(e) => handleOptionClick(e)}>Freelance Project</div>
                            <div className="options" value='Collaboration' onClick={(e) => handleOptionClick(e)}>Collaboration</div>
                            <div className="options" value='Other' onClick={(e) => handleOptionClick(e)}>Other</div>
                        </div>
                    </div>
                    <div className="group full">
                        <label htmlFor="message">Message</label>
                        <textarea onChange={handleChange} id="message" placeholder="What brings you here ?"></textarea>
                    </div>
                    <div className="frmbtncontainer full">
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactMe