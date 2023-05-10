import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What Work I Do</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Frontend/ Web</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Working with HTML, CSS and JavaScript</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Good Knowledge on React</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Experienced with Bootstrap</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Good knowledge on MVC and Java Server Pages </p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Backend Works</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Experience in designing and developing Java web-based applications.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Experience in developing SpirngBoot Application.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Highly experienced in migrating Log4j v1.x to v2.17.x Worked and fixed CVE-2022-23302 Log4j
                                vulnerability</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Strong knowledge of JWT authentication using Spring Boot 3 and OAuth 2.0 authentication and
                                authorization.</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Miscellaneous</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Have experience in working with Microsoft Azure SQL and SQL Server</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Very good working experience in building, testing of Azure Logic Apps. </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Strong Knowledge in Azure DevOps, created build and release pipelines as well.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Certified in AZ-900 (Azure Fundamentals)</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services