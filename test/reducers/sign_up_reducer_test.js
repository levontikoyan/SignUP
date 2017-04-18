import { expect } from '../test_helper';
import signUpReducer from '../../src/reducers/sign_up_reducer';
import { SIGN_UP_USER, SIGN_UP_USER_DETAILS } from '../../src/actions/types';

describe('SignUp Reducer', () => {

    it('Handles action of type SIGN_UP_USER, adds data to store', () => {
        const action = { type: SIGN_UP_USER, payload: { email: 'john_smith@mail.com', password: '123456'} };
        expect(signUpReducer({}, action)).to.eql({ email: 'john_smith@mail.com', password: '123456'} );
    });

    it('Handles action of type SIGN_UP_USER_DETAILS, merges incoming data with data in store', () => {
        const action = { type: SIGN_UP_USER_DETAILS, payload: { gender: 'male', about: 'LinkedIn'} };
        expect(signUpReducer({ email: 'john_smith@mail.com', password: '123456'}, action))
            .to.eql({ email: 'john_smith@mail.com', password: '123456', gender: 'male', about: 'LinkedIn' } );
    });
});