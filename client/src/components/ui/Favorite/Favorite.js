import React from 'react';

const favorite = (props) => {
  let { classes, id, styles, click } = props;
  classes = ['Favorite', classes];
  return (
    <span className={classes.join(' ')} onClick={() => click(id)} style={styles}></span>
  )
}

export default favorite;