import React, {Component} from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

class Queries extends Component {
  render() {
    const {queries} = this.props;
    const columns = [{
      Header: 'Name',
      id: 'name',
      accessor: query => query.request.url
    },{
      Header: 'Status',
      id: 'status',
      accessor: query => query.response.status
    },{
      Header: 'Size',
      id: 'size',
      accessor: query => query.response.content.size
    },{
      Header: 'Time',
      id: 'time',
      accessor: query => query.time
    },{
      Header: 'Started Date',
      id: 'start-date',
      accessor: query => query.startedDateTime.toISOString()
    }];

    return (
      <ReactTable
        data={queries}
        columns={columns}
        defaultPageSize={25}
        className='-striped -highlight'
        getTrProps={(state, rowInfo) => {
          return {
            onClick: (e, handleOriginal) => {
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
