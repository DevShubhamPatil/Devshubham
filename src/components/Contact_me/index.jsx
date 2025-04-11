import { useRef, useState } from 'react'
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
    const [submiting, setSubmiting] = useState(false);


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

    const handleChange = (e) => {
        const { id, value } = e.target
        validate(id, value)
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const validate = (id, value) => {
        if (id == 'name') {
            if (value.length < 2) {
                setFormerr((prevState => ({
                    ...prevState,
                    name: true
                })))
            } else {
                document.getElementById('name').style.border = 'none'
                setFormerr((prevState => ({
                    ...prevState,
                    name: false
                })))
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
        if (formerr.name || formerr.email || formerr.message || formerr.EnquiryType) {
            if (formerr.name)
                document.getElementById('name').style.border = '2px red solid'
            if (formerr.email)
                document.getElementById('email').style.border = '2px red solid'
            if (formerr.message)
                document.getElementById('message').style.border = '2px red solid'
            if (formerr.EnquiryType)
                document.getElementById('EnquiryType').style.border = '2px red solid'
            return
        } else {
            setSubmiting(true)
            console.log("------------------- form data --------------------")
            console.log(formData)
            sendEmail()
        }
    }

    const sendEmail = async () => {
        const URL = "https://api.brevo.com/v3/smtp/email"
        const key = process.env.REACT_APP_BREVO

        const response = await fetch(URL,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": key
                },
                body: JSON.stringify({
                    sender: { email: "shubh31patil@gmail.com", name: formData.name },
                    to: [{ email: "to.shubhpatil@gmail.com", name: "Shubham Patil" }],
                    subject: `DevShubham:${formData.EnquiryType} From ${formData.name}`,
                    htmlContent: `<p>${formData.message}</p>
                    <hr>
                    <p>From</p>
                    <p>${formData.name}</p>
                    <p>${formData.email}</p>`
                })
            })
        const data = await response.json();
        if (response.ok) {
            setSubmiting(false)
            setTimeout(() => {
            playSendBtnAnimaton()
        }, 1);
            setFormData({
                name: '',
                email: '',
                EnquiryType: '',
                message: ''
            })
        }
        else {
            alert("Failed to deliver your message ☹️\nPlease connect using other links in About ")
            setSubmiting(false)
            console.log(JSON.stringify(data))
        }
    }

    const playSendBtnAnimaton= () =>{
        const btnname = document.getElementById('btnname')
        btnname.style.setProperty('--submitanimation', 'submit 6s')
        setTimeout(() => btnname.style.setProperty('--submitanimation', 'none'), 6000)
    }
    
    return (
        <div className="contact_container">
            <div className="heading_cont hidden">
                <div className="heading">LET'S WORK</div>
                <div className="subheading">TOGETHER</div>
            </div>
            <div className="form_cont">
                <form className='hidden' onSubmit={(e) => e.preventDefault()}>
                    <div className="group half">
                        <label htmlFor="name" id='nameL'>Name</label>
                        <input onChange={handleChange} type="text" id='name' placeholder='Your Name' value={formData.name}/>
                    </div>
                    <div className="group half">
                        <label htmlFor="email" id='emailL'>Email</label>
                        <input onChange={handleChange} type="email" id='email' placeholder='your@email.com' value={formData.email} />
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
                        <textarea onChange={handleChange} id="message" placeholder="What brings you here ?" value={formData.message}></textarea>
                    </div>
                    <div className="frmbtncontainer full">
                        <button id='frmbtn' type='submit' onClick={handleSubmit}><div className="btnnamecontainer">{submiting ? <div className='loader'></div> :<div className="btnname" id='btnname'></div>}</div></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactMe