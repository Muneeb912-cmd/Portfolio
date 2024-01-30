import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <Button variant="outlined"
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/Muneeb912-cmd'
            role='button'
          >
            <GitHubIcon style={{ color: 'white' }} />
          </Button>
          <Button variant="outlined"
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/eman-muneeb-363440225/'
            role='button'
          >
            <LinkedInIcon style={{ color: 'white' }} />
          </Button>



          <Button variant="outlined"
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://youtube.com/@CODINGisFUN-xz2em'
            role='button'
          >
            <YouTubeIcon style={{ color: 'white' }} />
          </Button>
          <Button variant="outlined"
            floating
            className='m-1'
            style={{ backgroundColor: '#F3AA60' }}
            href='https://www.instagram.com/skittleclicks/'
            role='button'
          >
            <InstagramIcon style={{ color: 'white' }} />
          </Button>



        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          DukoDevs
        </a>
      </div>
    </MDBFooter>
  );
}