import React, {Component} from 'react';

const ListItem = (props) => {
  const {name, value} = props;
  return (
    <li>
      <span className='bold'>{name}</span>: <span>{value}</span>
    </li>
  );
}

export default ListItem;
