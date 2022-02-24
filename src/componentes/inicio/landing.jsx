import React from 'react';
import { useHistory } from 'react-router-dom';
import "../inicio/inicio.css"
import Typewriter from 'typewriter-effect';
function Landing() {
    const history = useHistory();

    function handle_home(e) {
        e.preventDefault();
        history.push("/home");
    }
    return (
        <div className="div-Cointainer" >
            <div className="Cointainer-Title">
                <div>
                    <h1>
                        <Typewriter
                            options={{
                                strings: ['Bienvenido', "RECETARIO ONLINE"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <div >
                    <button onClick={handle_home} className="btn">Inicio</button>
                </div>
            </div>

        </div>
    )
}

export default Landing;