import React from 'react';

const button = (props) => {
  let { text, styles, click, disabled, classes } = props;
  classes = classes ? ['Button', classes]:['Button'];
  return (
    <button disabled={disabled} className={classes.join(' ')}style={styles} onClick={() => click()}>{text}</button>
  )
}

export default button;