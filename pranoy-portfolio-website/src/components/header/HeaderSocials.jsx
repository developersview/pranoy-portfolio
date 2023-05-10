import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/pranoy-chakraborty/' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/developersview' target='_blank'><BsGithub /></a>
            <a href='https://medium.com/@pranoy8086' target='_blank'><BsMedium /></a>
        </div>
    )
}

export default HeaderSocials