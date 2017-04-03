import {
  FETCH_BIKES, 
  FETCH_BIKES_SUCCESS, 
  FETCH_BIKES_FAILED,
} from './bikes-consts';
import { BikeService } from './bikes.service';

const bikeService = new BikeService();

export const bikeFetch = () => ({
  type: FETCH_BIKES,
});

export const bikeFetchSuccess = bikes => ({
  type: FETCH_BIKES_SUCCESS,
  payload: {
    bikes,
  },
});

export const bikeFetchFailed = error => ({
  type: FETCH_BIKES_SUCCESS,
  payload: {
    error,
  },
});

export const bikeFetchEpic = $action => $action.ofType(FETCH_BIKES)
  .mergeMap(() => bikeService.getBikes()
    .map(bikes => bikeFetchSuccess(bikes)));
  
