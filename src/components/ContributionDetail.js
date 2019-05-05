import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3
  },
  photos: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 3
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },

  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  form: {
    marginTop: theme.spacing.unit * 10
  },
  textField: {
    width: 500
  }
});

class ContributionDetail extends React.PureComponent {
  state = {
    evaluation: 0,
    comment: ''
  };

  handleStatusChange = event => {
    this.setState({ evaluation: event.target.value });
  };

  handleCommentChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = () => {
    const { evaluation, comment } = this.state;
    const { history } = this.props;
    fetch('https://demo0929535.mockable.io/evaluate', {
      method: 'POST',
      body: JSON.stringify({ evaluation, comment })
    })
      .then(res => res.json())
      .then(() => {
        history.push('/');
      });
  };

  render() {
    const { classes, data, match } = this.props;
    const record = data.find(item => {
      return item.id === match.params.id;
    });
    const date = new Date(record.timestamp).toLocaleString();
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Button component={Link} to="/">
              <SvgIcon
                className={classes.icon}
                style={{ color: 'white', fontSize: 30 }}
              >
                <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
              </SvgIcon>
            </Button>
            <Typography variant="h5" color="inherit">
              Contribution {record.id}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper}>
          <Typography variant="h6" color="inherit">
            Contribution details
          </Typography>
          <Typography component="p">
            <strong>Land cover:</strong> {record.landobservations[0].landcover}
          </Typography>
          <Typography component="p">
            <strong>Land use:</strong> {record.landobservations[0].landuse}
          </Typography>
          <Typography component="p">
            <strong>Date:</strong> {date}
          </Typography>

          <div className={classes.photos}>
            <GridList className={classes.gridList} cols={2.5}>
              {record.photos.map(tile => (
                <GridListTile key={tile.url}>
                  <img src={tile.url} alt={tile.title} />
                  <GridListTileBar
                    title={tile.direction.toUpperCase()}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>

          <div className={classes.form}>
            <Typography variant="h6" color="inherit">
              Evaluate the quality of a contribution
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="Evaluation"
                name="evaluation"
                className={classes.group}
                onChange={this.handleStatusChange}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Approved"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Rejected because of photos"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Rejected because of classifications"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Rejected because of location"
                />
                <FormControlLabel
                  value="9"
                  control={<Radio />}
                  label="Rejected"
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <TextField
                id="comment"
                label="Comment"
                multiline
                rowsMax="6"
                onChange={this.handleCommentChange}
                className={classes.textField}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </FormControl>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(ContributionDetail));
