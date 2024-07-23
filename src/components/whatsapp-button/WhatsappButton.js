import React from "react";
import './whatsappButton.css';
import { FaWhatsapp } from "react-icons/fa";


function WhatsappButton({ action }){
    return(
        <div>
            <button onClick={action} className="whatsapp-button">
                <div className="d-flex align-items-center gap-1">
                    <FaWhatsapp size={25}/>
                    Hablemos por Whatsapp
                </div>
            </button>
        </div>
    );
}

export { WhatsappButton }; 