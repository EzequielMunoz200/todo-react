import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { TableCell, TableRow } from '@material-ui/core';

const TaskRow = (props) => {
  return (
    <TableRow key={props.task.name}>
      <TableCell component='td' scope='row'>
        {props.task.name}
      </TableCell>

      <TableCell component='td' scope='row'>
        <Checkbox
          onChange={() => {
            props.toggleTask(props.task);
          }}
          type='checkbox'
          name={props.task.name}
          id=''
          checked={props.task.done}
          color='primary'
          size='medium'
        />
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;
