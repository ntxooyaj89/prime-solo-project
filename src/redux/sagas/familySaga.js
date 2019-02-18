import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// Saga get each indiviual family by their id.
function* getFamily(action) {
    try {
        // with the id matching 
        const response = yield axios.get(`/api/template/${action.payload.id}`);
        const nextAction = { type: 'SET_FAMILY', payload: response.data }
        yield put(nextAction);

    } catch (error) {
        console.log('saga family get request failed', error);
    }
}


function* getUserFamily() {
    try {
        const response = yield axios.get(`/api/template/`);
        const nextAction = { type: 'SET_USER_FAMILY', payload: response.data }
        yield put(nextAction);

    } catch (error) {
        console.log('error in getUserFamily saga', error);
    }
}

// get the names of each family from database.
function* getMemberFamilyNames() {
    try{
        const familyNameResponse = yield axios.get('/api/template/members');
        const nextAction = {type: 'SET_FAMILY_NAME', payload: familyNameResponse.data};
        // this info will be sent to store in my reducer that have type of 'SET_FAMILY_NAME'
        yield put(nextAction);
    }catch(error){
        console.log('there is error in getFamilyName saga')
    }
}

function* addMember(action) {
    try {
        yield axios.post('/api/template', action.payload);
        // call get family to update family with all the existing member
        const nextAction = { type: 'GET_FAMILY' };
        yield put(nextAction);
    } catch (error) {
        console.log('there is error in addMember saga')
    }

}

// this delete a member
function* deleteMember(action) {
    console.log('this is delete Member saga');
    try {
        const memberId = action.payload.memberId
        console.log(memberId);
        yield axios.delete(`/api/template/${memberId}`);
        const nextAction = { type: 'GET_FAMILY' }
        yield put(nextAction)
    } catch (error) {
        console.log('error in delete saga', error);
    }
}




function* updateMember(action) {
    console.log('this is updateMember');
    try {
        const memberId = action.payload.memberId
        yield axios.put(`/api/template/${memberId}`);
        const nextAction = { type: 'GET_FAMILY' };
        yield put(nextAction);
    } catch (error) {
        console.log('this is update member saga', error);
    }
}

// this is root saga and will be listening to any components that have these type.
function* familySaga() {
    // this 'GET_FAMILY' gets the indiviual family 
    yield takeEvery('GET_FAMILY', getFamily);
    // this GET_FAMILY_NAME will get names of family...
    yield takeEvery('GET_FAMILY_NAME', getMemberFamilyNames);
    yield takeEvery('GET_USER_FAMILY', getUserFamily);
    yield takeEvery('DELETE_MEMBER', deleteMember);
    yield takeEvery('ADD_MEMBER', addMember);
    yield takeEvery('UPDATE_MEMBER', updateMember);
   
}

export default familySaga;