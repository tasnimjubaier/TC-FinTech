import React, {useState, useEffect} from 'react'
import { useFileUpload } from 'use-file-upload';
import './CustomerList.scss'
import { Chip, Divider } from '@mui/material';
import CustomerCard from '../CustomerCard/CustomerCard';
import InputField from '../InputField/InputField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import StyledButton from '../StyledButton/StyledButton';

const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    
    useEffect(() => {
        
        // fetch customer list from db 

        return () => {
        }
    }, []);

    return (
        <div className='customerList'>
            <Divider/>
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} />
            <Divider/>
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} />
            <Divider />
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} />
            <Divider />
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} />
            <Divider />
            <CustomerCard name={'blabla'} email={'blabla'} status={'blablabla'} />
            <Divider/>
            <CustomerCard name={'blabla'} email={'blabla'} status={'blablabla'} />
            <Divider/>
            <CustomerCard name={'blabla'} email={'blabla'} status={'blablabla'} />
            <Divider/>
            <CustomerCard name={'blabla'} email={'blabla'} status={'blablabla'} />
            <Divider/>
            {
                customers.map(customer => (
                    <CustomerCard image={customer.image} name={customer.name} email={customer.email} status={customer.status} />
                ))
            }
        </div>
    )
}

export default CustomerList