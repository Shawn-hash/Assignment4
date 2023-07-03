import { combineReducers } from 'redux';
import webDisplayReducer from './WebDisplayReducer';
// import itemManagementReducer from './itemManagementReducer';

const rootReducer = combineReducers({
  webDisplay: webDisplayReducer,
  // itemManagement: itemManagementReducer,
});

export default rootReducer;