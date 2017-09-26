/**
*
* Skill
*
*/

import React from 'react';

const Modal = (props) => {

  const success = props.success;
  const error = props.error;
  const modal = props.modal;

  const modalStyle = {
    display: modal ? 'block' : 'none', /* Hidden by default */
    width: '100%', /* Full width */
    height: '100%', /* Full height */
    overflow: 'auto', /* Enable scroll if needed */
    backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
  };

  /* Modal Content/Box */
  const modalContent = {
    backgroundColor: '#fefefe',
    margin: '15% auto', /* 15% from the top and centered */
    padding: '20px',
    border: '1px solid #888',
    width: '80%', /* Could be more or less, depending on screen size */
  };

  const close = {
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
  };

  return (
    <div id="myModal" style={modalStyle}>
      <div style={modalContent}>
        <span className="close" style={close} onClick={ () => {props.CloseModal} }>
          &times;
        </span>

        <p>
          { success ? success : error }
        </p>
      </div>
    </div>
  );
}
export default Modal;
