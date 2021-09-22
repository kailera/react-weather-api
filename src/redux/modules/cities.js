//types

export const Types = {
    SET_CITY:'cities/SET_CITY',
}

//initial state

export const initialState = {
    city:null,
};

//action

export function setCity(city){
    return {
        type: Types.SET_CITY,
        payload:(city)
    }
}

//reducer

export default function reducer(state=initialState, action){
    switch(action.type){
        case Types.SET_CITY:
            return{...state, city:action.payload};
        
        default:
            return state;
    }
}
