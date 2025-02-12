import './index.css'

const ContactMe = () => {
    return (
        <div className="contact_container">
            <div className="heading_cont">
                <div className="heading">LET'S WORK</div>
                <div className="subheading">TOGETHER</div>
            </div>
            <div className="form_cont">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="group half">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='Your Name' />
                    </div>
                    <div className="group half">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='your@email.com' />
                    </div>
                    <div className="group full">
                        <label htmlFor="EnquiryType">Enquiry Type</label>
                        <input type="" id='EnquiryType' placeholder='-- Select --' />
                    </div>
                    <div className="group full">
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="message" placeholder= "What brings you here ?"></textarea>
                    </div>
                    <div className="frmbtncontainer full">
                    <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactMe