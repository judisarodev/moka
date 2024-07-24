import React from "react";
import './card.css';
import { useNavigate } from "react-router-dom";

const CardComponent = ({ productId, title, fileName}) => {
    const image = `https://backend.mokatortas.com/images/${ fileName }`;
    const navigate = useNavigate();

    return(<>
        <div className="card__container" onClick={() => navigate(`/detalle/${productId}`)}>
            <p className="card__title">{ title }</p>
            <img src={image} className="card__image" alt="Imagen de torta"/>
        </div>        
    </>);
}

export { CardComponent }; 