import { combineReducers } from 'redux';
import cocktailsReducer from './cocktailsReducer';

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
});

export default rootReducer;
