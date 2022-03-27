import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import CustomerCard from '../../components/CustomerCard/CustomerCard'
import { Chip, Divider } from '@mui/material';
import CustomerList from '../../components/CustomerList/CustomerList';
import StyledButton from '../../components/StyledButton/StyledButton';
import OnboardCustomerForm from '../../components/OnboardCustomerForm/OnboardCustomerForm';

const Dashboard = () => { 


  return (
    <div className='dashboard'>
      <Sidebar />
      <CustomerList />
      {/* <OnboardCustomerForm /> */}
    </div>
  )
}

export default Dashboard