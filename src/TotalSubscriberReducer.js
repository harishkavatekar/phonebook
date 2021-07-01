
export function TotalSubscriberReducer(state, action){

    switch(action.type){
        case "Update_Count":
            const updatedCount = action.payload;
            return {...state, count: updatedCount};
        default:
            return state;
    }
}