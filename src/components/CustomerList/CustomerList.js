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

const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const navigate = useNavigate()
    const user = { name : "buggy the clown", photo : "this is a photo", country : "wano", dob : '1789'}

    const handleClick = (user) => {
        navigate('/CustomerProfile', {state : user})
    }

    useEffect(() => {
        // fetch customer list from db 

        return () => {
        }
    }, []);

    return (
        <div className='customerList'>
            <CustomerCardHeader />
            <Divider/>
            <CustomerCard name={'blaasd;lfkja;slafkjsdlfjslasldfsldafklsdfbla'} email={'blasdfsadfsadfsdafsdfsdaasfdasfsdafabla'} status={'pendiasdfsadfsafsafsdfsdfafsadfsdfsdaffdsng'} />
            <Divider/>
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} onClick={() => handleClick(user)} />
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