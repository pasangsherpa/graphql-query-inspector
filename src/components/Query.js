import React, {Component} from 'react';
import Headers from './Headers';

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {content: null};
  }

  componentWillReceiveProps(nextProps) {
    const {query} = nextProps;
    if (!query) return;

    query.getContent(content => {
      this.setState({content});
    });
  }

  getHeaders(query) {
    const headers = [];
    const {general, request, response} = query;
    const {headers: reqHeaders} = request;
    const {headers: resHeaders} = response;

    headers.push({name: 'General', value: general, shouldSort: false});
    headers.push({name: 'Response Headers', value: resHeaders});
    headers.push({name: 'Request Headers', value: reqHeaders});

    return headers;
  }

  render() {
    const {query, handleOnClose, id} = this.props;

    return (
      <div id='side'>
        <div><a href='#' className='close' onClick={handleOnClose}></a></div>
        <div>{this.state.content}</div>
        <Headers headers={this.getHeaders(query)}/>
      </div>
    );
  }
}

export default Query;
