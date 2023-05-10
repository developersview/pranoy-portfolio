import React from 'react'
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>PRANOY CHAKRABORTY</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://www.facebook.com/igpranoy'><FaFacebookF /></a>
                <a href='https://www.instagram.com/ig_pranoy'><FiInstagram /></a>
                <a href='https://www.twitter.com/ig_pranoy'><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2023 Pranoy Chakraborty. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer