import React, { useState, useEffect } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarToggler,
    MDBNavbarLink,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../SideBar/SideBar';
import CloseIcon from '@mui/icons-material/Close';

export default function TopBar({scrollToSection}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navbar.style.opacity = '0';
            } else {
                // Scrolling up
                navbar.style.opacity = '1';
            }
            lastScrollTop = scrollTop;
        });
    }, []);

    return (
        <>
            <MDBNavbar style={{ backgroundColor: 'black', color: 'white' }} className='my-0 fixed-top'>
                <MDBContainer className='my-2' fluid>
                    <div className='d-flex'>
                        <MDBNavbarToggler className='mx-3 btn btn-sm border border-all btn-dark' onClick={toggleSidebar}>
                            <MenuIcon style={{ color: 'white' }} />
                        </MDBNavbarToggler>
                        <h5 style={{marginTop:'8px'}}>My Portfolio</h5>
                    </div>
                    <div className='d-flex'>
                        <MDBNavbarLink className='d-flex mx-2 topbar-link' href='https://github.com/Muneeb912-cmd'>GitHub</MDBNavbarLink>
                        <MDBNavbarLink className='d-flex mx-2 topbar-link' href='https://www.linkedin.com/in/eman-muneeb-363440225/'>LinkedIn</MDBNavbarLink>
                    </div>
                </MDBContainer>
            </MDBNavbar>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <MDBContainer>
                    <MDBRow className='my-3 mx-0'>
                        <MDBCol style={{ cursor: 'pointer' }} className="text-end close-btn">
                            <CloseIcon onClick={toggleSidebar} />
                        </MDBCol>
                    </MDBRow>
                    <div>
                        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} scrollToSection={scrollToSection}/>
                    </div>
                </MDBContainer>
            </div>
            <style>
                {`
                    .navbar {
                        transition: opacity 0.3s ease;
                    }
                `}
            </style>
        </>
    );
}
