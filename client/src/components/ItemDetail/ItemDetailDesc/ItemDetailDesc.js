import React from 'react';

const ItemDetailDesc = (props) => {
  const { description, creators } = props;
  return (
    <div className="ItemDetailDesc">
      <div className="ItemDetailDesc__content">
        <p>{description}</p>
        <div> Creator: {creators}</div>
      </div>
    </div>
  )
}

export default ItemDetailDesc;