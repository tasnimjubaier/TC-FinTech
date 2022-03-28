import { useState } from 'react';
import './Sidebar.scss';
import { ProSidebar, Menu, MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom'
import Paragraph from '../../Utils/Paragraph';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import { Chip, Divider } from '@mui/material';


export const CustomerProfileSidebar = () => {

    const navigate = useNavigate()
    
    return (
        <div className='Sidebar'>
            <ProSidebar
                collapsed={false}
                toggled={true}
                breakPoint="md">
                    <SidebarHeader className='sidebarHeader'>
                        FinTech
                    </SidebarHeader>
                    <SidebarContent className='sidebarContent'>
                        <Menu iconShape="circle">
                            <MenuItem icon={<DashboardCustomizeTwoToneIcon/>} active={false} onClick={() => navigate('/')}>DashBoard</MenuItem>
                            <Divider />
                        </Menu>
                    </SidebarContent>

                    <SidebarFooter className='sidebarFooter'> </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

const Sidebar = ({onToggle}) => {
    const [customerListActive, setCustomerListActive] = useState(true)
    const [onboardCustomerActive, setOnboardCustomerActive] = useState(false)
    const test = false;

    const toggleActive = (str) => {
        if(str == 'onboard'){
            setCustomerListActive(false)
            setOnboardCustomerActive(true)
            onToggle(false)
        }
        else {
            setCustomerListActive(true)
            setOnboardCustomerActive(false)
            onToggle(true)
        }
        console.log(customerListActive)
    }

    return (
        <div className='Sidebar'>
            {test &&
                <div className='boxsize'>
                    {Paragraph.paragraphOne}
                </div>
            }
            <ProSidebar
                collapsed={false}
                toggled={true}
                breakPoint="md">
                    <SidebarHeader className='sidebarHeader'>
                        FinTech
                    </SidebarHeader>
                    <SidebarContent className='sidebarContent'>
                        <Menu iconShape="circle">
                            <MenuItem icon={<PeopleAltTwoToneIcon/>} active={customerListActive} onClick={() => toggleActive('list')} suffix={<span className="badge red"></span>}>Customers List</MenuItem>
                            <Divider />
                            <MenuItem icon={<DoubleArrowTwoToneIcon/>} active={onboardCustomerActive} onClick={() => toggleActive('onboard')}> Onboard Customer </MenuItem>
                            <Divider />
                        </Menu>
                    </SidebarContent>

                    <SidebarFooter className='sidebarFooter'> </SidebarFooter>
            </ProSidebar>
        </div>
    )
}
export default Sidebar