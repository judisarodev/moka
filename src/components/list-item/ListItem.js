import React from "react";
import './listItem.css';

function ListItem({ index, text }){
    return(
        <li key={index} className="d-flex align-items-center list-item gap-3">
            <div className="list__index">
                <p>{ index }</p>
            </div>
            <p className="list__text">{ text }</p>
        </li>
        
    );
}

export { ListItem }