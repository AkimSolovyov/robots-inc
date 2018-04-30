import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import selectors from './selectors';
import * as actions from './actions';
import Layout from '../Layout';
import List from './List';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  controls: {
    padding: '10px 0'
  },
  select: {
    width: '70px'
  },
  label: {
    width: '150px'
  }
});

class CardList extends PureComponent {
  state = {
    sortOrder: 'asc'
  };

  componentDidMount() {
    this.props.robotsLoadRequest();
  }

  handleLoadMore = page => {
    page < 101 &&
      this.props.robotsLoadRequest({
        page,
        sortOrder: this.state.sortOrder
      });
  };

  handleChangeSorting = ({ target: { value } }) => {
    this.setState(
      {
        sortOrder: value
      },
      () => this.props.sortRobots({ sortOrder: value, page: 1 })
    );
  };

  render() {
    const {
      classes,
      robots: { employees }
    } = this.props;

    return (
      <Layout>
        <div className={classes.root}>
          <div className={classes.controls}>
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classes.label}
                htmlFor="controlled-open-select"
              >
                Sorting by Company:
              </InputLabel>
              <Select
                className={classes.select}
                value={this.state.sortOrder}
                onChange={this.handleChangeSorting}
                inputProps={{ name: 'sortOrder', id: 'controlled-open-select' }}
              >
                <MenuItem value={'asc'}>Asc</MenuItem>
                <MenuItem value={'desc'}>Desc</MenuItem>
              </Select>
            </FormControl>
          </div>

          {!!this.props.robots.employees.length && (
            <List employees={employees} loadMore={this.handleLoadMore} />
          )}
        </div>
      </Layout>
    );
  }
}

export default withRouter(
  connect(selectors, actions)(withStyles(styles)(CardList))
);
