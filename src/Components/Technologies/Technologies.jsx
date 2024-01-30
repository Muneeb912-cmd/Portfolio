import React, { useEffect, useRef } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
} from "mdb-react-ui-kit";

const technologyData = [
  {
    image: "/assets/flutter.png",
    title: "Flutter",
    description: "Some quick example text for Flutter.",
  },
  {
    image: "/assets/js.png",
    title: "JavaScript",
    description: "Some quick example text for JavaScript.",
  },
  {
    image: "/assets/C_.png",
    title: "C# (.Net)",
    description: "Some quick example text for C# (.Net).",
  },
  {
    image: "/assets/react.png",
    title: "React",
    description: "Some quick example text for React.",
  },
  {
    image: "/assets/python.png",
    title: "Python",
    description: "Some quick example text for Python.",
  },
  {
    image: "/assets/mern.png",
    title: "MERN",
    description: "Some quick example text for MERN.",
  },
  {
    image: "/assets/sql.png",
    title: "SQL",
    description: "Some quick example text for SQL.",
  },
];

const Technologies = () => {
  const cardRefs = technologyData.map(() => useRef(null));

  useEffect(() => {
    const handleScroll = () => {
        const isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed
    
        cardRefs.forEach((cardRef, index) => {
          if (cardRef.current) {
            const offsetTop = cardRef.current.offsetTop;
            const scrollPosition =
              window.scrollY +
              window.innerHeight -
              window.innerHeight / 2 +
              (isMobile ? 500 : 250); // Use different offsets based on device type
    
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
    <MDBContainer>
      <div>
        <h2>Technologies</h2>
        <hr className="hr" />
        <MDBRow className="my-3">
          {technologyData.map((technology, index) => (
            <MDBCol key={index} className="my-3" sm={6}>
              <MDBCard
                ref={cardRefs[index]}
                style={{
                  opacity: 0,
                  transition: "opacity 0.5s ease-in-out",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <MDBCardBody>
                  <div className="d-flex">
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "10px",
                        border: "1px solid gray",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    >
                      <img
                        src={technology.image}
                        style={{ height: "30px", width: "30px" }}
                        alt={`${technology.title} logo`}
                      ></img>
                    </div>
                    <div style={{ marginLeft: "10px", marginTop: "10px" }}>
                      <h4>
                        <strong>{technology.title}</strong>
                      </h4>
                    </div>
                  </div>
                  <hr className="hr" />
                  <MDBCardText>{technology.description}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    </MDBContainer>
  );
};

export default Technologies;
