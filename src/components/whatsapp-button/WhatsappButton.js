import React from "react";
import './whatsappButton.css';
import { FaWhatsapp } from "react-icons/fa";


function WhatsappButton({ bntText, link , margin = true, small = true}){
    const shortLink = 'https://wa.me/573027343613?text=Hola, Moka, estoy interesado en una torta personalizada www.mokatortas.com';
    const sytles = {
        fontSize: small ? '0.9rem' : '1.1rem',
        fontWeight: small ? '200' : '600',
        margin: margin ? '10px 10% 10px 10%' : '0px',
    }
    return(
        <div>
            <button onClick={() => { window.open(link ? link : shortLink) }} className="whatsapp-button" style={sytles}>
                
                    <div className="d-flex align-items-center gap-1">
                        <FaWhatsapp size={small ? 25 : 28}/>
                        { bntText ? bntText : 'Hablemos por Whatsapp' }
                    </div>
                
            </button>
        </div>
    );
}

export { WhatsappButton }; 