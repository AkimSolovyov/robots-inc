import { combineReducers } from 'redux';

import robots from 'components/Employee/reducer';

const rootReducer = combineReducers({
  robots
});

export default rootReducer;
