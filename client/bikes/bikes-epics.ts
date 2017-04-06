import {
  FETCH_BIKES, 
  FETCH_BIKES_SUCCESS, 
  FETCH_BIKES_FAILED,
  FETCH_BIKE,
  FETCH_BIKE_SUCCESS, 
  FETCH_BIKE_FAILED,
  SELECTED_BIKE_TIMER_START,
  SELECTED_BIKE_TIMER_STOP,
  SELECTED_BIKE_CHANGED,
} from './bikes-consts';
import { Observable } from 'rxjs';

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
  type: FETCH_BIKES_FAILED,
  payload: {
    error,
  },
});

export const bikesFetchEpic = $action => $action.ofType(FETCH_BIKES)
  .mergeMap(() => bikeService.getBikes())
    .map(bikes => bikesFetchSuccess(bikes));

export const fetchBike = (bikeId: string) => ({
  type: FETCH_BIKE,
  payload: {
    bikeId,
  },
});

export const fetchBikeSuccess = bike => ({
  type: FETCH_BIKE_SUCCESS,
  payload: {
    bike,
  },
});
  
export const fetchBikeError = error => ({
  type: FETCH_BIKE_FAILED,
  payload: {
    error,
  },
});

export const changeSelectedBike = (id: number) => ({
  type: SELECTED_BIKE_CHANGED,
  payload: {
    id,
  },
});

export const bikeFetchEpic = $action => $action.ofType(FETCH_BIKE)
  .mergeMap(action => bikeService.getBike(action.payload.bikeId))
    .map(bikes => fetchBikeSuccess(bikes));

export const bikesBannerTimerStart = (times: number) => ({
  type: SELECTED_BIKE_TIMER_START,
  payload: {
    times,
  },
});

export const bikesBannerTimerStartEpic = 
  $action => $action.ofType(SELECTED_BIKE_TIMER_START)
    .mergeMap((action) => {
      const source = Observable
        .interval(3000)
        .map((count: number) => changeSelectedBike(count))
        .take(action.payload.times);
      return source;
    });