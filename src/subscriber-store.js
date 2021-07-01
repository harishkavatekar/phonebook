import { createStore } from "redux";

const initialState = {
    "subscribers": []
}

function subscriberReducer(state=initialState, action){

    switch(action.type){
        case "update_subscriber":
            return {...state, "subscribers": action.payload}

        default:
            return state;
    }
}

export default createStore(subscriberReducer);