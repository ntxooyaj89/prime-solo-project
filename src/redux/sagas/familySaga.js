import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import swal from 'sweetalert';




// Saga get each indiviual family that's tie to the user.
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
function* familyName() {
    try{
        const familyNameResponse = yield axios.get('/api/template/:id/family');
        const nextAction = {type: 'SET_FAMILY_NAME', payload: familyNameResponse.data};
        // this info will be sent to store in my reducer that have type of 'SET_FAMILY_NAME'
        yield put(nextAction);
    }catch(error){
        console.log('there is error in familyName saga')
    }
}

function* addMember(action) {
    try {
        yield axios.post('/api/template', action.payload);
        // call get family to update family with all the existing member
        const nextAction = { type: 'GET_FAMILY' };
        yield put(nextAction);
        swal({
            title: "Sucessful",
            text: "Member added!",
            icon: "success",
            button: "Ok!",
        });
       
        
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

// get each individual member's details.
function* getMemberDetail(action){
    try{
        const memberId = action.payload.memberId
        const response = yield axios.get(`/api/template/family/${memberId}`);
        const nextAction = {type: 'SET_MEMBER_DETAIL', payload: response.data};
        yield put(nextAction);
    } catch (error) {
    
        console.log('this is get member detail saga error', error);
    }

}

function* getMemberFamily(action) {
    try{
        const memberId = action.payload.memberId
        const response = yield axios.get(`/api/template/${memberId}/member-family`);
        const nextAction = {type: 'SET_MEMBER_FAMILY', payload: response.data};
        yield put(nextAction);
    }catch (error){
        console.log('this is get member family saga', error);
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

    // this gets the indiviual family of the user. 
    yield takeEvery('GET_FAMILY', getFamily);

    // this will get user's familys from database.
    yield takeEvery('GET_USER_FAMILY', getUserFamily);

    // get the name of family in the database.
    yield takeEvery('GET_FAMILY_NAME', familyName);
 
    // delete a family member from the database
    yield takeEvery('DELETE_MEMBER', deleteMember);

    // add another member to the database
    yield takeEvery('ADD_MEMBER', addMember);

    // made an update to the database
    yield takeEvery('UPDATE_MEMBER', updateMember);

    // this gets the detail of each member that's user clicked on.
    yield takeEvery('GET_MEMBER_DETAIL', getMemberDetail);

    // get the family of member that user clicked on.
    yield takeEvery('GET_MEMBER_FAMILY', getMemberFamily);
   
}

export default familySaga;