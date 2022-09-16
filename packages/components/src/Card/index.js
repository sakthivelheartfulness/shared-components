import React from 'react';
import '../assets/Card.css';
import { default as CardHeader } from './CardHeader'
import { default as CardBody } from './CardBody'

const Card = (props) => {
 
    const {cardHeader,cardBody} = props.values;
      return (
        <article className="card">
          <CardHeader cardHeader={cardHeader}/>
          <CardBody cardBody={cardBody}/>
        </article>
      )
    
  }

export default Card; 