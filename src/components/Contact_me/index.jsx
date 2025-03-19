import { useState } from 'react'
import './index.css'

const ContactMe = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        EnquiryType: '',
        message: ''
    })
    const [formerr, setFormerr] = useState({
        name: true,
        email: true,
        EnquiryType: true,
        message: true
    })

    const showOptions = () => {
        const selectbox = document.getElementById("selectbox");
        selectbox.style.top = window.innerWidth > 826 ? '178px' : '255px'
        selectbox.style.opacity = '1'
        selectbox.style.visibility = 'visible'
    }
    const hideOptions = () => {
        const selectbox = document.getElementById("selectbox");
        selectbox.style.top = window.innerWidth > 826 ? '140px' : '205px'
        selectbox.style.opacity = '0'
        selectbox.style.visibility = 'hidden'
    }
    const handleOptionClick = (e) => {
        setFormData(prevState => ({
            ...prevState,
            EnquiryType: e.target.getAttribute('value')
        }))
        setFormerr((prevState => ({
            ...prevState,
            EnquiryType: false
        })))
        document.getElementById('EnquiryType').style.border = 'none'
    }

    const validate = (id, value) => {
        if (id == 'name') {
            if (value.length < 2) {
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
            return
        }
        if (id == 'email') {
            if (!emailRegex.test(value)) {

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
            return
        }
    
        if (id == 'message') {
            if (value.length < 10) {
                setFormerr((prevState => ({
                    ...prevState,
                    message: true
                })))
            } else {
                document.getElementById('message').style.border = 'none'
                setFormerr((prevState => ({
                    ...prevState,
                    message: false
                })))
            }
        }
    }

        const handleSubmit = () => {
            //  animation-----------------------------------------
            const btnname = document.getElementById('btnname')
            btnname.style.setProperty('--submitanimation', 'submit 2.5s')
            setTimeout(() => btnname.style.setProperty('--submitanimation', 'none'), 3000)
            //  animation-----------------------------------------
            if (formerr.name || formerr.email || formerr.message || formerr.EnquiryType) {
                if (formerr.name)
                    document.getElementById('name').style.border = '2px red solid'
                if (formerr.email)
                    document.getElementById('email').style.border = '2px red solid'
                if (formerr.message)
                    document.getElementById('message').style.border = '2px red solid'
                if (formerr.EnquiryType)
                    document.getElementById('EnquiryType').style.border = '2px red solid'
                console.log("return")
                return
            } else {
                console.log(formData)
            }
        }

        const handleChange = (e) => {
            console.log("in here")
            const { id, value } = e.target
            validate(id, value)
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
                            <input type="" onFocus={(e) => showOptions(e)} onBlur={(e) => { hideOptions(e) }} id='EnquiryType' placeholder='-- Select --' value={formData.EnquiryType} readOnly />
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
                            <button type='submit' onClick={handleSubmit}><div className="btnnamecontainer"><div className="btnname" id='btnname'></div></div></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    export default ContactMe