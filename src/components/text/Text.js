import React from "react";

function Text({ children, primary = false, light = false }){
    const style = {
        color: primary ? '#333333' : (light ? 'white' : '#666666'),
        textAlign: 'justify',
        fontSize: '0.9rem',
        margin: '0px 10% 20px 10%',
        fontWeight: primary ? '500' : '300',
    }

    return(
        <p style={style}>{ children }</p>
    );
}

export { Text }; 