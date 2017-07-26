import React, { Component } from 'react';
import './answersForm.css';


 const AnswersListItem = () => {
    return (
      <div className = "answersForm-answers-item">
        <input type = "text"/>
        <button>Remove</button>
      </div>
    )
  };

class AnswersForm extends Component {
  render() {
    return (
      <div className = "answersForm-body" >
          <button>Add</button>
          <div className = "answesForm-answers">
            <AnswersListItem/>
          </div>
      </div>
    );
  }
}

export default AnswersForm;
