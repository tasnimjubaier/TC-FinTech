import React, {useState} from 'react'
import './CustomerProfile.scss'
import { useLocation } from 'react-router-dom'
import { CustomerProfileSidebar } from '../Sidebar/Sidebar'
import { Button, Divider } from '@mui/material'
import { Box, Stack, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple, blueGrey } from '@mui/material/colors';
import { FilledInput } from '@mui/material';
import StyledButton from '../StyledButton/StyledButton'
import ReactRoundedImage from "react-rounded-image";
import RDJ from '../../assets/images/rdj.jpg'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const DataText = ({title, text, width, fontWeight}) => {
    const colorLight = blueGrey[100]
    const colorDark = blueGrey[200]

    return (
        <Box sx={{ fontSize: 19, fontWeight: fontWeight ? fontWeight : 'fontWeightLight', 
                    borderColor: blueGrey[50], border: 0, borderRadius: 2, 
                    display: 'flex', flexDirection: 'column', 
                    boxShadow: 1, width: width ? width : '30%' 
                     }} >
            <Typography variant="overline" gutterBottom component="span" 
                        sx={{ backgroundColor: blueGrey[50], margin: '0', borderRadius: '10% 10% 0 0' }} >
                {title}
            </Typography>
            <span className='text'> 
                {text}
            </span>
        </Box>
    )
}

const ImageFrame = ({image}) => {
    return (
        <div style={{ display: "flex" }}>
            <ReactRoundedImage
                image={image}
                roundedColor={blueGrey[200]}
                imageWidth="100"
                imageHeight="100"
                roundedSize="8"
                borderRadius="100"
            />
        </div>
    )
}
//  passport photo, video
//  Date of birth, Passport number, Nationality, Country of residence,
//  Phone number, Address, and occupation.

const CustomerProfile = () => {
    const location = useLocation()
    const [opneOnboard, setOpenOnboard] = useState(false)
    const [openReject, setOpenReject] = useState(false)
    const [status, setStatus] = useState('')

    const onboard = () => {
        console.log('customer onboarded')
        setStatus("Onboarded successfully")
    }
    const reject = () => {
        console.log('customer rejected')
        setStatus("Reject successfully")
    }

    return (
        <div className='customerProfile'>
            <CustomerProfileSidebar />
            <div className='profile'>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={5} >
                    <Item sx={{height: 200, display: 'flex', flexDirection: 'row', 
                        justifyContent: 'space-around', alignItems: 'center' }}>
                        <ImageFrame image={RDJ} />
                        <DataText fontWeight={'bold'} width='55%' title="Name" text="Hordy Jones" />
                    </Item>
                    <Item sx={{height: 400, display: 'flex', flexDirection: 'column', 
                            justifyContent: 'space-around', alignItems: 'center' }}>
                        <span style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                            <DataText fontWeight={'bold'} width='30%' title="Name" text="Hordy Jones" />
                            <DataText fontWeight={'bold'} width='30%' title="Name" text="Hordy Jones" />
                        </span>
                        <span style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                            <DataText fontWeight={'bold'} width='70%' title="Name" text="Hordy Jones" />
                            <DataText fontWeight={'bold'} width='20%' title="Name" text="Hordy Jones" />
                        </span>
                        <span style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                            <DataText fontWeight={'bold'} width='30%' title="Name" text="Hordy Jones" />
                            <DataText fontWeight={'bold'} width='50%' title="Name" text="Hordy Jones" />
                        </span>
                        <span style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                            <DataText fontWeight={'bold'} width='50%' title="Name" text="Hordy Jones" />
                            <DataText fontWeight={'bold'} width='30%' title="Name" text="Hordy Jones" />
                        </span>
                    </Item>
                    {status=='' &&
                        // <Box >
                        //     <div className='buttonGroup'>
                        //         <span onClick={onboard}><StyledButton text={"On Board"} isDanger={false} /></span>
                        //         <span onClick={reject}><StyledButton text={"Reject"} isDanger={true} /></span>
                        //     </div>
                        // </Box>
                        <Item sx={{height: 100, display: 'flex', flexDirection: 'row', 
                            justifyContent: 'space-around', alignItems: 'center' }}>
                                <span onClick={onboard}><StyledButton text={"On Board"} isDanger={false} /></span>
                                <span onClick={reject}><StyledButton text={"Reject"} isDanger={true} /></span>
                        </Item>
                    }
                    {status!="" && 
                        <Item sx={{height: 100, fontSize: 20, display: 'flex', flexDirection: 'row', 
                            justifyContent: 'space-around', alignItems: 'center' }}>
                                {status}
                        </Item>
                    }
                </Stack>
            </div>
            
        </div>
    )
}

export default CustomerProfile