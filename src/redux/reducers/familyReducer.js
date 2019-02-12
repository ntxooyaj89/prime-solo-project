import { combineReducers } from 'redux';
import { stat } from 'fs';

const familyMember = (state = [], action) =>{
    if(action.type === 'SET_FAMILY'){
        return action.payload;
    }
    return state;
};

const MyFamilyName = (state = [], action) => {
    if(action.type === 'SET_FAMILY_NAME'){
        return action.payload;
    }
    return state;
}

export default combineReducers({
    familyMember,
    MyFamilyName
})