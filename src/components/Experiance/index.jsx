import './index.css'

const Experiance = () => {
    const data = `• Led the development of a message parsing application to automate the XML messages generation from text files to be processed by downstream application, Improving the trade processing speed by 20%.\n• Enhanced security compliance by integrating Vault to eliminate hardcoded passwords and certificates by 100%, collaborating with cross-functional teams to strengthen security protocols and mitigate risks.\n• Reduced system downtime by 25% with problem-solving and teamwork with colleagues and cross-functional teams to resolve critical production issues, fix the disaster recovery (DR) of an application, and remove Vulnerable dependencies from applications.\n• Lowered operational costs by 15% by leading the decommissioning of legacy applications and infrastructure\n• Ensured regulatory compliance by archiving data, mitigating potential legal risks through attention to detail.`

    const togglereadmore = () => {
        const cs = document.getElementById('cs') 
        cs.classList.toggle('preclass')
    } 
    return (
        <div className="ExpContainer">
            <div className="skillheading hidden">Experiance</div>
            <div className="EContent">
                <div className="line"></div>
                <div className="expdetails">
                    <div className="expcontdumy hidden"></div>

                    <div className="expcont hidden">
                        <div>
                            <span className="line1" style={{fontSize:'1.4em', lineHeight: '1rem', padding: '5px', marginLeft: '-15px' }}>
                                Credit Suisse (UBS) :
                            </span>
                            <span style={{display:'inline-block'}}>
                                June 2022 - now
                            </span>
                        </div>
                        <div>
                            <pre id='cs' className='preclass' onClick={togglereadmore}>{data}</pre>
                            <div>
                                <span className="line1" style={{ fontSize:'1.15rem', lineHeight: '1rem', padding: '0px', marginRight: '5px' }}>
                                    Tech Stack :
                                </span>
                                Java, Spring Boot, Oracle, React, C#, .NET, APIs, Microservices, Pub/Sub, Docker, CI/CD, Agile.
                            </div>
                        </div>

                    </div>

                    <div className="expcontdumy hidden"></div>

                    <div className="expcont hidden">
                        <span className="line1" style={{fontSize:'1.4rem', lineHeight: '1rem', padding: '5px 20px 5px 5px', marginLeft: '-15px', position: 'relative' }}>
                            Next Adventure
                            <i style={{ fontSize: '2rem', position: 'absolute', top: '0.7rem' }}>!</i>
                        </span>
                        To Be Continued In Next Deployment
                        <span style={{ fontSize: '1.5rem', lineHeight: '0.7rem', letterSpacing: '1px', marginLeft: '2px' }}>
                            ...
                        </span>
                    </div>

                    <div className="expcontdumy hidden"></div>


                </div>
            </div>
        </div>
    )
}

export default Experiance