import React, {Component} from 'react';
import ListItem from './ListItem';

class CollapsibleItem extends Component {
  renderListItem(listItems) {
    return listItems.map(listItem => (
      <ListItem name={listItem.name} value={listItem.value}/>
    ));
  }

  render(){
    const {name, value} = this.props;
    return (
      <div className='collapsible'>
        <div className='collapsible-header bold'>
          <a href='#' className='arrow arrow-right'></a>{name} ({value.length})
        </div>
        <ul>
          {this.renderListItem(value.sort((a, b) => a.name - b.name))}
        </ul>
      </div>
    );
  }
}

export default CollapsibleItem;
