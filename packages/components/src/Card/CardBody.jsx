import React from 'react';

const Button = (props) => {
    const { buttonText } = props;
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> {buttonText}
      </button>
    )
}

const CardBody = (props) => {

  const { date, content,title, button } = props.cardBody;

    return (
      <div className="card-body">
        <p className="date">{date}</p>        
        <h2>{title}</h2>        
        <p className="body-content">{content}</p>        
        <Button buttonText={button}/>
      </div>
    )

}

  export default CardBody;
  

  
