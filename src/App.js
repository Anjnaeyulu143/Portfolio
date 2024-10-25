import { useRef } from "react";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";

export default function App() {
  const myProjectSection = useRef(null);
  const scrollToProjects = () => {
    myProjectSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  const aboutSection = useRef(null);
  const scrollToAboutSection = () => {
    aboutSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollToProjects={scrollToProjects}
        scrollToAboutSection={scrollToAboutSection}
      />
      <Body
        scrollToProjects={scrollToProjects}
        myProjectSection={myProjectSection}
        aboutSection={aboutSection}
      />
      <Footer />
    </>
  );
}
