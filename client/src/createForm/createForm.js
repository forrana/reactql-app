import React, { Component } from 'react';
import style from './createForm.css';

import AnswersForm from './answersForm/answersForm'

class CreateForm extends Component {
  render() {
    return (
      <div className = {style.body} >
        <div className = {style.form}>
          <textarea rows="10" placeholder="Sentence"/>
          <input type = "text" placeholder="Points"/>
          <div className = {style.actions}>
            <button>cancel</button>
            <button>ok</button>
          </div>
        </div>
        <AnswersForm/>
      </div>
    );
  }
}

export default CreateForm;
