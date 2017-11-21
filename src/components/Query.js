import React, {Component} from 'react';

class Query extends Component {
  render() {
    const {query, handleOnClose} = this.props;

    return (
      <div className='sidebar'>
        <a href='#' onClick={handleOnClose}>close</a>
        {query.request.url}
      </div>
    );
  }
}

export default Query;
