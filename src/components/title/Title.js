import React from "react";

function Title({ children }){

    const style = {
        color: '#E08492',
        fontSize: '1rem',
        fontWeight: '600',
        margin: '60px 10% 0px 10%'
    }   

    return(
        <p style={style}>{ children }</p>
    );
}

export { Title }; 