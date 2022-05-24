import React from "react";

const Editar = ({ children }) => {
    return <>
        <div className="modal">
            <div className="container">
                <button className="close">Close</button>
                <div className="content"> {children} </div>
            </div>
        </div>
    </>
};

export default Editar;