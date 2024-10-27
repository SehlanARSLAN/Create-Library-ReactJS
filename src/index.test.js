import { ExampleComponent } from '.'

describe('ExampleComponent', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeTruthy();
  });
})
