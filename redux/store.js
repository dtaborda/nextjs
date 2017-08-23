import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { reducer, rootSaga, initialState } from './auth/signup';

const reducers = combineReducers({ auth: reducer });

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initState = initialState) {
  const store = createStore(
    reducers,
    initState,
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
