import React from 'react'
import './CustomerProfile.scss'
import { useLocation } from 'react-router-dom'
import { CustomerProfileSidebar } from '../Sidebar/Sidebar'
import { Divider } from '@mui/material'
import StyledButton from '../StyledButton/StyledButton'

const CustomerProfile = () => {
    const location = useLocation()

    return (
        <div className='customerProfile'>
            <CustomerProfileSidebar />
            <div className='profile'>
                <div className='title'>
                    <h1>dunk</h1>
                    <Divider />
                </div>
                <div className='profilePhoto'>
                    <h3> photo </h3>
                </div>
                <div className='profilePhoto'>
                    <h3> {location.state.photo} </h3>
                </div>
                <div className='name'>
                    <h3> name </h3>
                </div>
                <div className='name'>
                    <h3> {location.state.name} </h3>
                </div>
                <div className='country'>
                    <h3> country of residence </h3>
                </div>
                <div className='country'>
                    <h3> {location.state.country} </h3>
                </div>
                <div className='dob'>
                    <h3> date of birth </h3>
                </div>
                <div className='dob'>
                    <h3> {location.state.dob} </h3>
                </div>
                <div className='buttonGroup'>
                    <StyledButton text={"On Board"} />
                    <StyledButton text={"Reject"} />
                </div>
            </div>
        </div>
    )
}

export default CustomerProfile