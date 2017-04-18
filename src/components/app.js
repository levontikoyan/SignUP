import React, { Component } from 'react';
import FirstStep from './steps/step_1';
import SecondStep from './steps/step_2';
import ThirdStep from './steps/step_3';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }

  goToStep = (step) => {
    this.setState({
      step
    })
  }

  render() {
    const { step } = this.state;
    return (
      <div className="flex-container">
          <div className="flex-content">
             <div className="flex-header">
                 <h3 className="title">Signup</h3>
                 <div className="underline">
                     <span id="score" style={{ width: step == 1 ? '33%' : step == 2 ?  '66%' : '100%' }}></span>
                 </div>
             </div>
              <div className="flex-body">
                  <FirstStep
                      style={{ left: step == 1 ? '0px' : step == 2 ?  '-360px' : '-720px' }}
                      toStep={(step) => this.goToStep(step)}
                  />
                  <SecondStep
                      style={{ left: step == 1 ? '360px' : step == 2 ?  '0' : '-360px' }}
                      toStep={(step) => this.goToStep(step)}
                  />
                  <ThirdStep
                      style={{ left: step == 1 ? '720px' : step == 2 ?  '360px' : '0' }}
                      toStep={(step) => this.goToStep(step)}
                  />
              </div>
          </div>
      </div>
    );
  }
}
