import React, {Component} from 'react';
import CollapsibleItem from './CollapsibleItem';

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

  render() {
    const {query, handleOnClose, id} = this.props;
    const {general, request, response} = query;
    const {headers: reqHeaders} = request;
    const {headers: resHeaders} = response;

    return (
      <div id='side'>
        <div><a href='#' className='close' onClick={handleOnClose}></a></div>
        <div>{this.state.content}</div>
        <CollapsibleItem name='General' value={general} shouldSort={false}/>
        <CollapsibleItem name='Response Headers' value={resHeaders}/>
        <CollapsibleItem name='Request Headers' value={reqHeaders} className='no-border'/>
      </div>
    );
  }
}

export default Query;
