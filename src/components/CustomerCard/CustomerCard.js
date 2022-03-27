import React from 'react'
import Avatar from '@mui/material/Avatar';
import './CustomerCard.scss'
import { Chip } from '@mui/material';

const CustomerCard = ({image, name, email, status}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center"> 
        <div className="image-parent">
            <Avatar alt='Image' src='https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/things_fall_apart.jpg'
            sx={{}}/>
        </div>
        <div className="name-parent">
            {name}
        </div>
        <div className="email-parent">
            {email}
        </div>
        <div className="status-parent">
            <Chip label={status} color={ status === 'pending' ? 'error' : 'default'} variant='filled'/>
        </div>
    </li>
  )
}

export default CustomerCard