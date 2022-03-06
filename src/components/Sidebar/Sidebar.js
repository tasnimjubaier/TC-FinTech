import { useState } from 'react';
import './Sidebar.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from "react-icons/fa";

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

    return (
        <>
            <ProSidebar style={{marginTop : 100, height : 400}}>
                <Menu iconShape='square'>
                    {
                        sidebarNavItems.map( item => {
                            console.log(item.display)
                            return (
                                <MenuItem icon={ <FaGem/>}  key={item.id}
                                    onClick={() => { 
                                        item.active = !item.active 
                                        console.log(item.active)
                                        setActiveIndex(item.id)
                                    }}>
                                    {item.display}
                                </MenuItem>
                            )
                        })
                    }
                </Menu>
            </ProSidebar>
        </>
    )
};

export default Sidebar;