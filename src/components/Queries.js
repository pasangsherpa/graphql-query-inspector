import React, {Component} from 'react';
import ReactTable from 'react-table';
import Query from './Query';

import 'react-table/react-table.css';

class Queries extends Component {
  constructor(props) {
    super(props);
    this.state = {currentQuery: null};
  }

  getColumns() {
    return [{
      Header: 'Timestamp',
      id: 'timestamp',
      accessor: query => query.startedDateTime.toISOString()
    },{
      Header: 'Name',
      id: 'name',
      minWidth: 300,
      accessor: query => query.request.url
    },{
      Header: 'Status',
      id: 'status',
      maxWidth: 100,
      accessor: query => query.response.status
    },{
      Header: 'Size',
      id: 'size',
      maxWidth: 100,
      accessor: query => query.response.content.size
    },{
      Header: 'Time',
      id: 'time',
      maxWidth: 100,
      accessor: query => query.time
    }];
  }

  setCurrentQuery(query) {
    this.setState({'currentQuery': query});
  }

  render() {
    const {queries} = this.props;
    const getTdProps = (state, rowInfo, column) => {
      if (!rowInfo) return {
        style: {
          display: 'none'
        }
      };

      return (column.id === 'name') && {
        style: {
          cursor: 'pointer'
        },
        onClick: (e, handleOriginal) => {
          this.setCurrentQuery(rowInfo.original);

          if (handleOriginal) handleOriginal();
        }
      }
    };

    return (
      <main>
        <article style={{flex: this.state.currentQuery ? '0 0 370px' : '1'}}>
          <ReactTable
            data={queries}
            columns={this.getColumns()}
            showPaginationTop={true}
            showPaginationBottom={false}
            className='-striped -highlight'
            getTdProps={getTdProps}
          />
        </article>
        {this.state.currentQuery && (
          <Query
            query={this.state.currentQuery}
            handleOnClose={() => this.setCurrentQuery(null)}
          />
        )}
      </main>
    );
  }
}

export default Queries;
