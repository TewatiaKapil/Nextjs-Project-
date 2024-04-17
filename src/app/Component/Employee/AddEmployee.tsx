'use client'
import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Button, Dialog, DialogTitle, Grid, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeeCreate, UpdateEmployee } from '@/app/store/Employee/action';
import { UpdateModalDetails } from '@/app/store/EmployeeModal/action';


const AddEmployee = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({} as any);
    const modalData = useSelector((state: any) => state?.Modal);

    const [formData, setFormData] = useState({
        EmployeeId: (modalData?.employeeData?.EmployeeId) ? (modalData?.employeeData?.EmployeeId) : '',
        FirstName: modalData?.employeeData?.FirstName ? modalData?.employeeData?.FirstName : '',
        LastName: modalData?.employeeData?.LastName ? modalData?.employeeData?.LastName : '',
        Email: modalData?.employeeData?.Email ? modalData?.employeeData?.Email : '',
        PhoneNumber: modalData?.employeeData?.PhoneNumber ? modalData?.employeeData?.PhoneNumber : '',
        EmployeeAddress: modalData?.employeeData?.EmployeeAddress ? modalData?.employeeData?.EmployeeAddress : '',
        EmployeeDesignation: modalData?.employeeData?.EmployeeDesignation ? modalData?.employeeData?.EmployeeDesignation : '',
    });
    
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });

    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setFormData({
            EmployeeId: '',
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: '',
            EmployeeAddress: '',
            EmployeeDesignation: ''
        });
        let newErrors: any = {};
        if (!formData.EmployeeId.trim()) {
            newErrors.EmployeeId = 'EmployeeId is required';
        } else if (!/^\d+$/.test(formData.EmployeeId)) {
            newErrors.EmployeeId = 'EmployeeId must be a number';
        }

        if (!formData.FirstName.trim()) {
            newErrors.FirstName = 'FirstName is required';
        }
        if (!formData.LastName.trim()) {
            newErrors.LastName = 'LastName is required';
        }
        if (!formData.Email.trim()) {
            newErrors.Email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
            newErrors.Email = 'Email is invalid';
        }
        if (!formData.PhoneNumber.trim()) {
            newErrors.PhoneNumber = 'Phone Number is required';
        } else if (!/^\+?\d{1,4}?\d{9}$/.test(formData.PhoneNumber)) {
            newErrors.PhoneNumber = 'Phone Number is invalid';
        }

        if (!formData.EmployeeAddress.trim()) {
            newErrors.EmployeeAddress = 'Address is required';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            if (modalData?.text === 'Add Employee') {
                dispatch(EmployeeCreate(formData));
                handleClose();
            }
            else {
                Object.assign(formData, { index: modalData?.index });
                dispatch(UpdateEmployee(formData));
                handleClose();
            }
        }
    };

    const handleClose = () => {
        const data = { showModal: false, text: '' }
        dispatch(UpdateModalDetails(data));
    }

    return (
        <div>
            <div className='mrgnLeft'>
                <div>
                    <Dialog className='dialog-size'
                        open={modalData?.showModal}
                        aria-labelledby="alert-dialog-title">
                        <DialogTitle
                            id="alert-dialog-title"
                        >
                            {modalData?.text}
                        </DialogTitle>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid item xs={6} >
                                    <FormControl className='width'>
                                        <InputLabel htmlFor="my-input">Employee Id</InputLabel>
                                        <Input type='text' name='EmployeeId' value={formData.EmployeeId} onChange={handleChange} />
                                    </FormControl>
                                    {errors.EmployeeId && <span className="error">{errors.EmployeeId}</span>}

                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl className='width'>

                                        <InputLabel htmlFor="my-input">FirstName</InputLabel>
                                        <Input type='text' name='FirstName' value={formData.FirstName} onChange={handleChange} />
                                    </FormControl>
                                    {errors.FirstName && <span className="error">{errors.FirstName}</span>}

                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={6} >
                                    <FormControl className='width'>
                                        <InputLabel htmlFor="my-input">LastName</InputLabel>
                                        <Input type='text' name='LastName' value={formData.LastName} onChange={handleChange} />
                                    </FormControl>
                                    {errors.LastName && <span className="error">{errors.LastName}</span>}

                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl className='width'>
                                        <InputLabel htmlFor="my-input">Email</InputLabel>
                                        <Input type='text' name='Email' value={formData.Email} onChange={handleChange} />
                                    </FormControl>
                                    {errors.Email && <span className="error">{errors.Email}</span>}

                                </Grid>
                            </Grid>
                            <Grid container spacing={1} >
                                <Grid item xs={6} >
                                    <FormControl className='width'>
                                        <InputLabel htmlFor="my-input">PhoneNumber</InputLabel>
                                        <Input type='text' name='PhoneNumber' inputProps={{ maxLength: 10 }} value={formData.PhoneNumber} onChange={handleChange} />
                                    </FormControl>
                                    {errors.PhoneNumber && <span className="error">{errors.PhoneNumber}</span>}
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl className='width'>
                                        <InputLabel htmlFor="my-input">Employee Address</InputLabel>
                                        <Input type='text' name='EmployeeAddress' value={formData.EmployeeAddress} onChange={handleChange} />
                                    </FormControl>
                                    {errors.EmployeeAddress && <span className="error">{errors.EmployeeAddress}</span>}

                                </Grid>
                            </Grid>
                            <Grid container spacing={1} >
                                <Grid item xs={6} >
                                    <FormControl className='width'>
                                        <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                                        <Select
                                            name='EmployeeDesignation'
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={formData.EmployeeDesignation}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'HR'}>HR</MenuItem>
                                            <MenuItem value={'software developer'}>software developer</MenuItem>
                                            <MenuItem value={'Team Lead'}>Team Lead</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} >
                                <Grid item xs={6} className='center'>
                                    <Button type="submit"
                                        variant="contained"
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                                <Grid item xs={6} className='center'>
                                    <Button
                                        variant="contained"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
export default AddEmployee;