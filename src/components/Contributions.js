import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import EnhancedTableHead from './EnhancedTableHead';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 700
  }
});

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'id', numeric: true, label: 'ID' },
  { id: 'timestamp', numeric: false, label: 'Date' },
  {
    id: 'location.lon',
    numeric: false,
    label: 'Coordinates'
  },
  {
    id: 'landobservations[0].landcover',
    numeric: false,
    label: 'Landcover'
  },
  {
    id: 'landuse',
    numeric: false,
    label: 'Landuse'
  }
];

class Contributions extends React.PureComponent {
  state = {
    order: 'asc',
    orderBy: 'id'
  };

  handleRequestSort = (event, property) => {
    const orderByNew = property;
    const { orderBy, order } = this.state;
    let orderNew = 'desc';

    if (orderBy === property && order === 'desc') {
      orderNew = 'asc';
    }
    this.setState({ order: orderNew, orderBy: orderByNew });
  };

  render() {
    const { classes, data } = this.props;
    const { order, orderBy } = this.state;

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              Contributions to evaluate
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              rows={rows}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy)).map(record => (
                <TableRow hover tabIndex={-1} key={record.id}>
                  <TableCell component="th" scope="row">
                    {record.id}
                  </TableCell>
                  <TableCell>
                    {new Date(record.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {record.location.lat} {record.location.lon}
                  </TableCell>
                  <TableCell>{record.landobservations[0].landcover}</TableCell>
                  <TableCell>{record.landobservations[0].landuse}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      component={Link}
                      to={`/contribution/${record.id}`}
                    >
                      Evaluate
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Contributions);
