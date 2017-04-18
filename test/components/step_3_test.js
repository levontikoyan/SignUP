import { renderComponent, expect } from '../test_helper';
import ThirdStep from '../../src/components/steps/step_3';

describe('ThirdStep', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(ThirdStep);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('step3');
    });

    it('has a Go To Dashboard button', () => {
        expect(component.find('button')).have.id('dash');
    });
});