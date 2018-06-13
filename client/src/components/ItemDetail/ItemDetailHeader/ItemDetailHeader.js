import React from 'react';
import { NavLink} from 'react-router-dom';

const itemDetailHeader = (props) => {
  return (
    <div className="ItemDetailHeader">
      <div className="ItemDetailHeader__link">
      <span className="fas fa-chevron-left"></span>
        <NavLink to="/">Home</NavLink>
      </div>
      <h1>{props.company}</h1>
    </div>
  )
}

export default itemDetailHeader;