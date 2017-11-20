import React, {Component} from 'react';
import Queries from './Queries';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {queries: []};
    this.requestHandler = this.requestHandler.bind(this);
  }

  requestHandler(request) {
    this.setState({
      queries: [request, ...this.state.queries]
    });
  }

  componentDidMount() {
    const {onRequestFinished} = this.props;
    onRequestFinished.addListener(this.requestHandler);
  }

  render() {
    return (
      <div>
        <Queries queries={this.state.queries}/>
      </div>
    );
  }
}

export default App;
