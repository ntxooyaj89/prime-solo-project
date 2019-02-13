import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// this get the yang family
function* getFamily (action) {
    try{
        const response = yield axios.get(`/api/template/${action.payload.id}`);
        const nextAction = { type: 'SET_FAMILY', payload: response.data}
        yield put(nextAction);

    }catch(error) {
        console.log('saga family get request failed', error);
    }
}

// this gets the chang family
function* changFamily() {
    try {
        const response = yield axios.get('/api/template/chang');
        const nextAction = { type: 'SET_CHANG_FAMILY', payload: response.data }
        yield put(nextAction);

    } catch (error) {
        console.log('saga family get request failed', error);
    }
}

// this delete a member
function* deleteMember(action) {
    console.log('this is deleteMember saga');
    try{
        // const memberId = action.payload.memberId
        // console.log(memberId);
        yield axios.delete(`/api/template/${action.payload.id}`);
        const nextAction = {type: 'GET_FAMILY'}
        yield put(nextAction)
    }catch(error){
        console.log('error in delete saga', error);
    }
}

// this is root saga and will be listening to any components that have these type.
function* familySaga(){
    yield takeEvery('GET_FAMILY', getFamily);
    yield takeEvery('GET_CHANG_FAMILY', changFamily);
    yield takeEvery('DELETE_MEMBER', deleteMember);
}

export default familySaga;