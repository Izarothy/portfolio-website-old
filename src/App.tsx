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
    <div className="font-montserrat px-8 bg-primary-dark text-gray-100 flex flex-col gap-8 pb-24">
      <NavBar
        home={homeRef}
        projects={projectsRef}
        technologies={technologiesRef}
      />
      <main className="mx-auto max-w-[50rem]">
        <Header ref={homeRef} />
        <Technologies ref={technologiesRef} />
        <Projects ref={projectsRef} />
      </main>
    </div>
  );
}

export default App;
