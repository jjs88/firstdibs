import React from 'react';
import Favorite from '../../ui/Favorite/Favorite';
import { toggleFavorite } from '../../../store/actions/items';
import { connect } from 'react-redux';
import axios from 'axios';

const itemDetailPic = (props) => {
  const { image, favorite, id } = props;
  const favStyles = {
  top: '10px',
  right: '10px',
  position: 'absolute'
}

  const clickFav = async (id) => {
    const { data:item } = await axios.post('/item/post', {id});
    props.toggleFavorite(item);
  }

  const classes = favorite ? ['fas fa-heart']: ['far fa-heart'];
  return (
    <div className="ItemDetailPic">
      <Favorite classes={classes} click={clickFav} id={id} styles={favStyles}/>
      <img src={image} />
    </div>
  )
}


function mapStateToProps({items}) {
  return {items}
}

export default connect(null, { toggleFavorite })(itemDetailPic);


