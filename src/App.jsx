import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import TaskBanner from './components/TaskBanner';
import TaskCreator from './components/TaskCreator';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import TaskRow from './components/TaskRow';
import VisibilityControl from './components/VisibilityControl';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableCellDone = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
   
  },
});


function App() {

  const classes = useStyles();
  const [userName, setUserName] = useState('Doe');
  const [taskItems, setTaskItems] = useState([
    { name: 'Task One', done: false, id: 1 },
    { name: 'Task Two', done: false, id: 2 },
    { name: 'Task Three', done: true, id: 3 },
    { name: 'Task Four', done: false, id: 4 },
  ]);

  const [showCompleted, setShowCompleted] = useState(true);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName) && taskName.length !== 0)
      setTaskItems([...taskItems, { name: taskName, done: false }]);
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const taskTableRows = (doneValue) =>
    taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <div className='App'>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Container maxWidth='lg'>
        <TaskCreator createNewTask={createNewTask} />
        <TableContainer>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Done</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{taskTableRows(false)}</TableBody>
          </Table>
        </TableContainer>

        <div className='bg-light text-dark text-center p-2'>
          <VisibilityControl
            isChecked={showCompleted}
            callback={(checked) => setShowCompleted(checked)}
          />
        </div>
        {showCompleted && (
          <TableContainer>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <StyledTableCellDone>Description</StyledTableCellDone>
                  <StyledTableCellDone>Done</StyledTableCellDone>
                </TableRow>
              </TableHead>
              <TableBody>{taskTableRows(true)}</TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  );
}

export default App;
