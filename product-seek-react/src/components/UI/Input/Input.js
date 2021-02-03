import React from 'react';

const Input = (props)=>{
 let InputElement = null;

  switch(props.elementType){
    case('input'):
      InputElement= <input className='form-control' {...props.elementConfig} value={props.value} onChange={props.changed} />;
      break;
    
    case('textarea'):
      InputElement = <textarea className='form-control' {...props.elementConfig}  value={props.value} onChange={props.changed} />;
      break;
    
    default:
      InputElement= <input className='form-control' {...props.elementConfig} value={props.value} onChange={props.changed} />;
    break;
  }

  return(
    <div className="form-group">
      <label>{props.name}</label>
      {InputElement}
    </div>
  )

}

export default Input;