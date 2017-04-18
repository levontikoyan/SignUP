import { renderComponent, expect } from '../test_helper';
import SecondStep from '../../src/components/steps/step_2';

describe('SecondStep', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(SecondStep);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('step2');
    });

    it('has a next button', () => {
        expect(component.find('button')).have.class('next');
    });

    it('has a back button', () => {
        expect(component.find('div')).have.class('back');
    });
});