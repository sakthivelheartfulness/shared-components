import React from 'react';
import '../assets/Button.css';

const SIZES = ['btn--wide', 'btn--large', 'btn--medium', 'btn--small'];
const COLOR = ['primary', 'black', 'red'];
const BORDER_COLOR = ['primary-border', 'black-border', 'red-border'];

export const BasicButton = ({children, buttonSize, buttonColor
}) => {
 
 const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
 const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];
return(
  <button className = {`btn ${checkButtonSize} ${checkButtonColor}`} >{children} </button>
 );
};


export const OutlineButton = ({children, buttonSize, buttonBorderColor
}) => {
 const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
 const checkButtonBorderColor = BORDER_COLOR.includes(buttonBorderColor) ? buttonBorderColor : BORDER_COLOR[0];
return(
  <button className = {`btn--outline ${checkButtonSize} ${checkButtonBorderColor}`} >{children} </button>
 );
};
