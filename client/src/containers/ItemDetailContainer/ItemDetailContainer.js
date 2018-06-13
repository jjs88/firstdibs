import React, { Component } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import ItemDetailHeader from '../../components/ItemDetail/ItemDetailHeader/ItemDetailHeader';
import { connect } from 'react-redux';
import axios from 'axios';

class ItemDetailContainer extends Component {
  // state = {
  //   item: null
  // }

  // async componentDidMount() {
  //   const { id } = this.props.match.params;
  //   //fetch from API
  //   const { data:item } = await axios(`/item/${id}`);
  //   // axios.post('/item/post', {id});
  //   this.setState({item});
  // }



  render() {
    const { id } = this.props.match.params;
    const [item] = this.props.items.filter(item => item.id === id);
    if(!item) return null;
    // //destructure item
    const {
      description,
      creators,
      title,
      measurements,
      image,
      seller: {
        company
      }
    } = item;

    return (
      <div className="ItemDetailContainer">
      {/* change component name to be ItemHeader */}
        <ItemDetailHeader company={company}/>
        <ItemDetail item={item}/>
      </div>
    )
  }
}

function mapStateToProps({items}) {
  return {items}
}

export default connect(mapStateToProps)(ItemDetailContainer);