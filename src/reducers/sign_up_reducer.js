import { SIGN_UP_USER, SIGN_UP_USER_DETAILS }  from './../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
  case SIGN_UP_USER:
    return action.payload;

  case SIGN_UP_USER_DETAILS:
    return {...state, ...action.payload}
  }
  return state;
}
