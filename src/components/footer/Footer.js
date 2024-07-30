import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import './footer.css';

function Footer(){
    return(
        <footer className="footer">
            <FooterItem icon={<FaRegCopyright size={30}/>} text={'copyright Moka'}/>
            <FooterItem action={() => { window.open('https://www.instagram.com/moka_bga/') }} icon={<FaInstagram size={30} />} text={'@moka-bga'}/>
            <FooterItem icon={<FaPhoneAlt size={30} />} text={'+57 302 7343613'}/>
        </footer>
    );
}

function FooterItem({ icon, text, action }){
    const hoverStyle = {
        cursor: action ? 'pointer' : ''
    }
    return(
        <div onClick={action} style={hoverStyle} className="footer-item d-flex align-items-center gap-3">
            <div>
                { icon }
            </div>
            <div>
                { text }
            </div>
        </div>
    );
}

export { Footer };