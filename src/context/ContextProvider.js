import React, { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }){
    const [show, setShow] = useState(true);
    return(
        <Context.Provider value={{ show, setShow }}>
            { children }
        </Context.Provider>
    );
}

export { ContextProvider, Context }