import React, {Component} from 'react';
import {parse} from '../utils/utils';
import Queries from './Queries';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {queries: []};
    this.requestHandler = this.requestHandler.bind(this);
  }

  requestHandler(request) {
    const query = parse(request);

    if (query) {
      this.setState({
        queries: [query, ...this.state.queries]
      });
    }
  }

  componentDidMount() {
    const {onRequestFinished} = this.props;
    onRequestFinished.addListener(this.requestHandler);
  }

  render() {
    return <Queries queries={this.state.queries}/>;
  }
}

export default App;
