import { h, render } from 'preact';

export const App = () => <div>Hello Preact ~</div>;

render(<App />, document.getElementById('root') as Element);
