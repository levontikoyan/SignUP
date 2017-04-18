import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('Shows sign up steps components', () => {
        expect(component.find('.step1')).to.exist;
        expect(component.find('.step2')).to.exist;
        expect(component.find('.step3')).to.exist;
    });

});