import React from "react";
import './whatsappButton.css';
import { FaWhatsapp } from "react-icons/fa";


function WhatsappButton({ action }){
    const text = 'Hola, Moka, estoy interesado en una torta personalizada www.mokatortas.com';
    const ecodedText = encodeURIComponent(text);

    return(
        <div>
            <a href={`https://wa.me/573027343613?text=${text}`} target="_blank" rel="noreferrer">
                <button onClick={action} className="whatsapp-button">
                    <div className="d-flex align-items-center gap-1">
                        <FaWhatsapp size={25}/>
                        Hablemos por Whatsapp
                    </div>
                </button>
            </a>
        </div>
    );
}

export { WhatsappButton }; 