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
import TicketDetails from './TicketDetails'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TicketsList() {
  const classes = useStyles();
  const [tickets, setTickets] = useState([]);
  const [currentModal, setCurrentModal] = useState([]);
  // modal controller
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e, row) => {
    setCurrentModal(row)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch('/ticket')
    .then(res => res.json())
    .then(data => data.reverse())
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
            <TableCell align="right">Cohort</TableCell>
            <TableCell align="right">Created by</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((row) => (
            <TableRow key={row.TicketID} onClick={e => handleOpen(e, row)}>
              <TableCell component="th" scope="row">
                {row.ProblemStatement}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.cohort}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.status ? row.status : "Pending"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {console.log(currentModal)}
      {open && <TicketDetails open={open} onClose={handleClose} details={currentModal}/>}
    </TableContainer>
  );
}