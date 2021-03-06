import React from "react";

import { useHistory } from 'react-router-dom'
import styles from '../componentes/stylos/card.module.css';


export default function Card({ nombre, imagen, dieta, id, puntuacion, }) {

    const history = useHistory();

    function handle_click(e) {
        e.preventDefault();
        history.push(`/detalles/${id}`);
    }

    return (
        <div className={styles.card}>

            <div  className={styles.posicionInfo}>
                
                    <img className={styles.img} src={imagen} alt={"No Se encontro la imagen"} />
                    <button  className={styles.btn}  onClick={handle_click}>Ver Más</button>
                <div className={styles.info}>
                
                   
                        <h3>{nombre}</h3>
                   

                    
                        <h5>Puntuacion Del Plato: {puntuacion}</h5>
                   
                    

                        <h5 >Tipos de dietas:
                    {
                                Array.isArray(dieta) ? dieta.map(d => d.name ? <li> {d.name}</li > : <li key={d}> {d}  </li>) : ""
                            }
                        </h5> 


                  
                    
                </div>
         
            </div>
            
        </div>
        
    )
}
