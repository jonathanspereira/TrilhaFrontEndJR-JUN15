import React from 'react';
import ReactDOM from 'react-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
      <h1>Jonathan | Meu curriculo</h1>
      <Analytics />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));