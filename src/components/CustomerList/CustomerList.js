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
    const [file, selectFile] = useFileUpload()

    useEffect(() => {
        
        // fetch customer list from db 

        return () => {
        }
    }, []);

    return (
        <div>
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} />
            <Divider />
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} />
            <Divider />
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} />
            <Divider />
            <CustomerCard name={'blabla'} email={'blabla'} status={'pending'} />
            <Divider />
            <CustomerCard name={'blabla'} email={'blabla'} status={'blablabla'} />
            <CustomerCard name={'blabla'} email={'blabla'} status={'blablabla'} />
            <CustomerCard name={'blabla'} email={'blabla'} status={'blablabla'} />
            <CustomerCard name={'blabla'} email={'blabla'} status={'blablabla'} />
            {
                customers.map(customer => (
                    <CustomerCard image={customer.image} name={customer.name} email={customer.email} status={customer.status} />
                ))
            }
            <FormControl>
                {/* <InputLabel htmlFor="component-outlined"></InputLabel> */}
                <InputField
                    id="component-outlined"
                    label="Name"
                />
            </FormControl>
            <StyledButton text={'Generate Link'} />
            <div>
                <button
                    onClick={() => {
                    // Single File Upload
                    selectFile()
                    }}
                >
                    Click to Upload
                </button>

                {file ? (
                    <div>
                    <img src={file.source} alt='preview' />
                    <span> Name: {file.name} </span>
                    <span> Size: {file.size} </span>
                    </div>
                ) : (
                    <span>No file selected</span>
                )}
            </div>
        </div>
    )
}

export default CustomerList