import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import './footer.css';

function Footer(){
    return(
        <footer className="footer d-flex flex-column gap-3">
            <FooterItem icon={<FaRegCopyright size={20}/>} text={'Copyright. Moka, marca registrada'}/>
            <FooterItem icon={<FaInstagram size={20} />} text={'@moka-bga'}/>
            <FooterItem icon={<FaPhoneAlt size={20} />} text={'+57 302 7343613'}/>
        </footer>
    );
}

function FooterItem({ icon, text }){
    return(
        <div className="d-flex align-items-center gap-3">
            { icon }
            { text }
        </div>
    );
}

export { Footer };