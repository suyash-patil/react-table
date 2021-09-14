import './App.css';
import React, { useState} from 'react';
import {ClickAwayListener, Input, makeStyles, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 650
  },
});

function App() {

  const changeEditableStatus = (idx) => {
    let newRows = [...rows];
    newRows[idx].editable = true;
    setRows(newRows);
  }

  const handleClickAway = (idx) => {
    let newRows = [...rows];
    newRows[idx].editable = false;
    setRows(newRows);
  }

  const updateName = (idx) => e => {
    let newRows = [...rows];
    newRows[idx].name = e.target.value;
    setRows(newRows);
  }
  const updateStatus = (idx) => {
    let newRows = [...rows];
    if (newRows[idx].status === true) newRows[idx].status = false;
    else newRows[idx].status = true;
    setRows(newRows);
  }
  const updateAge = (idx) => e => {
    let newRows = [...rows];
    newRows[idx].age = e.target.value;
    setRows(newRows);
  }

  const data = [
    {
      name: 'John',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'Doe',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'James',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'Clara',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'Arya',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'Ash',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'Gary',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'Anatoly',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'Jon',
      status: true,
      age: 10,
      editable: false
    },
    {
      name: 'Snow',
      status: true,
      age: 10,
      editable: false
    }]

  const [rows,setRows] = useState(data);
  const classes = useStyles();


  return (
    <div className="App">
      {rows && <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell>
                Age
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
              <ClickAwayListener onClickAway={() => handleClickAway(idx)}>
                <TableCell onClick={() => changeEditableStatus(idx)}>
                  {row.editable ?
                      <Input style={{ fontSize: "0.875rem"}} type="text" onChange={updateName(idx)} value={row.name} /> : row.name
                  }

                </TableCell>
                </ClickAwayListener>
                <TableCell>
                  <Switch checked={row.status} onChange={() => updateStatus(idx)} />
                </TableCell>
                <TableCell>
                  <select value={row.age} onChange={updateAge(idx)}>
                    <option value="10">
                      10
                    </option>
                    <option value="11">
                      11
                    </option>
                    <option value="12">
                      12
                    </option>
                    <option value="13">
                      13
                    </option>
                    <option value="14">
                      14
                    </option>
                    <option value="15">
                      15
                    </option>
                  </select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </div>
  );
}



export default App;
