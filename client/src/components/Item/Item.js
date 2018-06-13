import React from 'react';
import { toggleFavorite } from '../../store/actions/items';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Favorite from '../ui/Favorite/Favorite';

const item = (props) => {
  const { 
    image:imgUrl,
    id,
    favorite
  } = props.item;

  const price = props.item.price ? props.item.price: null; 
  const classes = favorite ? ['fas fa-heart']: ['far fa-heart'];
  
  const favStyles = {
    bottom: '10px',
    right: '20px',
    position: 'absolute'
  }

  const clickFav = async (id) => {
    const { data:item } = await axios.post('/item/post', {id});
    props.toggleFavorite(item);
  }

  return (
      <div className="Item">
        <NavLink to={`/items/${id}`}>
          <img src={imgUrl}/>
        </NavLink>
        <p className="Item__price">{price ? price.amounts.USD: null}</p>
        <Favorite classes={classes} click={clickFav} id={id} styles={favStyles}/>
      </div>
  )
}

export default connect(null, { toggleFavorite })(item);
