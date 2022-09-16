import React from 'react';
// store 
import { Dialog } from 'primereact/dialog';

const HFNConfirmDialog = (props) => {

    return (
      <div>
       <Dialog {...props}>{props.children}</Dialog>
      </div>
    );
}


export default HFNConfirmDialog;