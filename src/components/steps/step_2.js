import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { signUpUserDetails } from '../../actions';

class SecondStep extends Component {

    handleFormSubmit(formData) {
      this.props.signUpUserDetails(formData);
      this.props.toStep(3);
    }

    render() {
      const { handleSubmit, fields: { day, month, year, gender, about } } = this.props;

      return (
        <form method="POST" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} {...this.props} className="flex-item step2">
            <div className="item-body">
                <div className="field">
                    <h3>DATE OF BIRTH</h3>
                    <div className="date">
                        <input className={(day.touched && day.error) ? 'dateError' : ''} type="number" {...day} placeholder="DD" />
                        <input className={month.touched && month.error ? 'dateError' : ''} type="number" {...month} placeholder="MM" />
                        <input type="number" {...year} placeholder="YYYY" />
                        {(day.touched || month.touched || year.touched)
                        && year.error && <div className="errorMessage">{year.error}</div>}
                    </div>
                    <h3>GENDER</h3>
                    <div className="gender-parent">
                        <ul className="gender">
                            <li>
                                <input {...gender} type="radio" value="male" name="radio" id="rad" /><label htmlFor="rad">MALE</label>
                            </li>
                            <li>
                                <input {...gender} type="radio" value="female" name="radio" id="rad1" /><label htmlFor="rad1">FEMALE</label>
                            </li>
                            <li>
                                <input {...gender} type="radio" value="unspecified" name="radio" id="rad2" /><label htmlFor="rad2">UNSPECIFIED</label>
                            </li>
                        </ul>
                        {gender.touched && gender.error && <div className="errorMessage">{gender.error}</div>}
                    </div>
                    <h3>WHERE DID YOU HEAR ABOUT IS?</h3>
                    <div className="selectbox">
                        <select {...about} name="" id="">
                            <option value=""></option>
                            <option value="Facebook">Facebook</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Twitter">Twitter</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="item-footer">
                <div className="back" id="back" onClick={() => this.props.toStep(1)} >Back</div>
                <button type="submit" className="next" id="finish">
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
  if (!formProps.year) {
    errors.year = 'Year is Required'
  } else if (isNaN(Number(formProps.year))) {
    errors.year = 'Must be a number'
  } else if ((new Date().getFullYear() - Number(formProps.year)) < 18 ) {
    errors.year = 'Sorry, you must be at least 18 years old'
  }

  if (!formProps.day || !formProps.month) {
    errors.year = 'Please fill all date fields'
  }else if(isNaN(Number(formProps.day)) || isNaN(Number(formProps.month))){
    errors.year = 'All date fields must be a number'
  }else if(formProps.day > 31 || formProps.day < 1){
    errors.day = 'Invalid date'
    errors.year = 'Invalid date'
  }else if(formProps.month > 12 || formProps.month < 1){
    errors.month = 'Invalid date'
    errors.year = 'Invalid date'
  }

  if(!formProps.gender) {
    errors.gender = 'Please specify your gender'
  }

  return errors;
}

export default reduxForm({
  form: 'signupdetails',
  fields: ['day', 'month', 'year', 'gender', 'about'],
  validate
}, null,  { signUpUserDetails })(SecondStep);
