import React from "react";
import './floatingActionButton.css';
import { FaWhatsapp } from "react-icons/fa";

const FloatingActionButton = () => {
    const shortLink = 'https://wa.me/573027343613?text=Hola, Moka, estoy interesado en una torta personalizada www.mokatortas.com';
    return(<>
        <a href={shortLink} target="_blank" rel="noreferrer" class="btn-wsp">
            <FaWhatsapp size={40}/>
        </a>
    </>);
}

export { FloatingActionButton };