import React from "react";


class Input extends React.Component {
    render() {
        return (
            <div className="busqueda">
                <input className="entrada" type="submint"></input>
                <button type="button" className="boton">Buscar</button>
            </div>
        )
    }
}


export default Input;