"use client"

import { useState } from "react";
import AllProjectsItem from "./projects-item";
import PROJECT_LIST from "./projects-list"; // data

function Projects() {
  const [state, setState] = useState(PROJECT_LIST);

  const handleBtn = (e: any) =>  {
    let word = e.target.value;

    if (word === 'All') {
      setState(PROJECT_LIST);
    } 
    
    else if (word === 'Magento') {
        const filtered = PROJECT_LIST.filter(item=>item.filter === 'Magento');
        setState(filtered);
    }

    else if (word === 'WordPress') {
      const filtered = PROJECT_LIST.filter(item=>item.filter === 'WordPress');
      setState(filtered);
    }

    else if (word === 'Misc') {
      const filtered = PROJECT_LIST.filter(item=>item.filter === 'Misc');
      setState(filtered);
    }

  }

    return(
      <section id="projects" className="h-full text-white bg-projects-orange py-16">
          <div className="mb-12">
            <h2 className="text-5xl text-center mb-10">Projects</h2>

            <h3 className="text-lg mb-8 text-center">List of Projects.</h3>
          </div>

          <div className="mb-16 text-center">
            <button className="mr-1 md:mr-1.5 mb-2.5 py-2.5 px-4 text-xs md:text-sm border rounded-l-lg hover:bg-white/[.15] transition-colors" value="All" onClick={handleBtn}>All</button>

            <button className="mr-1 md:mr-1.5 mb-2.5 py-2.5 px-4 text-xs md:text-sm border hover:bg-white/[.15] transition-colors" value="Magento" onClick={handleBtn}>Magento</button>

            <button className="mr-1 md:mr-1.5 mb-2.5 py-2.5 px-4 text-xs md:text-sm border hover:bg-white/[.15] transition-colors" value="WordPress" onClick={handleBtn}>WordPress</button>

            <button className="mb-2.5 py-2.5 px-4 text-xs md:text-sm border rounded-e-lg hover:bg-white/[.15] transition-colors" value="Misc" onClick={handleBtn}>Misc</button>
          </div>

          <div id="filter-container" className="flex flex-wrap">
            <AllProjectsItem lists={state} />
          </div>
      </section>
    )
}


export default Projects;
