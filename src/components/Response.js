import React from 'react';
import ObjectInspector from 'react-object-inspector';
import {safeJSONParse} from '../utils/utils';

const Response = props => {
  const {type, response} = props;
  const prettify = type === 'pretty';

  const data = prettify ? <ObjectInspector data={safeJSONParse(response)}/> : response;

  return <pre class='code'>{data}</pre>;
}

export default Response;
