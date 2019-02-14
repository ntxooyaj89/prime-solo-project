import { combineReducers } from 'redux';

// this reducer gets the yang family
const familyMember = (state = [], action) =>{
    if(action.type === 'SET_FAMILY'){
        return action.payload;
    }
    return state;
};

// this reducer all family_Names from family table
const myFamilyName = (state = [], action) => {
    if(action.type === 'SET_FAMILY_NAME'){
        return action.payload;
    }
    return state;
}

const memberOfFamily = (state = [], action) => {
    if(action.type === 'SET_MEMBER'){
        return action.payload;
    }
    return state;
}



// this is the combing the reducer so components can refrence when they need these reducer.
export default combineReducers({
    familyMember,
    myFamilyName,
    memberOfFamily
})