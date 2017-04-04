import { bikesFetchEpic } from '../bikes/bikes-epics';
import { combineEpics, Epic } from 'redux-observable';

export default combineEpics(bikesFetchEpic) as Epic<{}, {}>;
