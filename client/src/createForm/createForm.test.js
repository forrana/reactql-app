import React from 'react';
import ReactDOM from 'react-dom';
import CreateForm from './createForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateForm />, div);
});
