import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
} from 'mdb-react-ui-kit';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const CertificationCarousal = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const Certification = [
        {
            title: 'Certificate of Completion',
            description: "I have completed the Internship Program at Apex Space.",
            imageUrl: '../../../public/assets/Internship Certificate.jpg',
        },
        {
            title: 'Course Certification',
            description: "I have completed the course with certification from Udemy.",
            imageUrl: '../../../public/assets/CourseCertificate.jpg',
        },
    ];

    return (
        <MDBContainer >
            <hr className="hr" />
            <MDBContainer>
                <MDBRow style={{ padding: '10px' }} className="row-cols-1 row-cols-md-3 g-4 ">
                    <Carousel
                        className='w-100'
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        arrows={true}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-10-px"
                    >
                        {Certification.map((certificate, index) => (
                            <div key={index} style={{ padding: '0px', marginRight: '20px' }}>
                                <MDBCard >
                                    <MDBRow className='g-0'>
                                        <MDBCol md='4'>
                                            <MDBCardBody>
                                                <MDBCardTitle><strong>{certificate.title}</strong></MDBCardTitle>
                                                <hr className="hr" />
                                                <MDBCardText>
                                                    <p style={{ textAlign: 'justify' }}>{certificate.description}</p>
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCol>
                                        <MDBCol md='8'>
                                            <div >
                                                <MDBCardImage  src={certificate.imageUrl} alt='...' fluid />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCard>
                            </div>
                        ))}
                    </Carousel>
                </MDBRow>
            </MDBContainer>
            <hr className="hr" />
        </MDBContainer>
    );
};

export default CertificationCarousal;
