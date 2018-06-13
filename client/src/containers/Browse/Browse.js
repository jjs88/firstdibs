import React from 'react';
import Items from '../Items/Items';
import Button from '../../components/ui/Button/Button';
import { getItems } from '../../store/actions/items';
import { connect } from 'react-redux';
import Spinner from '../../components/ui/Spinner/Spinner';

const browse = (props) => {
  const clickBtn = () => {
    const range = {
      start: 0,
      limit: props.items.length +9
    }
    props.getItems(range);
  }

  return (
    <div className="Browse">
      <Items />
      {props.items.length > 0 ? <Button classes={['Browse-Btn']} text="LOAD MORE" click={clickBtn}/>: <Spinner />}
    </div>
  )
}

function mapStateToProps({items}) {
  return { items };
}

export default connect(mapStateToProps, { getItems })(browse);