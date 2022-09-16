import React from 'react';
import '../assets/Button.css';
import '../assets/index.css'; 
import { Dialog } from 'primereact/dialog';

const HFNConfirmDialog = (props) => {

    return (
      <div>
       <Dialog {...props}>{props.children}</Dialog>
      </div>
    );
}


export default HFNConfirmDialog;