import React from "react";
import './whatsappButton.css';
import { FaWhatsapp } from "react-icons/fa";


function WhatsappButton({ bntText, link }){
    const shortLink = 'https://wa.me/573027343613?text=Hola, Moka, estoy interesado en una torta personalizada www.mokatortas.com';
    return(
        <div>
            <button className="whatsapp-button">
                <a href={link ? link : shortLink} target="_blank" rel="noreferrer" className="whatsappbtn__link">
                    <div className="d-flex align-items-center gap-1">
                        <FaWhatsapp size={25}/>
                        { bntText ? bntText : 'Hablemos por Whatsapp' }
                    </div>
                </a>    
            </button>
        </div>
    );
}

export { WhatsappButton }; 