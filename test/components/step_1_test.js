import { renderComponent, expect } from '../test_helper';
import FirstStep from '../../src/components/steps/step_1';

describe('FirstStep', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(FirstStep);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('step1');
    });

    it('has 3 inputs', () => {
        expect(component.find('input').length).to.equal(3);
    });

    it('has a next button', () => {
        expect(component.find('button')).to.exist;
    });
});