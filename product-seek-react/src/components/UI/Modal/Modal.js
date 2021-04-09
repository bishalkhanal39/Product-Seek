import React from 'react';

const Modal = (props)=>{
  return(
    <div className="modal fade" id={props.modelName} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className={"modal-dialog modal-dialog-centered "+(props.modalType)} role="document">
        <div className="modal-content">
          <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;