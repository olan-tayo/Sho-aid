import * as React from 'react';
import { render } from '@testing-library/react';
import 'jest-canvas-mock';
import { Button } from '../src/components';
describe('Render Button', function () {
    it('renders button without crashing', function () {
        render(React.createElement(Button, null, "Test"));
    });
});
//# sourceMappingURL=button.test.js.map