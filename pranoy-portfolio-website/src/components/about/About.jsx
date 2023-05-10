import React from 'react'
import './About.css';
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt='About Image' />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <div className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Skills</h5>
                            <small>3+ Years Working</small>
                        </div>
                        <div className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Company</h5>
                            <small>Software Engineer at CGI</small>
                        </div>
                        <div className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>Multiple technologies and Fullstack</small>
                        </div>
                    </div>
                    <p>
                        I have 2.9 Years of IT experience in analysis, design, documentation, Enhancement and development of applications in Java and Microsoft Azure, DevOps. Having knowledge with advanced technologies such as Java, Spring Boot, SQL Server, Azure DevOps, Logic Apps, Power Automate and Frontend Tools, React. Have a good communication, presentation, analytical, client facing and team management skills.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About