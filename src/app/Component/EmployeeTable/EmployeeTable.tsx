'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton } from '@mui/material';
import { DeleteOutlined, Visibility } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '@/app/store/Employee/action';
import AddEmployee from '../Employee/AddEmployee';
import { UpdateModalDetails } from '@/app/store/EmployeeModal/action';


export default function EmployeeTable() {

  const [open, setOpen] = React.useState(false);
  const modalData = useSelector((state: any) => state?.Modal);
  const [selectId, setSelectedId] = React.useState();
  const employeesList = useSelector((state: any) => state?.Employee?.items);
  const dispatch = useDispatch();

  const handleDelete = (e: any) => {
    setSelectedId(e)
    setOpen(true)
  }

  const handleclose = () => setOpen(false);

  const handleUpdate = (employeeData: any, index: number) => {
    const data = { showModal: true, text: 'Update Employee', employeeData, index }
    dispatch(UpdateModalDetails(data));
  }

  const handleSure = () => {
    const id: any = selectId;
    dispatch(Delete(id));
    setOpen(false);
  }


  const addEmployee = () => {
    const data = { showModal: true, text: 'Add Employee' }
    dispatch(UpdateModalDetails(data));
  }

  return (

    <Grid container spacing={1}>
      <h1 className='heading'>Employee</h1>
      <Button
        data-testid="Users"
        variant="contained"
        onClick={addEmployee}
        className='btn-size'
      >
        Add Employee
      </Button>
      <Grid item xs={2}></Grid>
      <Grid item xs={10} className='pd'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>

              <TableRow>
                <TableCell>EmployeeId</TableCell>
                <TableCell align="right">FirstName</TableCell>
                <TableCell align="right">LastName&nbsp;</TableCell>
                <TableCell align="right">Email&nbsp;</TableCell>
                <TableCell align="right">Phone Number&nbsp;</TableCell>
                <TableCell align="right">Employee Address&nbsp;</TableCell>
                <TableCell align="right">Employee Designation&nbsp;</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>

              {employeesList?.length && employeesList?.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" >
                    {item.EmployeeId}
                  </TableCell>
                  <TableCell align="right">{item.FirstName}</TableCell>
                  <TableCell align="right">{item.LastName}</TableCell>
                  <TableCell align="right">{item.Email}</TableCell>
                  <TableCell align="right">{item.PhoneNumber}</TableCell>
                  <TableCell align="right">{item.EmployeeAddress}</TableCell>
                  <TableCell align="right">{item.EmployeeDesignation}</TableCell>


                  <TableCell className='side'>
                    <IconButton onClick={() => handleUpdate(item, index)}
                    >
                      <Visibility
                      />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(index)}
                    >
                      <DeleteOutlined
                      />{" "}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}



            </TableBody>


          </Table>
          {modalData?.showModal &&
            <AddEmployee />
          }

        </TableContainer>
      </Grid>
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title">
          <DialogTitle
            id="alert-dialog-title"
          >
            Confirm
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete ?
            </DialogContentText>
          </DialogContent>
          <DialogActions >
            <Button
              data-testid="Users"
              variant="contained"
              onClick={handleclose}
            >
              Cancel
            </Button>
            <Button
              data-testid="Users"
              variant="contained"
              color="primary"
              onClick={handleSure}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Grid>
  );
}