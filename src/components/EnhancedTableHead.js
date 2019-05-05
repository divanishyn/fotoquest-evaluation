import React from 'react';

import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Tooltip from '@material-ui/core/Tooltip';

class EnhancedTableHead extends React.PureComponent {
  createSortHandler = property => event => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const { order, orderBy, rows } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => (
            <TableCell
              key={row.id}
              sortDirection={orderBy === row.id ? order : false}
            >
              <Tooltip title="Sort" enterDelay={300}>
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ))}
          <TableCell />
        </TableRow>
      </TableHead>
    );
  }
}

export default EnhancedTableHead;
