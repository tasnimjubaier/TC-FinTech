import React, {useState, useEffect} from 'react'
import { useFileUpload } from 'use-file-upload';
import './OnboardCustomerForm.scss'
import { Chip, Divider } from '@mui/material';
import CustomerCard from '../CustomerCard/CustomerCard';
import InputField from '../InputField/InputField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import StyledButton from '../StyledButton/StyledButton';
import { Button, Form } from 'react-bootstrap';
import {MDCTextField} from '@material/textfield';
import TextField from '@mui/material/TextField';
import mailSender, {getBody} from '../../service/sendEmail';
import AnimatedText from 'react-animated-text-content';

const OnboardCustomerForm = () => {
    // const [file, selectFile] = useFileUpload()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [showSuccess, setShowSuccess] = useState(false)
    const emailSubject = "Fintech Customer Onboarding"
    
    const generateLink = () => {
        // todo
        return "localhost:3006/CusotmerForm"
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log('sending email')
        console.log(name, "   ", email)
        setShowSuccess(true)
        setName("")
        setEmail("")
        // mailSender.sendEmail(emailSubject, email, getBody(name, generateLink()))
    }
  return (
    <div className='onboardForm'>
        <div className='wrapper'>
            <h1>Onboard Customer</h1>
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
                    {/* <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                        >
                        Your email has been sent successfully.
                    </AnimatedText> */}
                    Your email has been sent successfully.
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

export default OnboardCustomerForm