import React from 'react';

const Input = ({labelText , onChange , value , placeholder, }) => {
    return (
        <div style={{marginTop:"20px" , marginBottom:"20px"}}>
          <label>{labelText} </label>
          <input
            onChange={onChange}
            value = {value}
            placeholder= {placeholder}
          />
          </div>
    );
};

export default Input;