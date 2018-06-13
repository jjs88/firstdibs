import React from 'react';
import Button from '../../ui/Button/Button';

const ItemDetailBuy = (props) => {
  const { 
    title,
    measurements: {
      diameter,
      width,
      height
    }
  } = props;

  const btnStyles = {
    color: '#b29600',
    backgroundColor: '#ffffff',
    width: '100%',
    padding: '10px'
  }
  return (
    <div className="ItemDetailBuy">
    <div className="ItemDetailBuy__content">
      <h2 className="ItemDetailBuy__title">{title}</h2>
        <div className="ItemDetailBuy__price">Price upon request</div>
        <div className="ItemDetailBuy__measurements">
          <div>Measurements:</div>
          <div>H {height} W {width ? width: '(none)'} D {diameter} </div>
        </div>
    </div>
      <div className="flex-row">
        <Button text="Purchase" styles={btnStyles} classes={['ItemDetailBuy-Btn']} disabled={true}/>
        <Button text="Make Offer" styles={btnStyles} disabled={true} classes={['ItemDetailBuy-Btn']}/>
      </div>
    </div>
  )
}

export default ItemDetailBuy;