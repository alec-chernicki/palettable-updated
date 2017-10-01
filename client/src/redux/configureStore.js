// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './reducers/rootReducer';
import { rootEpic } from './epics/rootEpic';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    )
  );
};

export default configureStore;
