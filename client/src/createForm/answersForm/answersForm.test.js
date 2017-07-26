import React from 'react';
import ReactDOM from 'react-dom';
import AnsfersForm from './answersForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnsfersForm />, div);
});
