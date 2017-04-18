import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { signUpUser } from '../../actions';

class FirstStep extends Component {

    handleFormSubmit(formData) {
      this.props.signUpUser(formData);
      this.props.toStep(2);
    }

    render() {
      const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

      return (
        <form method="POST" {...this.props} className="flex-item step1" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
           <div className="item-body">
               <div className="field">
                   <div className={ email.touched && email.error ? "input error" : "input"}>
                       <input {...email} type="email" />
                       <span className="underline"></span>
                       <span className="placeholder">
                       <p>Email</p>
                       </span>
                       {email.touched && email.error && <div className="errorMessage">{email.error}</div>}
                   </div>
                   <div className={ password.touched && password.error ? "input error" : "input"}>
                       <input {...password} type="password" />
                       <span className="underline"></span>
                       <span className="placeholder">
                       <p>Password</p>
                       </span>
                       {password.touched && password.error && <div className="errorMessage">{password.error}</div>}
                   </div>
                   <div className={ passwordConfirm.touched && passwordConfirm.error ? "input error" : "input"}>
                       <input {...passwordConfirm} type="password" />
                       <span className="underline"></span>
                       <span className="placeholder">
                       <p>Confirm Password</p>
                       </span>
                       {passwordConfirm.touched && passwordConfirm.error && <div className="errorMessage">{passwordConfirm.error}</div>}
                   </div>
               </div>
           </div>
            <div className="item-footer">
                <div></div>
                <button type="submit" className="next" id="next">
                    Next
                    <span className="next-icon"></span>
                </button>
            </div>
        </form>
      );
    }
}

function validate(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
    errors.email = 'Invalid email address'
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }else if (formProps.password.length < 6) {
    errors.password = 'Password must have more than 6 characters'
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match';
  }

  return errors;
}



export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, null, { signUpUser })(FirstStep);
