import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import reducer from '../reducer/reducer';
import epic from '../epic/epic';

const reduxLogger = createLogger && createLogger();
const epicMiddleware = createEpicMiddleware(epic);

const storeWithMiddleware =
  applyMiddleware(epicMiddleware, reduxLogger)(createStore);

export default function configureStore() {
  return storeWithMiddleware(reducer);
}
