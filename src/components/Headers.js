import React from 'react';
import CollapsibleItem from './CollapsibleItem';

const Headers = props => {
  return (
    <div>
      {props.headers.map((header, index) => {
        return <CollapsibleItem key={index} {...header}/>
      })}
    </div>
  );
}

export default Headers;
