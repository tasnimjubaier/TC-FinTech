import React, {useState, useEffect} from 'react'
import { useFileUpload } from 'use-file-upload';
import './CustomerForm.scss'
import { Chip, Divider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
// import { Button, Form } from 'react-bootstrap';
import {MDCTextField} from '@material/textfield';
import TextField from '@mui/material/TextField';
import AnimatedText from 'react-animated-text-content';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Customers, {addCustomer} from '../../service/customers';

//  passport photo, video
//  Date of birth, Passport number, Nationality, Country of residence, Phone number, Address, and occupation.


const PassportComponent = ({setFile}) => {
    const [file, selectFile] = useFileUpload()
    return (
        <div className='passportComponent'>

            <div className='file'>
                <Typography sx={{margin: "0 0 40px 0"}} variant="h5" gutterBottom component="div">
                    Place Your Passport Photo
                </Typography>

                <Card sx={{ minWidth: 500, minHeight: 300, maxWidth: 500, margin: "auto" }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        image={file ? file.source : ""}
                        height="100%"
                        width='100%'
                        />
                    </CardActionArea>
                    {!file && 
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="100%"
                            width='100%'
                            />
                        </CardActionArea>
                    }
                </Card>

                <Button sx={{margin: "40px 0px"}}
                    onClick={() => {
                        // Single File Upload accepts only images
                        selectFile({ accept: 'image/*' }, ({ source, name, size, file }) => {
                            // file - is the raw File Object
                            console.log({ source, name, size, file })
                            
                            setFile({ source, name, size, file })
                        })
                    }}
                >
                    Click to Upload
                </Button>

                {/* {file ? (
                    <div className='preview'>
                        <img className='image' src={file.source} alt='preview' />
                        <span> Name: {file.name} </span>
                        <span> Size: {file.size} </span>
                    </div>
                ) : (
                    <span>No file selected</span>
                )} */}
            </div>
        </div>
    )
}

const VideoComponent = ({setFile}) => {
    const [file, selectFile] = useFileUpload()

    return (
        <div className='videoComponent'>
            <div className='file'>
                <Typography sx={{margin: "0 0 40px 0"}} variant="h5" gutterBottom component="div">
                    Please Upload a 5 second profile video
                </Typography>

                <Typography sx={{margin: "0 0 40px 0"}} variant="body2" gutterBottom component="div">
                    Selected File : 
                    {
                        file &&
                        <Typography sx={{margin: "0 0 40px 0", fontSize: 16 }} variant="caption" gutterBottom component="span"> {file.name} </Typography> 
                    }
                </Typography>

                <Button sx={{margin: "40px 0px"}}
                    onClick={() => {
                        // Single File Upload accepts only images
                        selectFile({ accept: 'video/*' }, ({ source, name, size, file }) => {
                            // file - is the raw File Object
                            console.log({ source, name, size, file })
                            setFile({ source, name, size, file })
                        })
                    }}
                >
                    Click to Upload
                </Button>
            </div>
        </div>
    )
}

const InfoComponent = ({userInfo, setUserInfo}) => {

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
          border: '1px solid #ced4da',
          fontSize: 16,
          width: 'auto',
          padding: '10px 12px',
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
          },
        },
      }))
    
    const InputElement = ({info, setInfo}) => {
        return (
            <Box
                component="form"
                noValidate
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { sm: '1fr 1fr' },
                    gap: 2,
                }}
                >
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                    Bootstrap
                    </InputLabel>
                    <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
                </FormControl>
            </Box>
        )
    }

    return (
        <div className='infoComponent'>
            <InputElement />
        </div>
    )
}

const HorizontalStepper = ({currentStep}) => {
    const steps = ['Upload Passport Photo', 'Upload Face Video', 'Fill up information'];
    const isStepFailed = (step) => {
        return false
    }

    return (
        <Box sx={{ width: '80%', margin: 'auto', paddingTop: '100px' }}>
            <Stepper activeStep={currentStep}>
                {steps.map((label, index) => {
                    const labelProps = {}
                    if (isStepFailed(index)) {
                        labelProps.optional = (
                        <Typography variant="caption" color="error">
                            Alert message
                        </Typography>
                        )

                        labelProps.error = true;
                    }

                    return (
                        <Step key={label}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
        </Box>
    )
}

const ProgressBar = ({submit, setCurrentStep, infoFilled, fileProvided, setError}) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        console.log(infoFilled + "    " + fileProvided + "     error")
        if(!infoFilled && !fileProvided){
            setError(true)
            return
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setCurrentStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        setCurrentStep((prevActiveStep) => prevActiveStep - 1)
    }

    const getNextButton = () => {
        console.log(activeStep)
        if(activeStep < 2){
            return (
                <Button sx={{width: '120px'}} onClick={handleNext} disabled={activeStep === 2}>
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
            )
        }
        return (
            <Button sx={{width: '120px'}} variant="contained" onClick={submit} endIcon={<SendIcon />}>
                Submit
            </Button>
        )
    }

    return (
        <MobileStepper
          variant="progress"
          steps={3}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 700, flexGrow: 1, paddingTop: "100px", margin: 'auto' }}
          nextButton={getNextButton()}
          backButton={
            <Button sx={{width: '120px'}} onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      )
}

//  { source: "", file : null, size : "", name : "" }

const CustomerForm = () => {
    const [passport, setPassport] = useState(null)
    const [video, setVideo] = useState(null)
    const [userInfo, setUserInfo] = useState({ nane: "", dob: "", passportNo: "", nationality: "", country: "", phone: "", address: "", occupation: "", status: false })

    const [showSuccess, setShowSuccess] = useState(false)
    const [currentComponent, setCurrentComponent] = useState(0)
    const [nextButtonVisible, setNextButtonVisible] = useState(true)
    const [previusButtonVisible, setPreviusButtonVisible] = useState(false)
    const [showError, setShowError] = useState(false)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        document.title = "Customer Form"
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
        setShowSuccess(true)
        setCurrentComponent(currentComponent + 1)
        addCustomer({ id : 123, ...userInfo})
    }
    return (
        <div className='customerForm'>
            <div className='wrapper'>
                <h1>Boinging</h1>
                <Divider/>

                <HorizontalStepper currentStep={currentComponent}/>

                {
                    currentComponent < 3 && 
                        <>
                            {currentComponent == 0 && <PassportComponent setFile={setPassport}/> }
                            {currentComponent == 1 && <VideoComponent setFile={setVideo}/> }
                            {currentComponent == 2 && <InfoComponent /> }

                            {showError && 
                                <div className='error'>
                                    Please provide 
                                    {currentComponent==0 && <span> a passport photo</span> } {currentComponent==1 && <span> face video </span> } 
                                    {currentComponent==2 && <span> necessary information</span> }
                                </div>
                            }

                            <ProgressBar submit={handleSubmit} setCurrentStep={setCurrentComponent} 
                                infoFilled={ currentComponent == 2 ? userInfo.validated : false}
                                fileProvided={ currentComponent == 0 ? passport != null : (currentComponent == 1 ? video != null : false) }
                                setError={setShowError}
                                />
                        </>    
                }
                {
                    currentComponent == 3 && 
                        <div className='thankYou'> 
                            thank you. your submission has been recorded.
                        </div>
                }

                {/* <div className='container'>
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
                </div> */}
            </div>
        </div>
    )
}

export default CustomerForm