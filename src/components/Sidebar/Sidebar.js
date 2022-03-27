import { useState } from 'react';
import './Sidebar.scss';
import { ProSidebar, Menu, MenuItem, SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent } from 'react-pro-sidebar';
import Paragraph from '../../Utils/Paragraph';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';
import { Chip, Divider } from '@mui/material';

const sidebarNavItems = [
    {
        display: 'Customers List',
        icon: <i className='bx bx-home'></i>,
        active: false,
        to: '/',
        id: 0,
        section: ''
    },
    {
        display: 'Onboard Customer',
        icon: <i className='bx bx-star'></i>,
        active: false,
        to: '/started',
        id: 1,
        section: 'started'
    }
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
const test = false;
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
                            <MenuItem icon={<PeopleAltTwoToneIcon/>} suffix={<span className="badge red"></span>}>Customers List</MenuItem>
                            <Divider />
                            <MenuItem icon={<DoubleArrowTwoToneIcon/>}> Onboard Customer </MenuItem>
                            <Divider />
                        </Menu>
                    </SidebarContent>

                    <SidebarFooter className='sidebarFooter'> </SidebarFooter>
            </ProSidebar>
        </div>
    )
};
export default Sidebar;