import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';



function* getFamily () {
    try{
        const response = yield axios.get('/api/template/yang');
        const nextAction = { type: 'SET_FAMILY', payload: response.data}
        yield put(nextAction);

    }catch(error) {
        console.log('saga family get request failed', error);
    }
}

function* familyName() {
    try {
        const response = yield axios.get('/api/template/chang');
        const nextAction = { type: 'SET_FAMILY_NAME', payload: response.data }
        yield put(nextAction);

    } catch (error) {
        console.log('saga family get request failed', error);
    }
}

function* familySaga(){
    yield takeEvery('GET_FAMILY', getFamily);
    yield takeEvery('GET_FAMILYNAME', familyName);
}

export default familySaga;