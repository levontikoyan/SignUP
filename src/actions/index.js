import { SIGN_UP_USER, SIGN_UP_USER_DETAILS }  from './types';

export function signUpUser( {email, password}) {
  return {
    type: SIGN_UP_USER,
    payload: {email, password}
  };
}

export function signUpUserDetails( {day, month, year, gender, about = ''}) {
  return {
    type: SIGN_UP_USER_DETAILS,
    payload: {
      date_of_birth: `${day} ${month} ${year}`,
      gender,
      about
    }
  };
}
