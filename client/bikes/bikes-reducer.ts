import {
  FETCH_BIKES, 
  FETCH_BIKES_SUCCESS, 
  FETCH_BIKES_FAILED,
  FETCH_BIKE, 
  FETCH_BIKE_SUCCESS, 
  FETCH_BIKE_FAILED,
  SELECTED_BIKE_CHANGED,
} from './bikes-consts';
import * as Immutable from 'seamless-immutable';
import { IAction } from '../shared/redux-action';

const initState = Immutable({
  bikes: [],
  selectedId: 0,
  bike: {},
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
    case FETCH_BIKE:
      return state.set('isLoading', true);
    case FETCH_BIKE_SUCCESS:
      return state.set('isLoading', false)
        .set('bike', action.payload.bike);
    case FETCH_BIKE_FAILED:
      return state.set('isLoading', false)
        .set('error', action.payload.error);
    case SELECTED_BIKE_CHANGED: 
      return state.set('selectedId', action.payload.id);
    default: return state;
  }
}