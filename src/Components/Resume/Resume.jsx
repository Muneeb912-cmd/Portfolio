import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import CertificationCarousal from './CertificationCrausal';

const steps = [
    {
        label: 'About Me',
    },
    {
        label: 'Education',
    },
    {
        label: 'Certification',
    },
    {
        label: 'Career Objectives',
    },
    {
        label: 'Experience',
    },
];

export default function Resume({scrollToSection}) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleDownloadClick = () => {       
        const fileUrl = '../../../public/assets/My Resume.pdf';
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'Resume.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }
    return (
        <MDBContainer>
            <div className='d-flex justify-content-between'>
                <h2 style={{ marginTop: '75px', color: 'white' }}>Resume</h2>
                <MDBBtn
                    style={{ marginTop: '80px', height: '30px' }}
                    className='btn btn-sm btn-dark border border-all'
                    onClick={handleDownloadClick}
                >
                    Download Resume
                </MDBBtn>
            </div>
            <hr className="hr" />
            <MDBContainer >
                <div style={{ paddingBottom: '50px' }}>
                    <Stepper style={{ color: 'white' }} activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    <h4 style={{ color: 'white' }}>{step.label}</h4>
                                </StepLabel>
                                <StepContent>
                                    {step.label === 'About Me' &&
                                        <Typography>
                                            <p style={{ textAlign: 'justify' }}>
                                                I am a passionate 21-year-old freelancer, with a keen eye for capturing captivating moments through the lens of my camera. As a versatile content creator, I'm not only a dedicated photographer but also a dynamic YouTuber, sharing my Coding skills and projects with an ever-growing community. Embracing the digital realm, I embrace my coding and development skills, crafting interactive experiences that leave a lasting impact.
                                                <br></br>
                                                <br></br>
                                                Furthermore I am a quick learner with problem-solving skills and a natural aptitude for coding. I have a good hold of programming fundamentals and am proficient in languages such as Python, C#, flutter, React and more . I am also familiar with web development technologies such as MERN stack and mobile applications development using technologies such as Flutter. I have also played a role of team lead several times during term projects.
                                            </p>
                                        </Typography>
                                    }
                                    {step.label === 'Education' &&
                                        <Typography>
                                            <p style={{ textAlign: 'justify' }}>
                                                <strong style={{ fontSize: '18px', textDecoration: 'underline' }}>Adabistan-e-Shoophia School, Lahore</strong> (2008 - 2016 )
                                                <br></br>
                                                <p style={{ marginTop: '6px' }}>I completed my Middle and High School from Adabistan-e-Soophia in pre-medical</p><a className='link_' href='https://adabistan.edu.pk/'>Learn More</a>
                                            </p>
                                            <p style={{ textAlign: 'justify' }}>
                                                <strong style={{ fontSize: '18px', textDecoration: 'underline' }}>Unique College, Lahore</strong> (2017 - 2019 )
                                                <br></br>
                                                <p style={{ marginTop: '6px' }}>I completed my College from Unique College in pre-engineering</p><a className='link_' href='https://www.unique.edu.pk/'>Learn More</a>
                                            </p>
                                            <p style={{ textAlign: 'justify' }}>
                                                <strong style={{ fontSize: '18px', textDecoration: 'underline' }}>University of Engineering and Technology, Lahore</strong> (2020 - 2024 )
                                                <br></br>
                                                <p style={{ marginTop: '6px' }}>I am a final year student of BS. Computer Science</p><a className='link_' href='https://www.uet.edu.pk/'>Learn More</a>
                                            </p>
                                        </Typography>
                                    }
                                    {step.label === 'Certification' &&
                                        <CertificationCarousal />
                                    }
                                    {step.label === 'Career Objectives' &&
                                        <Typography>
                                            <p style={{ textAlign: 'justify' }}>
                                                As a programming student with fresh skills and a passion for technology, I am seeking an opportunity to work with a dynamic company where I can apply my skills and gain hands-on experience in the field of programming. I am eager to work with a team of experienced professionals, and enhance my abilities in various programming languages.
                                            </p>
                                        </Typography>
                                    }
                                    {step.label === 'Experience' &&
                                        <Typography>
                                            <p style={{ textAlign: 'justify' }}>
                                                I have displayed all my work experience uptill now in the <a style={{color:'blue',cursor:'pointer'}} onClick={()=>{scrollToSection('portfolio')}}>Portfolio</a> section.
                                            </p>
                                        </Typography>
                                    }
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <MDBBtn
                                                className='my-3 btn btn-sm btn-dark border border-all'
                                                disabled={index === 4}
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Next
                                            </MDBBtn>
                                            <MDBBtn
                                                className='my-3 mx-2 btn btn-sm btn-dark border border-all'
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </MDBBtn>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </MDBContainer>
        </MDBContainer>
    );
}