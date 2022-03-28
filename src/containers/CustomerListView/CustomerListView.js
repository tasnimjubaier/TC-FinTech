import React from 'react'
import './CustomerListView.scss'
import CustomerList from '../../components/CustomerList/CustomerList'

const CustomerListView = () => {
  return (
    <div className='customerListView'>
        <h1 className='header'>Customer List</h1>
        <CustomerList />
    </div>
  )
}

export default CustomerListView