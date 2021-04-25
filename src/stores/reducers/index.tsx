import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import itemReducer from './item.reducer';
import profileReducer from './profile.reducer';
//insert another reducers here to be combined

const reducers = combineReducers({
    userReducer,
    profileReducer,
    itemReducer
})

export default reducers