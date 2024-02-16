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
      {props.label !== null && <h3>{props.label}</h3>}
    </div>
  );
}
