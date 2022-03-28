import React from 'react'
import Avatar from '@mui/material/Avatar';
import './CustomerCard.scss'
import { Chip, dividerClasses } from '@mui/material';

export const CustomerCardHeader = () => {

    return  (
        <div className='customerCardHeader'>
            <li className="listItem" >
                <div className="imageParent">
                    <h2> Profile Picture </h2>
                </div>
                <div className="nameParent">
                    <h3>Name</h3>
                </div>
                <div className="emailParent">
                    <h3>Email</h3>
                </div>
                <div className="statusParent">
                    <h4>Status</h4>
                </div>
            </li>
        </div>
      )
}


const CustomerCard = ({image, name, email, status, onClick}) => {
  return (
    <div className='customerCard' onClick={onClick}>
        <li className="listItem">
            <div className="imageParent">
                <Avatar alt='Image' src='https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/things_fall_apart.jpg'
                sx={{}}/>
            </div>
            <div className="nameParent">
                {name}
            </div>
            <div className="emailParent">
                {email}
            </div>
            <div className="statusParent">
                <Chip label={status} color={ status === 'pending' ? 'error' : 'default'} variant='filled'/>
            </div>
        </li>
    </div>
  )
}

export default CustomerCard