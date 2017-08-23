import { all, call, put, takeEvery } from 'redux-saga/effects';
import api from '../../api/';

// Actions Creators
export const SIGN_UPING = 'SIGN_UPING';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

// Actions
export function onSignUp(user) {
  return { type: SIGN_UPING, user };
}

// Reducer
export const initialState = {
  user: null,
  loading: false,
  error: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UPING:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        user: action.user,
        loading: false,
        error: null,
      });
    case SIGN_UP_FAILED:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        user: null,
      });
    default:
      return state;
  }
}

// Saga
function* fetchCreateUser(action) {
  try {
    const user = yield call(api.auth.signUp, action.user);
    yield put({ type: SIGN_UP_SUCCESS, user });
  } catch (e) {
    yield put({ type: SIGN_UP_FAILED, error: e.message });
  }
}

function* watchCreateUser() {
  yield takeEvery(SIGN_UPING, fetchCreateUser);
}

export function* rootSaga() {
  yield all([
    watchCreateUser(),
  ]);
}
