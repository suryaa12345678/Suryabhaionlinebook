import React from 'react'

export default function CardItem(props) {
  return (
    <div className='carditem'>
      <img
        className="cardItem-img"
        src={props.link}
        alt=""
        width={props.width}
        onClick={props.redirect}
      />
      {props.label !== null && <h3>{props.label}</h3>}
    </div>
  );
}
