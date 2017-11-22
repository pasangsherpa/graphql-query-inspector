import React, {Component} from 'react';
import ListItem from './ListItem';

class CollapsibleItem extends Component {
  constructor(props) {
    super(props);

    this.state = {isOpen: true};
  }

  toggleOpen() {
    this.setState({'isOpen': !this.state.isOpen});
  }

  renderListItem(listItems) {
    return listItems.map(listItem => {
      const {name, value} = listItem;
      return <ListItem key={name} name={name} value={value}/>;
    });
  }

  render(){
    const {name, value, className = ''} = this.props;
    const {isOpen} = this.state;
    const arrowClass = isOpen ? 'arrow arrow-down' : 'arrow arrow-right';

    return (
      <div className={`collapsible ${className}`}>
        <div className='collapsible-header bold'>
          <a
            href='#'
            onClick={() => this.toggleOpen()}
            className={arrowClass}>
          </a>
          {`${name} (${value.length})`}
        </div>
        <ul style={{display: isOpen ? 'block' : 'none'}}>
          {this.renderListItem(value.sort((a, b) => a.name - b.name))}
        </ul>
      </div>
    );
  }
}

export default CollapsibleItem;
