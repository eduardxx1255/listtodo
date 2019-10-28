import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom';
import New from './new';


class Pendiente extends React.Component {
    render() {
        return (
            <Router>
            <New />

            <section className="pendientes">
                <div className="pendiente">
                    <input className="chulo" type="checkbox"></input>
                    <p>Esta es una nota de ejemplo, asi es como se veran tus pendientes por hacer </p>
                    <button className="borrar">Borrar</button>
                </div>
            </section>
            </Router>

        )
    }
}

export default Pendiente