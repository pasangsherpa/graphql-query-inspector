import React from 'react';
import CollapsibleItem from './CollapsibleItem';

const Headers = props => {
  return (
    <div>
      {props.headers.map(header => {
        return <CollapsibleItem {...header}/>
      })}
    </div>
  );
}

export default Headers;
