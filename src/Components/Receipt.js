import React from 'react';
import receiptArr from '../ReceiptData';


const Receipt = ({receipt})=>{
    return(
        <div className='App'>
          
          <div className='Card'>
            <h2>{props.person}</h2>
            <h4>{props.order.main}</h4>
            {/* <span>order#{Receipt.id}</span> */}
            <hr />
            <h5>
                <small>Protein: {" "}</small>
                {receipt.order.protein}
            </h5>
            <h5>
                <small>Rice: {" "}</small>
                {receipt.order.rice}
            </h5>
            <h5>
                <small>Sauce: {" "}</small>
                {receipt.order.sauce}
            </h5>
            <h5>
                <small>Drink: {" "}</small>
                {receipt.order.drink}
            </h5>
            <h5> 
            <small>Cost: {" "}</small>
              {receipt.order.cost} 
            </h5>
            <button >
              {receipt.paid}
            </button>
    
          </div>
        </div>
      );
    };
export default Receipt;