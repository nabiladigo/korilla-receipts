import React from 'react';
import { useState } from 'react';
import Receipts from './Components/Receipts';
import receiptArr from './ReceiptData';
import Form from './Components/Form';

export default function App (props) {
  
  const [receipt, setReceipt]= useState(receiptArr)
  // const getReceipt = async (search)=>{
  //   const responce = await fetch(

  //   )
  // }
  const receipts = props.data.map( (ele, index)=>{
    return (
      <Receipts 
          person = {ele.person} 
          order = {ele.order}
          cost= {ele.cost}
          paid= {ele.paid}
          key = {index}
      />
    )
  })
  console.log('this is receipts', receipts)
  return(
    <div className='App'>
      <h1>Korilla Receipts</h1>
      <Form receiptsearch= {getReceipt} />
      <Receipts receipt={receipt} />
    </div>
  );
}

