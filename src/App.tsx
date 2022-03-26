import React, { useRef } from 'react';
import { NavBar } from 'components/NavBar';
import { Technologies } from 'components/Technologies';
import { Projects } from 'components/Projects';
import { Header } from 'components/Header';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-montserrat min-h-[200vh] p-4 bg-primary-dark text-gray-100">
      <NavBar
        home={homeRef}
        projects={projectsRef}
        technologies={technologiesRef}
      />
      <Header ref={homeRef} />
      <Technologies ref={technologiesRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;
