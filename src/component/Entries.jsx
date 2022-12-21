import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Link } from "react-router-dom";
function createData(name, PINTOTOP, URGENT,STATE, STATUS, SUBMISSION_ID,REQUESTEDCONTRACT,SLA_TIME,ACTIONS,REQUESTED_PRODUCT,AGENCY_NAME,SUBMITORS_NAME,INSURED_NAME,PROPERTY_INSURED,SUBMISSION_ASSIGNEDTO,COMMENTS,SUBMISSION_DATE_TIME) {
  return {
    name,
    PINTOTOP,
    URGENT,
    STATE,
    STATUS,
    SUBMISSION_ID,
    REQUESTEDCONTRACT,
    SLA_TIME,ACTIONS,
    REQUESTED_PRODUCT,AGENCY_NAME,SUBMITORS_NAME,INSURED_NAME,PROPERTY_INSURED,SUBMISSION_ASSIGNEDTO,COMMENTS,SUBMISSION_DATE_TIME,
   
  };
}

const rows = [
  createData('','','','...','Additional information','in Progress', 'BS37',122, 'RESIDENTAIL PRIMARY','TEST AGENCY 1','kiran','name 111',1,'kiran','...','1/2/2022-01:20 AM EST'),
  createData('','','','...','clearance Match', 'in Progress','BS25',123, 'RESIDENTAIL PRIMARY','TEST AGENCY 2','kishan','name 113',1, 'kishan','...','1/4/2022-01:40 AM EST'),
  createData('','','','...','clearance Match','Bound', 'BS16',124, 'RESIDENTAIL PRIMARY','TEST AGENCY 3','shanu','name 112',1, 'shanu','...','12/3/2022-03:40 AM EST'),
  createData(' ','','','...','clearance Match','in Progress',125, 'BS60','RESIDENTAIL PRIMARY','TEST AGENCY 4','shanu','name 113', 1, 'shanu','...','1/4/2022-01:40 AM EST'),
  createData('','','','...','clearance Match','in Progress',126, 'BS16','RESIDENTAIL PRIMARY', 'TEST AGENCY 3','kiran','name 112',1, 'kiran','...','1/4/2022-01:40 AM EST'),
  createData('','','','...','Binder Generation','in Progress',127, 'BS32','RESIDENTAIL PRIMARY', 'TEST AGENCY 2','kishan','name 121',1, 'kishan','...','7/6/2022-012:45 AM EST'),
  createData('', '','','...','Risk Assignement','in Progress',128, 'BS90','RESIDENTAIL PRIMARY', 'TEST AGENCY 1','kishan' ,'name 113',1,'kishan','...','11/09/2022-09:40 AM EST'),

];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'PINTOTOPS',
  },
  {
    id: 'URGENT',
    numeric: true,
    disablePadding: false,
    label: 'URGENT',
  },
  {
    id: 'SLA_TIME',
    numeric: true,
    disablePadding: false,
    label: 'SLA_TIME',
  },

  {
    id: 'ACTIONS',
    numeric: true,
    disablePadding: false,
    label: 'ACTIONS',
  },
  {
    id: 'STATE',
    numeric: false,
    disablePadding: false,
    label: 'STATE',
  },

  {
    id: 'STATUS',
    numeric: false,
    disablePadding: false,
    label: 'STATUS',
  },
  {
    id: 'SUBMISSION',
    numeric: false,
    disablePadding: false,
    label: 'SUBMISSION',
  },

  
  {
    id: 'REQUESTEDCONTRACT',
    numeric: true,
    disablePadding: false,
    label: 'REQUESTEDCONTRACT',
  },


   {
    id: 'REQUESTED_PRODUCT',
    numeric: true,
    disablePadding: false,
    label: 'REQUESTED_PRODUCT',
  },

  {
    id: 'AGENCY_NAME',
    numeric: true,
    disablePadding: false,
    label: 'AGENCY_NAME',
  },

  {
    id: 'SUBMITORS_NAME',
    numeric: true,
    disablePadding: false,
    label: 'SUBMITORS_NAME',
  },
// 


{
  id: 'INSURED_NAME',
  numeric: true,
  disablePadding: false,
  label: 'INSURED_NAME',
},

{
  id: 'PROPERTY_INSURED',
  numeric: true,
  disablePadding: false,
  label: 'PROPERTY_INSURED',
},

{
  id: 'SUBMISSION_ASSIGNEDTO',
  numeric: true,
  disablePadding: false,
  label: 'SUBMISSION_ASSIGNEDTO',
},


{
  id: 'COMMENTS',
  numeric: true,
  disablePadding: false,
  label: 'COMMENTS',
},

{
  id: 'SUBMISSION_DATE_TIME',
  numeric: true,
  disablePadding: false,
  label: 'SUBMISSION_DATE_TIME',
},

];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Entries() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('PINTOTOP');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  // const nextpage = () => {
  //   console.log("dhugs")
  //   return (<About />)
  // }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Link to="/Addquotes">Add Quotes</Link>
       


       
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />



            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (


                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >


                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />

                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.PINTOTOP}</TableCell>
                      <TableCell align="right">{row.URGENT}</TableCell>

                       <TableCell align="right">{row.STATE}</TableCell>
                      <TableCell align="right">{row.STATUS}</TableCell>
                      <TableCell align="right">{row.SUBMISSION}</TableCell>
                      <TableCell align="right">{row.REQUESTEDCONTRACT}</TableCell>

                       <TableCell align="right">{row.SLA_TIME}</TableCell>
                      <TableCell align="right">{row.ACTIONS}</TableCell>
                      <TableCell align="right">{row.REQUESTED_PRODUCT}</TableCell>
                      <TableCell align="right">{row.AGENCY_NAME}</TableCell>

                      <TableCell align="right">{row.SUBMITORS_NAME}</TableCell>
                       <TableCell align="right">{row.INSURED_NAME}</TableCell>
                      <TableCell align="right">{row.PROPERTY_INSURED}</TableCell>
                      <TableCell align="right">{row.SUBMISSION_ASSIGNEDTO}</TableCell>
                      <TableCell align="right">{row.COMMENTS}</TableCell>
                      <TableCell align="right">{row.SUBMISSION_DATE_TIME}</TableCell>

                   
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}