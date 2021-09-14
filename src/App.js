import './App.css';
import React, { useState,useRef, useEffect } from 'react';
import {Input, makeStyles, MenuItem, Select, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 650
  },
});

function App() {

  const updateName = (idx) => e => {
    let newRows = [...rows];
    newRows[idx].name = e.target.value;
    setRows(newRows);
    console.log("Name updated");
  }
  const updateStatus = (idx) => {
    let newRows = [...rows];
    if (newRows[idx].status === true) newRows[idx].status = false;
    else newRows[idx].status = true;
    setRows(newRows);
    console.log("Status updated");
  }
  const updateAge = (idx) => e => {
    let newRows = [...rows];
    newRows[idx].age = e.target.value;
    setRows(newRows);
    console.log("Age updated");
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
              <TableRow>
                <TableCell>
                  <Input type="text" onChange={updateName(idx)} value={row.name} />
                </TableCell>
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
