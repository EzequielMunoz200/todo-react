import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';

const TaskBanner = (props) => (
  <Fragment>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>
        {props.userName} Task's ({props.taskItems.filter((t) => !t.done).length}{' '}
      tasks to do)
        </Typography>
      </Toolbar>
    </AppBar>
  </Fragment>
);

export default TaskBanner;
