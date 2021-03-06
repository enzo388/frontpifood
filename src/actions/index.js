import {
    GET_RECETAS, GET_RECETAS_POR_NOMBRE, GET_TIPOS_DE_DIETA, FILTRAR_POR_TIPO_DE_DIETA, ORDENAR_POR_NOMBRE, ORDENAR_POR_PUNTUACION,
    GET_DETALLES, RESET_DETALLES, POST_RECETA, ORDENAR_POR_PUNTUACION_DIETA
} from '../actions/name';



import axios from 'axios';


export function getRecetas() {
    return async function (dispatch) {
        var recetas = await axios.get("https://enzovazquezportafolio.online/recipes");
        console.log(recetas.data)
        return dispatch({
            type: GET_RECETAS,
            payload: recetas.data
        })
    }
}

export function getRecetas_por_nombre(name) {
    return async function (dispatch) {
        try {
            let recetas = await axios.get('https://enzovazquezportafolio.online/recipes?name=' + name)
            if (recetas.length === 0) {
                console.log(recetas, "entro al if")
            }
            return dispatch({
                type: GET_RECETAS_POR_NOMBRE,
                payload: recetas.data
            })
        } catch (error) {
            console.log(alert('No existe esa receta '));
        }
    }
}

export const getDietas = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('https://enzovazquezportafolio.online/types')
            console.log(data, "dataa")
            return dispatch({
                type: GET_TIPOS_DE_DIETA,
                payload: data
            })
        } catch (err) {
            console.error(err);
        }
    }
}

export const postReceta = (payload) => {
    return async (dispatch) => {
         try {
            const response = await axios.post('https://enzovazquezportafolio.online/recipes', payload)
            return dispatch({type: POST_RECETA, payload: response.data});
        } catch (err) {
            console.error(err);
        } 
     /*    axios.post('http://localhost:3001/recipes', payload)
            .then(
                function (  response  ){
                    return dispatch({type: POST_RECETA, payload: response.data});
                }
            ).catch(
                function (  error  ){
                     return dispatch({type: POST_RECETA, payload: response.data}); 
                    console.log(error)
                }
            )
                 */
            
    }
}

export const getDetalles = (id) => {
    return async (dispatch) => {
        try {
            
            const { data } = await axios.get(`https://enzovazquezportafolio.online/recipes/${id}` );
            return dispatch({
                type: GET_DETALLES ,
                payload: data
            })
        } catch (err) {
            console.log(err)
         alert('No existe ese ID de receta ')
         ;
        }
    }
}

export const reloadDetalles = () => {
    return {
        type: RESET_DETALLES
    }
}

export const filtrar_por_tipo_de_dieta = (payload) => {
    console.log(payload, "payload typo de dieta")
    return {
        type: FILTRAR_POR_TIPO_DE_DIETA,
        payload
    }
}

export const ordenar_por_nombre = (payload) => {
    return {
        type: ORDENAR_POR_NOMBRE,
        payload
    }
}

export const ordenar_por_puntuacion = (payload) => {
    return {
        type: ORDENAR_POR_PUNTUACION,
        payload
    }
}

export const ordenar_por_puntuacion_dieta = (payload) => {
    return {
        type: ORDENAR_POR_PUNTUACION_DIETA,
        
        payload
    }
}
