import { combineReducers } from "@reduxjs/toolkit"; 
import userPreferencesReducer from '@/redux/userPreferences/userPreferences.js';
const rootReducer = combineReducers({
    userPreferences: userPreferencesReducer,
});

export default rootReducer;