import React from 'react';
import './Footer.css'
import FooterNav from './FooterNav';
import FooterSocialNav from './FooterSocialNav';

const Footer = () => {
  return (
    <div id='footer-section'>
        <div id='footer-logo'>
            <p>logoipsum</p>
        </div>
        <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>Incidunt consequuntur amet culpa cum itaque neque.</p></div>
        <FooterNav/>
        <FooterSocialNav/>
    </div>
  )
}

export default Footer