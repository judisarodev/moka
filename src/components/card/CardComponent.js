import React from "react";
import './card.css';

const CardComponent = ({ title, url }) => {
    const image = `https://backend.mokatortas.com/images/${ url }`;

    return(<>
        <div className="card__container">
            <p className="card__title">{ title }</p>
            <img src={image} className="card__image" alt="Imagen de torta"/>
        </div>        
    </>);
}

export { CardComponent }; 