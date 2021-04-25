import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import itemReducer from './item.reducer';
//insert another reducers here to be combined

const reducers = combineReducers({
    userReducer,
    itemReducer
})

export default reducers