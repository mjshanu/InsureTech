import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, address, zip, place, phone) {
  return { name, address, zip, place, phone };
}

const rows = [
  createData('testname1', 'testaddress1', 123456, 'USA', 123456789),
  createData('testname2', 'testaddress2', 123456, 'USA', 123456789),
  createData('testname3', 'testaddress3', 123456, 'USA', 123456789),
  createData('testname4', 'testaddress4', 123456, 'USA', 123456789),
  createData('testname5', 'testaddress5', 123456, 'USA', 123456789),
];

export default function Wholesalername() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Adress</TableCell>
            <TableCell align="right">zip</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.zip}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right"><button>ADD</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}