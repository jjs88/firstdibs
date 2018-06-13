import React, { Component } from 'react';
import Item from '../../components/Item/Item';
import { getItems } from '../../store/actions/items';
import { connect } from 'react-redux';

class Items extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  renderItems = () => {
    if(this.props.items.length === 0) return null;
    return this.props.items.map(item => <Item key={item.id} item={item}/>)
  }

  render() {
    return (
      <div className="Items">
        {this.renderItems()}
      </div>
    )
  }
}

function mapStateToProps({items}) {
  return {items}
}

export default connect(mapStateToProps, { getItems })(Items);