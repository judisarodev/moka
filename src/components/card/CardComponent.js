import React from "react";
import './card.css';

const CardComponent = ({ productId, title, url, setSelectedProduct }) => {
    const image = `https://backend.mokatortas.com/images/${ url }`;

    return(<>
        <div className="card__container" onClick={() => setSelectedProduct(productId)}>
            <p className="card__title">{ title }</p>
            <img src={image} className="card__image" alt="Imagen de torta"/>
        </div>        
    </>);
}

export { CardComponent }; 