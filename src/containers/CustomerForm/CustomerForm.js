import React, {useState, useEffect} from 'react'
import { useFileUpload } from 'use-file-upload';
import './CustomerForm.scss'
import { Chip, Divider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Button, Form } from 'react-bootstrap';
import {MDCTextField} from '@material/textfield';
import TextField from '@mui/material/TextField';
import mailSender, {getBody} from '../../service/sendEmail';
import AnimatedText from 'react-animated-text-content';

const CustomerForm = () => {
// const [file, selectFile] = useFileUpload()
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [showSuccess, setShowSuccess] = useState(false)

//  passport photo, video
//  Date of birth, Passport number, Nationality, Country of residence, Phone number, Address, and occupation.

const handleClick = (e) => {
    e.preventDefault()
    console.log('sending email')
    console.log(name, "   ", email)
    setShowSuccess(true)
    setName("")
    setEmail("")
}
return (
    <div className='customerForm'>
        <div className='wrapper'>
            <h1>Please fill in the details</h1>
            <Divider/>
            <div className='container'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} onFocus={() => setShowSuccess(false)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setShowSuccess(false)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={e => handleClick(e)}>
                        Generate Link
                    </Button>
                </Form>
                <div className={`successMessage ${!showSuccess && 'success'}`}>
                    Your Response has been recorded. Thank you for cooperating.
                </div>
            </div>
        </div>
        {/* <div>
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
        </div> */}
    </div>
    )
}

export default CustomerForm