import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './assets/index.css';
import './assets/DialogDemo.css';



const Wrapper = (props) => {
  return (
      <>
     {props.children}
      </>
  )
};

export default Wrapper;
