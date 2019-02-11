import { combineReducers } from 'redux';

const familyMember = (state = [], action) =>{
    if(action.type === 'SET_FAMILY'){
        return action.payload;
    }
    return state;
};

export default combineReducers({
    familyMember
})