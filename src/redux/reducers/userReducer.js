import * as Actiontype from "../constants/ActionType"
let initialState = {
    listUser: []
}

const userReducer = (state = initialState, action) => {
switch (action.type) {
    case Actiontype.GET_LIST_USER:
       state.listUser = action.data;
        break;

    default:
        break;
}
    return {...state}
}

export default userReducer;