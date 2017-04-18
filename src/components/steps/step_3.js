import React, {Component} from 'react';
import { connect } from 'react-redux';

class ThirdStep extends Component {
    render() {
      return (
        <div {...this.props} className="flex-item step3">
            <div className="done">
                <div className="done-icon">
                    <img src="public/img/checked.svg" alt="" />
                </div>
                <button id="dash" onClick={() => console.log(this.props.userdata)} >Go to Dashboard <span className="arrow"></span></button>
            </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    userdata: state.userdata
  };
}

export default connect(mapStateToProps)(ThirdStep);
