import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBRow,
  } from "mdb-react-ui-kit";
  import React from "react";
  import { useEffect, useRef } from "react";
  
  const cardData = [
    {
      title: "Internship",
      description:`Completed Internship at Apex Space Ltd. in MERN stack (Jun 2023 - Aug 2023), gaining hand-on experince of working in a professional environment`,
      link: "",
      image: "/assets/mern.png",
    },
    {
        title: "Freelancing",
        description:'As a freelancer I have completed and contributed to many different projects and reports based on various different technology stacks',
        link: "",
        images: [
            "/assets/html.png",
            "/assets/css.png",
            "/assets/js.png",
            "/assets/react.png",
            "/assets/node.png",
            "/assets/mern.png",
          ],
      },
    {
      title: "Mobile Application Development",
      description:'As a mobile application developer I have developed and contributed to many different mobile application using Flutter',
      link: "http://",
      image: "/assets/flutter.png",
    },
    {
      title: "Desktop Application Development",
      description:'I have developed many desktop application using JAVA, .NET and PYQT5. The most prominent project that i worked on was a School Management System For a Client.',
      link: "http://",
      images: ["/assets/C_.png", "/assets/python.png", "/assets/qt.png"],
    },
    {
      title: "Website Development",
      description:'I have worked on different technologies stacks that are used for developing Web-Sites such as MEAN, MERN, HTML,JS,CSS and .NET(MVC)',
      link: "http://",
      images: [
        "/assets/html.png",
        "/assets/css.png",
        "/assets/js.png",
        "/assets/react.png",
        "/assets/node.png",
        "/assets/mern.png",
      ],
    },    
    {
      title: "Problem Solving",
      description:'I am a dedicated developer with experience in problem-solving with Python and JavaScript. ',
      link: "http://",
      images: ["/assets/python.png", "/assets/js.png"],
    },    
    {
      title: "Personel Projects",
      description:'As a programming student, I have developed and led several personal and semester projects, gaining hands-on experience.',
      link: "",
      images: [
          "/assets/html.png",
          "/assets/css.png",
          "/assets/js.png",
          "/assets/react.png",
          "/assets/node.png",
          "/assets/mern.png",
        ],
    },
    {
      title: "Others",
      description:'I worked on different projects other then coding and problem-solving, and gained some really valuable experiences like working on Latex, writing professional document and more as a content writer.',
      link: "",
      images: [
        "/assets/ov.png",  
      ],
    },
   
  ];
  
  const Portfolio = () => {
    const cardRefs = cardData.map(() => useRef(null));

useEffect(() => {
  const handleScroll = () => {
    const isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed
    cardRefs.forEach((cardRef, index) => {
      if (cardRef.current) {
        const offsetTop = cardRef.current.offsetTop;
        const scrollPosition =
          window.scrollY + window.innerHeight - window.innerHeight / 2 + (isMobile ? 500 : 250); // Use different offsets based on device type         

        if (scrollPosition > offsetTop) {
          cardRef.current.style.opacity = 1;
          cardRef.current.style.transition =
            "opacity 0.5s ease-in-out 0.2s"; // Add a delay for a staggered effect
        } else {
          cardRef.current.style.opacity = 0;
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [cardRefs]);

return (
  <MDBContainer style={{ paddingTop: "25px", paddingBottom: "25px" }}>
    <h1 style={{ color: "white" }}>Portfolio</h1>
    <hr style={{ color: "white" }} />
    <MDBRow>
      {cardData.map((card, index) => (
        <MDBCol key={index} sm={4}>
          <MDBCard
            className="my-2"
            ref={cardRefs[index]}
            style={{
              opacity: 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <MDBCardHeader style={{ backgroundColor: "whitesmoke" }}>
              <strong>{card.title}</strong>
            </MDBCardHeader>
            <MDBCardBody style={{ minHeight: "190px",overflow:'auto' }}>
              <div>
                <p style={{ textAlign: "justify" }}>{card.description}</p>
                {card.link !== "" ? (
                  <a href={"/details"}>Learn More</a>
                ) : (
                  <></>
                )}
              </div>
            </MDBCardBody>
            <MDBCardFooter>
              {Array.isArray(card.images) ? (
                card.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    style={{
                      backgroundColor: "white",
                      padding: "5px",
                      border: "1px solid gray",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                    className="mx-2"
                  >
                    <img
                      src={image}
                      style={{ height: "25px", width: "28px" }}
                      alt={`icon-${imageIndex}`}
                    />
                  </div>
                ))
              ) : (
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "5px",
                    border: "1px solid gray",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={card.image}
                    style={{ height: "25px", width: "28px" }}
                    alt={`icon-${index}`}
                  />
                </div>
              )}
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  </MDBContainer>
);

  };
  export default Portfolio;
  