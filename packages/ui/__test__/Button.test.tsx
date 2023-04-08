import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Button, ButtonProps } from '../src/button/Button';

describe('Button', () => {
    const props: ButtonProps = {
        className: 'custom-class',
        block: true
    };

    test('renders correctly', () => {
        const { queryByText } = render(<Button {...props} />);
        const componentLabel = queryByText('Read the docs');

        expect(componentLabel).toBeTruthy();
        expect(componentLabel && componentLabel.parentNode?.parentElement?.getAttribute("class")).toContain('custom-class');
    });
});
