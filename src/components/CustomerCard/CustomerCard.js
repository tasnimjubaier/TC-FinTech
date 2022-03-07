import React from 'react'
import Avatar from '@mui/material/Avatar';
import './CustomerCard.scss'
import { Chip, Divider } from '@mui/material';

const CustomerCard = ({image, name, email, status}) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center"> 
        <div class="image-parent">
            <Avatar alt='Image' src='https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/things_fall_apart.jpg'
            sx={{}}/>
        </div>
        <div class="name-parent">
            {name}
        </div>
        <div class="email-parent">
            {email}
        </div>
        <div class="status-parent">
            <Chip label={status} color={ status === 'pending' ? 'error' : 'default'} variant='filled'/>
        </div>
    </li>
  )
}

export default CustomerCard