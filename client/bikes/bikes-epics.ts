import {
  FETCH_BIKES, 
  FETCH_BIKES_SUCCESS, 
  FETCH_BIKES_FAILED,
} from './bikes-consts';
import { BikeService } from './bikes.service';

const bikeService = new BikeService();

export const bikesFetch = () => ({
  type: FETCH_BIKES,
});

export const bikesFetchSuccess = bikes => ({
  type: FETCH_BIKES_SUCCESS,
  payload: {
    bikes,
  },
});

export const bikesFetchFailed = error => ({
  type: FETCH_BIKES_SUCCESS,
  payload: {
    error,
  },
});

export const bikesFetchEpic = $action => $action.ofType(FETCH_BIKES)
  .mergeMap(() => bikeService.getBikes()
    .map(bikes => bikesFetchSuccess(bikes)));
  
