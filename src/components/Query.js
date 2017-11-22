import React, {Component} from 'react';
import CollapsibleItem from './CollapsibleItem';

class Query extends Component {
  render() {
    const {query, handleOnClose, id} = this.props;
    const {request, response} = query;
    const {headers: reqHeaders} = request;
    const {headers: resHeaders} = response;

    return (
      <div id='side'>
        <div><a href='#' className='close' onClick={handleOnClose}></a></div>
        <CollapsibleItem name='Response Headers' value={resHeaders}/>
        <CollapsibleItem name='Request Headers' value={reqHeaders}/>
      </div>
    );
  }
}

export default Query;
