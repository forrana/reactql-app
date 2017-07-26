import React, { Component } from 'react';
import style from './answersForm.css';


 const AnswersListItem = () => {
    return (
      <div className = {style.item}>
        <input type = "text"/>
        <button>Remove</button>
      </div>
    )
  };

class AnswersForm extends Component {
  render() {
    return (
      <div className = {style.body} >
          <button>Add</button>
          <div className = {style.answers}>
            <AnswersListItem/>
          </div>
      </div>
    );
  }
}

export default AnswersForm;
