import React from 'react';
import CollapsibleItem from './CollapsibleItem';

const Headers = props => {
  const {headers} = props;

  return (
    headers.map((header, index) => {
      const className = index === headers.length - 1 ? 'no-border': '';
      return (
        <CollapsibleItem {...header} key={index} className={className}/>
      );
    })
  );
}

export default Headers;
