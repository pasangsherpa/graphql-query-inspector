import React, {Component} from 'react';
import Headers from './Headers';
import Response from './Response';

const tabs = {
  headers: 'Headers',
  preview: 'Preview',
  response: 'Response'
};

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      currentTab: tabs.headers
    };
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

  setCurrentTab(event, tab) {
    event.preventDefault();
    this.setState({'currentTab': tab});
  }

  renderNav() {
    const {handleOnClose} = this.props;
    return (
      <div className='nav'>
        <a href='#' className='close' onClick={handleOnClose}></a>
        {Object.values(tabs).map(tab => {
          const isCurrentTab = this.state.currentTab === tab;
          return (
            <a
              key={tab}
              className={`tablinks ${isCurrentTab ? 'active' : ''}`}
              onClick={(e) => this.setCurrentTab(e, tab)}
            >{tab}</a>
          );
        })}
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
        {this.state.currentTab === tabs.preview && <Response response={this.state.content} type='pretty'/>}
        {this.state.currentTab === tabs.response && <Response response={this.state.content}/>}
        {this.state.currentTab === tabs.headers && <Headers headers={this.getHeaders(query)}/>}
      </div>
    );
  }
}

export default Query;
