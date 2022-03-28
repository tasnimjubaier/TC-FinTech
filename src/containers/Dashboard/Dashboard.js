import {useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import CustomerCard from '../../components/CustomerCard/CustomerCard'
import { Chip, Divider } from '@mui/material';
import CustomerList from '../../components/CustomerList/CustomerList';
import StyledButton from '../../components/StyledButton/StyledButton';
import OnboardCustomerForm from '../../components/OnboardCustomerForm/OnboardCustomerForm';
import CustomerListView from '../CustomerListView/CustomerListView';

const Dashboard = () => { 
  const [showCustomerList, setShowCustomerList] = useState(true);
  
  
  return (
    <div className='dashboard'>
      <Sidebar onToggle={setShowCustomerList}/>
      {showCustomerList && <CustomerListView />}
      {!showCustomerList && <OnboardCustomerForm />}
    </div>
  )
}

export default Dashboard