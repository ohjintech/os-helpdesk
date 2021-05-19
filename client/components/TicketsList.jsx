import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TicketsList() {
  const classes = useStyles();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('/ticket')
    .then(res => res.json())
    .then(data => setTickets(data))
    .catch(err => console.error(err))
  }, [])
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Problem Statement</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Created by</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Reviewer</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((row) => (
            <TableRow key={row.TicketID} onClick={() => console.log(row.TicketID)}>
              <TableCell component="th" scope="row">
                {row.ProblemStatement}
              </TableCell>
              <TableCell align="right">{row.CategoryID}</TableCell>
              <TableCell align="right">{row.UserID}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.responderID}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}