import React from 'react';

const CardHeader = (props) => {

      const { image,title } = props.cardHeader;

      const bgStyle = {
        backgroundImage:`url(${image})`
                };

      return (
        <header style={bgStyle} id={image} className="card-header">
          <h4 className="card-header--title">{title}</h4>
        </header>
      )
    
  }

  export default CardHeader;
  

  
