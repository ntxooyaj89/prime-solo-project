import { combineReducers } from 'redux';

// this reducer gets the yang family
const familyMember = (state = [], action) =>{
    if(action.type === 'SET_FAMILY'){
        return action.payload;
    }
    return state;
};

// this reducer gets the chang family
const MyFamilyName = (state = [], action) => {
    if(action.type === 'SET_CHANG_FAMILY'){
        return action.payload;
    }
    return state;
}

// this is the combing the reducer so components can refrence when they need these reducer.
export default combineReducers({
    familyMember,
    MyFamilyName
})