import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import "./App.css"
import React, { useState, useEffect, useRef } from 'react';

function updateActiveSection(setActiveSection, setCurrentSection, sectionIds) {
  // Loop through each section on the page
  for (let i = 0; i < sectionIds.length; i++) {
    const sectionId = sectionIds[i];
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollY = window.scrollY;
      const scrollBottom = scrollY + window.innerHeight;

      if (scrollY <= sectionTop && scrollBottom >= sectionTop + sectionHeight) {
        // If the section is in view, set the activeSection state to the section id
        setActiveSection(sectionId);
        setCurrentSection(i);
        break;
      }
    }
  };
}

function Navbar({ activeSection, sectionIds }) {
  return (
    <nav>
      <ul>
        <li className={activeSection === 'section1' ? 'active' : ''}>
          <Link
            to="section1"
            smooth={true}
            duration={3500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Section 1
          </Link>
        </li>
        <li className={activeSection === 'section2' ? 'active' : ''}>
          <Link
            to="section2"
            smooth={true}
            duration={3500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Section 2
          </Link>
        </li>
        <li className={activeSection === 'section3' ? 'active' : ''}>
          <Link
            to="section3"
            smooth={true}
            duration={3500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Section 3
          </Link>
        </li>
      </ul>
    </nav>
  );
}

  function App() {
    const location = useLocation();
    const [timerId, setTimerId] = useState(null);
    const [currentSection, setCurrentSection] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const sectionIds = ['section1', 'section2', 'section3'];
        const scrollPosition = window.pageYOffset;
        const currentSection = sectionIds.find(id => {
          const section = document.getElementById(id);
          if (section) {
            const { top, bottom } = section.getBoundingClientRect();
            return top <= 0 && bottom > 0;
          }
          return false;
        });

        if (currentSection) {
          const url = `${window.location.pathname}#${currentSection}`;
          window.history.replaceState(null, null, url);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Start the autoscroll timer when the component mounts
    useEffect(() => {
      startTimer();

      // Clear the timer when the component unmounts
      return () => {
        clearTimer();
      }
    }, []);

    // Define an array of section IDs
    const sectionIds = ['section1', 'section2', 'section3'];

    // Define a variable to keep track of the current section index
    let currentSectionIndex = 0;

    // Define a function to start the autoscroll timer
    const startTimer = () => {
      // Set the timer to run every 10 seconds
      const timerId = setInterval(() => {
        // Get the current section ID
        const currentSectionId = sectionIds[currentSectionIndex];

        // Scroll to the current section
        scrollToSection(currentSectionId);

        // Increment the current section index
        currentSectionIndex++;

        // If we've reached the end of the sections, loop back to the beginning
        if (currentSectionIndex >= sectionIds.length) {
          currentSectionIndex = 0;
        }
      }, 3000);

      // Store the timer ID in state
      setTimerId(timerId);
    }

    // Define a function to clear the autoscroll timer
    const clearTimer = () => {
      // Clear the timer
      clearInterval(timerId);

      // Reset the timer ID in state
      setTimerId(null);
    }

    // Define a function to scroll to a section by ID
    const scrollToSection = (sectionId) => {
      // Find the section element
      const section = document.getElementById(sectionId);

      // Scroll to the section using the scrollIntoView method
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', ease: 'ease-in-out' });
      }    
    }

    return (
      <div>
        <Navbar />
        <div id="section1">
          <h1>Section 1</h1>
          <p className="red">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit id sem eget dignissim. Integer vel tortor quam. Vestibulum
            ut sapien lobortis, blandit nulla ac, iaculis turpis. Pellentesque
            aliquam gravida tellus in fringilla.
          </p>
        </div>
        <div id="section2">
          <h1>Section 2</h1>
          <p className="gold">
            Quisque consectetur bibendum justo sit amet eleifend. Donec
            consequat, dolor vitae auctor tincidunt, dolor nulla varius
            sapien, et faucibus lacus nisl nec turpis. Nullam eu leo vel
            augue aliquet congue in id ex. Nulla euismod, sapien ac vulputate
            egestas, sapien quam placerat turpis, at vestibulum tellus tellus
            in mi. Nam sed purus ut elit feugiat fermentum nec vitae velit.
          </p>
        </div>
        <div id="section3">
          <h1>Section 3</h1>
          <p className="red">
            Aenean euismod, nulla sit amet bibendum varius, tortor justo
            pellentesque enim, id efficitur lacus lectus eu nisi. Morbi quis
            ultrices mauris

          </p>
        </div>
      </div>
    );

  }

  function MyRouter() {
    return (
      <Router>
        <App />
      </Router>
    );
  }

  export default MyRouter;
