import { 
  bikesFetchEpic, 
  bikeFetchEpic, 
  bikesBannerTimerStartEpic 
} from '../bikes/bikes-epics';
import { combineEpics, Epic } from 'redux-observable';

export default combineEpics(bikesFetchEpic, 
  bikeFetchEpic, 
  bikesBannerTimerStartEpic) as Epic<{}, {}>;
