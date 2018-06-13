import React, { Component } from 'react';
import ItemDetailPic from './ItemDetailPic/ItemDetailPic';
import ItemDetailDesc from './ItemDetailDesc/ItemDetailDesc';
import ItemDetailBuy from './ItemDetailBuy/ItemDetailBuy';

const ItemDetail = (props) => {
  const { image, title, measurements, description, creators, favorite, id } = props.item;
  return (
    <div className="ItemDetail">
      <ItemDetailPic image={image} favorite={favorite} id={id}/>
      <div className="ItemDetail__wrapper">
        <ItemDetailBuy title={title} measurements={measurements}/>
        <ItemDetailDesc description={description} creators={creators}/>
      </div>
    </div>
  )
}

export default ItemDetail;