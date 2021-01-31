
import * as ACT from '../actions';



export default function data(state={},action){
    console.log(action.payload)
    switch(action.type){
        case ACT.INITIAL:
            return {
                ...state,
                users:action.payload[0],
                questions:action.payload[1]
            }
        case ACT.LOGOUT:
            return{
                users:action.payload[0],
                questions:action.payload[1]
            
            }
        case ACT.LOGIN:
            
            return {...state,current:action.payload}

        default:
            return state
    }
}