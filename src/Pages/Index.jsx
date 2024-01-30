import TopBar from "../Components/TopBar/TopBar";
import Footer from "../Components/Footer/Footer";
import ContactMe from "../Components/ContactMe/ContactMe";
import Intro from "../Components/Introduction/Intro";
import Resume from "../Components/Resume/Resume";
import Technologies from "../Components/Technologies/Technologies";
import Portfolio from "../Components/PortFolio/Portfolio";


const Index = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error(`Element with id ${sectionId} not found`);
    }
  };
  return (
    <>
      <section
        id="home"
        style={{
          backgroundImage: "url(../../../public/assets/Bg1.gif)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for opacity
          }}
        ></div>
        <TopBar scrollToSection={scrollToSection} />
        <Intro />
      </section>
      <section id="resume" style={{ backgroundColor: "black" }}>
        <Resume scrollToSection={scrollToSection}/>
      </section>
      <section id="technologies" className="my-5">
        <Technologies />
      </section>
      <section
        id="portfolio"
        className="my-5"
        style={{ backgroundColor: "black" }}
      >
        <Portfolio />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </>
  );
};
export default Index;
