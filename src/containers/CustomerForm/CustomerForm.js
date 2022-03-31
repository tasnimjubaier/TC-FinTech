import React, {useState, useEffect, useReducer} from 'react'
import { useFileUpload } from 'use-file-upload';
import './CustomerForm.scss'
import { Chip, Divider, Input, unstable_useId } from '@mui/material';
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
import { CardActionArea, Stack, Paper, FormHelperText } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Customers, {addCustomer} from '../../service/customers';
import OutlinedInput from '@mui/material/OutlinedInput';
import { v4 as uuid } from 'uuid';

//  passport photo, video
//  Date of birth, Passport number, Nationality, Country of residence, Phone number, Address, and occupation.


const PassportComponent = ({passport, setPassport}) => {
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
                        image={passport ? passport.source : ""}
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
                            
                            setPassport({ source, name, size, file })
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

const VideoComponent = ({video, setVideo}) => {
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
                        video &&
                        <Typography sx={{margin: "0 0 40px 0", fontSize: 16 }} variant="caption" gutterBottom component="span"> {video.name} </Typography> 
                    }
                </Typography>

                <Button sx={{margin: "40px 0px"}}
                    onClick={() => {
                        // Single File Upload accepts only images
                        selectFile({ accept: 'video/*' }, ({ source, name, size, file }) => {
                            // file - is the raw File Object
                            console.log({ source, name, size, file })
                            setVideo({ source, name, size, file })
                        })
                    }}
                >
                    Click to Upload
                </Button>
            </div>
        </div>
    )
}

const SimpleInput = ({keya, dispatchUser, title, width}) => {

    return (
        <span key={uuid()} style={{ display: 'flex', flexDirection: 'column', margin: 30, width: width ? width : '100%' }}>
            <FormControl key={uuid()}>
                <InputLabel key={uuid()} htmlFor="my-input">{title}</InputLabel>
                <Input key={uuid()} id="my-input" aria-describedby="my-helper-text" onChange={(e) => dispatchUser({key : keya, value : e.target.value})}/>
            </FormControl>
        </span>
    )
}

const InfoComponent = ({userInfo, dispatchUser}) => {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }))

    return (
        <div className='infoComponent' key={uuid()}>
            <Stack
                key={uuid()}
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                sx={{height: 400}}
                spacing={5} >
                <Item key={uuid()} sx={{height: 200, display: 'flex', flexDirection: 'column', 
                    justifyContent: 'space-around', alignItems: 'center' }}>
                        <span key={uuid()} style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                            
                            <SimpleInput keya='name' dispatchUser={dispatchUser} title="Name" width="150%" />
                            {/* <SimpleInput inf={userInfo.name} setInf={(v) => dispatchUser({ key : 'name', value : v})} title="Name" width="150%" /> */}
                            {/* <SimpleInput inf={userInfo.dob} setInf={(v) => dispatchUser({ key : 'dob', value : v})} title="Date of Birth" /> */}
                        </span>
                        <span style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                            {/* <SimpleInput inf={userInfo.passportNo} setInf={(v) => dispatchUser({ key : 'passportNo', value : v})} title="Passport No" />
                            <SimpleInput inf={userInfo.nationality} setInf={(v) => dispatchUser({ key : 'nationality', value : v})} title="Nationality" width="40%" /> */}
                        </span>
                </Item>
            </Stack>
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
        setError(false)
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setCurrentStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setError(false)
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
const reduce = (state, action) => {
    const { key, value } = action
    switch (key) {
      case "name":
        return { ...state, name: value }
      case "dob":
        return { ...state, dob: value }
      case "passportNo":
        return { ...state, passportNo: value }
      case "nationality":
        return { ...state, nationality: value }
      case "country":
        return { ...state, country: value }
      case "phone":
        return { ...state, phone: value }
      case "address":
        return { ...state, address: value }
      case "occupation":
        return { ...state, occupation: value }
      case "status":
        return { ...state, status: value }
        deflaut: return state;
    }
  }
const initialState = { name: "", dob: "", passportNo: "", nationality: "", country: "", phone: "", address: "", occupation: "", status: false }

const CustomerForm = ({key}) => {
    const [passport, setPassport] = useState(null)
    const [video, setVideo] = useState(null)
    // const [userInfo, setUserInfo] = useState({ name: "", dob: "", passportNo: "", nationality: "", country: "", phone: "", address: "", occupation: "", status: false })

    const [showSuccess, setShowSuccess] = useState(false)
    const [currentComponent, setCurrentComponent] = useState(0)
    const [nextButtonVisible, setNextButtonVisible] = useState(true)
    const [previusButtonVisible, setPreviusButtonVisible] = useState(false)
    const [showError, setShowError] = useState(false)
    const [progress, setProgress] = useState("");

    const [userInfo, dispatchUser] = useReducer(reduce, initialState)

    useEffect(() => {
        document.title = "Customer Form"
    }, [])

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
        setShowSuccess(true)
        setCurrentComponent(currentComponent + 1)
        addCustomer({ id : 123, ...userInfo})
    }
    console.log("cusomerform" + key)
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }))

    return (
        <div className='customerForm' key={uuid()}>
            <div className='wrapper' key={uuid()}>
                <h1>Boinging</h1>
                <Divider/>
                <HorizontalStepper currentStep={currentComponent}/>
                <InfoComponent key={uuid()} userInfo={userInfo} dispatchUser={dispatchUser} />
                <div className='infoComponent'>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="stretch"
                        sx={{height: 400}}
                        spacing={5} >
                        <Item sx={{height: 200, display: 'flex', flexDirection: 'column', 
                            justifyContent: 'space-around', alignItems: 'center' }}>
                                <span style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                    
                                    <span style={{ display: 'flex', flexDirection: 'column', margin: 30, width : '150%' }}>
                                        <FormControl>
                                            <InputLabel htmlFor="my-input">Name</InputLabel>
                                            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => dispatchUser({key : 'name', value : e.target.value})}/>
                                        </FormControl>
                                    </span>
                                    <span style={{ display: 'flex', flexDirection: 'column', margin: 30, width : '100%' }}>
                                        <FormControl>
                                            <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
                                            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => dispatchUser({key : 'dob', value : e.target.value})}/>
                                        </FormControl>
                                    </span>
                                    {/* <SimpleInput inf={userInfo.name} setInf={(v) => dispatchUser({ key : 'name', value : v})} title="Name" width="150%" /> */}
                                    {/* <SimpleInput inf={userInfo.dob} setInf={(v) => dispatchUser({ key : 'dob', value : v})} title="Date of Birth" /> */}
                                </span>
                                <span style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                    {/* <SimpleInput inf={userInfo.passportNo} setInf={(v) => dispatchUser({ key : 'passportNo', value : v})} title="Passport No" />
                                    <SimpleInput inf={userInfo.nationality} setInf={(v) => dispatchUser({ key : 'nationality', value : v})} title="Nationality" width="40%" /> */}
                                </span>
                        </Item>
                    </Stack>
                </div>
                {
                    currentComponent < 3 && 
                        <>
                            {/* <InfoComponent userInfo={userInfo} setUserInfo={setUserInfo} /> */}
                            {/* {currentComponent == 0 && <PassportComponent passport={passport} setPassport={setPassport}/> }
                            {currentComponent == 1 && <VideoComponent video={video} setVideo={setVideo}/> }
                            {currentComponent == 2 && <InfoComponent userInfo={userInfo} setUserInfo={setUserInfo} /> } */}

                            {showError && 
                                <div className='error'>
                                    Please provide 
                                    {currentComponent==0 && <span> a passport photo</span> } {currentComponent==1 && <span> face video </span> } 
                                    {currentComponent==2 && <span> necessary information</span> }
                                </div>
                            }

                            <ProgressBar key={4} submit={handleSubmit} setCurrentStep={setCurrentComponent} 
                                infoFilled={ currentComponent == 2 ? userInfo.status : false}
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