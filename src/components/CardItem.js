// CardItem.js
import React from 'react';

export default function CardItem(props) {
  return (
    <div className='carditem' onClick={props.onClick}>
      <img
        className="cardItem-img"
        src={props.link}
        alt=""
        width={props.width}
      />
      <h4>{props.heading}</h4>
      <a className="a_parnter" href="" >Get Demo ID</a>

      {props.label !== null && <h3>{props.label}</h3>}
    </div>
  );
}
