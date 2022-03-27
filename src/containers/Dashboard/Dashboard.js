import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import CustomerCard from '../../components/CustomerCard/CustomerCard'
import { Chip, Divider } from '@mui/material';
import CustomerList from '../../components/CustomerList/CustomerList';
import StyledButton from '../../components/StyledButton/StyledButton';
const Dashboard = () => { 
  return (
    <div className='dashboard'>
      <Sidebar />
      <CustomerList />
      {/* <StyledButton text={'Generate Link'} /> */}
    </div>
  )
}

export default Dashboard