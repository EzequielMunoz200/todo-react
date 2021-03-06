import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TaskCreator = (props) => {
  const updateNewTaskValue = (e) => {
    setNewTaskName(e.target.value);
  };
  const [newTaskName, setNewTaskName] = useState('');

  const createNewTask = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    setNewTaskName('');
  };
  return (
    <form className='my-4 pt-2' onSubmit={createNewTask} autoComplete='off'>
      <TextField
        id='outlined-basic'
        className='mr-2'
        label='New Task'
        variant='outlined'
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <Button
        color='primary'
        onClick={createNewTask}
        className='mt-2 '
        variant='contained'
      >
        Add new task
      </Button>
    </form>
  );
};

export default TaskCreator;
