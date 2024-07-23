import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";

const Container = ({ children }) => {
    const { show } = useContext(Context);
    return(
        <div>{show && <div>{children}</div>}</div>
    );
}

export { Container }; 