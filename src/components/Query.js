import React, {Component} from 'react';
import Headers from './Headers';
import Response from './Response';

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {content: null};
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

  getContent(query) {
    if (!query) return;

    query.getContent(content => {
      this.setState({content});
    });
  }

  renderNav() {
    const {handleOnClose} = this.props;
    return (
      <div>
        <a href='#' className='close' onClick={handleOnClose}></a>
      </div>
    );
  }

  componentDidMount() {
    this.getContent(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    this.getContent(nextProps.query);
  }

  render() {
    const {query, id} = this.props;

    return (
      <div id='side'>
        {this.renderNav()}
        <Response response={this.state.content}/>
        <Headers headers={this.getHeaders(query)}/>
      </div>
    );
  }
}

export default Query;
