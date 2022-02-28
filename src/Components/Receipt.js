import React from 'react';


const Receipt = (props)=>{
    return(
        <div className='App'>
          
          <div className='Card'>
            <h2>{props.person}</h2>
            <p>
              <h5>{props.order}</h5>
              {props.cost} 
              <span>{props.paid}</span>
            </p>
    
          </div>
        </div>
      );
    };
export default Receipt;