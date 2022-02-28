import React from 'react';
import Receipt from './Receipt';

const Receipts = ({receipts})=>{
   receipts.map((receipt, index) => {
     return(
         <Receipt  
            receipt= {receipt} key={index} />
        )
     });
}
    
         

export default Receipts;