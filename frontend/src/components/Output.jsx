import React, { forwardRef } from 'react';
import "../CSS/Output.css";

const Output = forwardRef((props, ref) => {
  return (
    <div className='output-cont' ref={ref}>
      <p>{props.msg}</p>
    </div>
  );
});

export default Output;
