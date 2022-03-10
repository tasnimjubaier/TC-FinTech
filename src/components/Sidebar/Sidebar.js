import { useState } from 'react';
import './Sidebar.scss';
import { CSidebar, CSidebarBrand, CSidebarFooter, CSidebarHeader, CSidebarNav, CNavTitle, CNavItem,
    CBadge,  CNavGroup,  CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer } from '@coreui/icons'

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
            <CSidebar colorScheme="light" narrow={true} onHide>
                <CSidebarBrand>Sidebar Brand</CSidebarBrand>
                <CSidebarNav>
                    <CNavTitle>Nav Title</CNavTitle>
                    <CNavItem href="#">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                    Nav item
                    </CNavItem>
                    <CNavItem href="#">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                    With badge
                    <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>
                    <CNavGroup toggler="Nav dropdown">
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
                    </CNavItem>
                    <CNavItem href="#">
                        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
                    </CNavItem>
                    </CNavGroup>
                </CSidebarNav>
                <CSidebarToggler />
            </CSidebar>
        </>
    )
};

export default Sidebar;