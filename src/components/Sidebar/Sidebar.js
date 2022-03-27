import { useState } from 'react';
import './Sidebar.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Paragraph from '../../Utils/Paragraph';

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
            breakPoint="md"
            >
                <Menu iconShape="circle">
                    <MenuItem suffix={<span className="badge red"></span>}>helo world</MenuItem>
                    <MenuItem> halo world </MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    )
};
export default Sidebar;