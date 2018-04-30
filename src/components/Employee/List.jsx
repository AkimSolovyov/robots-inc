import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from 'material-ui/Grid';
import EmployeeCard from './EmployeeCard';

export default ({ employees, loadMore }) => (
  <InfiniteScroll
    threshold={500}
    pageStart={1}
    loadMore={loadMore}
    hasMore={true}
    loader={
      <div className="loader" key={0}>
        Loading ...
      </div>
    }
  >
    <Grid container spacing={16}>
      {!!employees.length &&
        employees.map(employee => {
          return (
            <Grid item key={employee.id} xs={12} sm={6} md={6}>
              <EmployeeCard {...employee} />
            </Grid>
          );
        })}
    </Grid>
  </InfiniteScroll>
);
