import React, {useState, useEffect} from 'react'
import { useFileUpload } from 'use-file-upload';
import './CustomerList.scss'
import { Chip, Divider} from '@mui/material';
import {NavLink, Navigate, useNavigate} from 'react-router-dom'
import CustomerCard, {CustomerCardHeader} from '../CustomerCard/CustomerCard';
import InputField from '../InputField/InputField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import StyledButton from '../StyledButton/StyledButton';
import Customers from '../../service/customers';

const CustomerList = () => {
    const [customers, setCustomers] = useState(Customers)
    const navigate = useNavigate()
    const user = { name : "buggy the clown", photo : "this is a photo", country : "wano", dob : '1789'}

    const handleClick = (id) => {
        navigate('/CustomerProfile', {state : id})
    }
    const handleStatusChange = (id) => {

    }

    return (
        <div className='customerList'>
            <CustomerCardHeader />
            <Divider/>
            {
                customers.map(customer => {
                    return <div key={customer.id}>
                        <CustomerCard customer={customer} 
                                    onClick={() => handleClick(customer.id)}
                                    onStatusChange={() => handleStatusChange(customer.id)} />
                        <Divider />
                    </div>
                })
            }
        </div>
    )
}

export default CustomerList