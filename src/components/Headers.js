import React from 'react';
import CollapsibleItem from './CollapsibleItem';

const Headers = props => {
  const {headers} = props;
  return (
    <div>
      {headers.map((header, index) => {
        return (
          <CollapsibleItem
            className={index === headers.length - 1 ? 'no-border': ''}
            key={index}
            {...header}
          />
        );
      })}
    </div>
  );
}

export default Headers;
