import React, {Component} from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

class Queries extends Component {
  render() {
    const {queries} = this.props;
    const columns = [{
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

    return (
      <ReactTable
        data={queries}
        columns={columns}
        showPaginationTop={true}
        showPaginationBottom={false}
        className='-striped -highlight'
        getTdProps={(state, rowInfo, column) => {
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
              alert(`clicked on index ${rowInfo.index}`)
              console.log('It was in this row:', rowInfo)

              if (handleOriginal) handleOriginal();
            }
          }
        }}
      />
    );
  }
}

export default Queries;
