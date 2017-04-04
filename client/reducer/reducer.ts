import { combineReducers } from 'redux';
import { reducer as bikes } from '../bikes/bikes-reducer';

export default combineReducers({
  bikes,
});
