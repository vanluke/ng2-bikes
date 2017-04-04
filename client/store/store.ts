import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducer/reducer';
import epic from '../epic/epic';

const reduxLogger = createLogger && createLogger();
const epicMiddleware = createEpicMiddleware(epic);

const storeWithMiddleware =
  applyMiddleware(epicMiddleware)(createStore);

export default function configureStore() {
  return storeWithMiddleware(rootReducer);
}
