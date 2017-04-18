import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import userReducer from './sign_up_reducer'

const rootReducer = combineReducers({
  form,
  userdata: userReducer
});

export default rootReducer;
