import React from 'react';
// import { useState } from 'react';
// import receiptArr from './ReceiptData';
import Receipt from './Receipt';

const Receipts = (props)=>{
    // const receipts = props.data.map( (ele, index)=>{
        return (
         <Receipt  
            person = {props.person} 
            order = {props.order}
            cost= {props.cost}
            paid= {props.paid}
         />
        );
      };
    
         

export default Receipts;