import {
  FETCH_BIKES, 
  FETCH_BIKES_SUCCESS, 
  FETCH_BIKES_FAILED,
} from './bikes-consts';
import * as Immutable from 'seamless-immutable';
import { IAction } from '../shared/redux-action';

const initState = Immutable({
  bikes: [],
  isLoading: false,
  error: {},
});

export function reducer(state = initState, action: IAction = {}) {
  switch (action.type) {
    case FETCH_BIKES:
      return state.set('isLoading', true);
    case FETCH_BIKES_SUCCESS:
      return state.set('isLoading', false)
        .set('bikes', action.payload.bikes);
    case FETCH_BIKES_FAILED:
      return state.set('isLoading', false)
        .set('bikes', action.payload.error);
    default: return state;
  }
}