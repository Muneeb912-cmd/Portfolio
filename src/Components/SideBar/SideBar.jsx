import { MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import * as Icons from '@mui/icons-material';
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll';

const Sidebar = ({ isOpen, onClose,scrollToSection }) => {
  return (
    <>
      <style>{`
            .sidebar {
                position: fixed;
                top: 0;
                left: -300px;
                width: 250px;
                height: 100%;
                background-color: rgba(1, 0, 0, 0.9);
                color:white;
                box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
                transition: 0.3s;
                overflow-y: auto;
                z-index: 10000;
            }

            .sidebar.open {
                left: 0;
            }

            .sidebar img {
                border: 2px solid white;
            }

            .sidebar h5 {
                color:white;
            }
            .topbar-link:hover {
                color: #007bff !important;                
            }
            .close-btn:hover{
                color: #7D7C7C !important;   
            }
            .close-btn{
              backgroundColor:'white';   
          }
            .menu-item:hover{
              color: #7D7C7C !important;   
             }
        `}</style>  
      <MDBContainer>
        <MDBRow className="mt-2 ">
          <MDBCol className="my-1 text-center">
            <h4><strong>My Portfolio</strong></h4>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol className="text-center">
            <img
              src="assets/Pic1.jpg"
              alt="Profile"
              className="rounded-circle "
              style={{ height: '150px', width: '150px' }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-2 ">
          <MDBCol className="my-2 text-center">
            <h5>Eman Muneeb</h5>
          </MDBCol>
        </MDBRow>
        <hr className="hr" />
        <MDBRow className="mt-3 ">
          <MDBCol style={{ cursor: 'pointer' }} className="d-flex menu-item my-2">
          <div className='d-flex'><Icons.Home style={{ marginLeft: '35px' }} /><div style={{ marginLeft: '10px' }}>Home</div></div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol style={{ cursor: 'pointer' }} className="d-flex menu-item my-2">
            <div className='d-flex' onClick={()=>{scrollToSection('resume')}}><Icons.ArticleOutlined style={{ marginLeft: '35px' }} /><div style={{ marginLeft: '10px' }}>Resume</div></div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol style={{ cursor: 'pointer' }} className="d-flex menu-item my-2">
            <div className='d-flex' onClick={()=>{scrollToSection('technologies')}}><Icons.CodeOutlined style={{ marginLeft: '35px' }} /><div style={{ marginLeft: '10px' }}>Technologies</div></div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol style={{ cursor: 'pointer' }} className="d-flex menu-item my-2">
          <div className='d-flex' onClick={()=>{scrollToSection('portfolio')}}><Icons.CasesOutlined style={{ marginLeft: '35px' }} /><div style={{ marginLeft: '10px' }}>Portfolio</div></div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol style={{ cursor: 'pointer' }} className="d-flex menu-item my-2">
          <div className='d-flex' onClick={()=>{scrollToSection('contact')}}><Icons.ContactPhoneOutlined style={{ marginLeft: '35px' }} /><div style={{ marginLeft: '10px' }}>Contact Me</div></div>
          </MDBCol>
        </MDBRow>
        <hr className="hr" />
        <div style={{textAlign:'center'}}>
        <Button variant="outlined"
            floating
            className='m-1 my-4'
            size='small'
            style={{ backgroundColor: '#333333'}}
            href='https://github.com/Muneeb912-cmd'           
            role='button'
          >
            <Icons.GitHub style={{color:'white'}}/>
          </Button>         
          <Button variant="outlined"
            floating            
            className='m-1'
            size='small'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/eman-muneeb-363440225/'
            role='button'
          >
            <Icons.LinkedIn style={{color:'white'}}/>
          </Button>

         

          <Button variant="outlined"
            floating
            className='m-1'
            size='small'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://youtube.com/@CODINGisFUN-xz2em'
            role='button'
          >
            <Icons.YouTube style={{color:'white'}}/>
          </Button>
          <Button variant="outlined"
            floating
            size='small'
            className='m-1'
            style={{ backgroundColor: '#F3AA60' }}
            href='https://www.instagram.com/skittleclicks/'
            role='button'
          >
            <Icons.Instagram style={{color:'white'}}/>
          </Button>
        </div>
        <div className='d-flex justify-content-center my-4'>
           Follow us on :<div style={{cursor:'pointer'}} className='menu-item'> @DukoDevs</div>
        </div>
      </MDBContainer>
    </>
  );
};

export default Sidebar;
