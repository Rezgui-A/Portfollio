import ProjectCard from "./ProjectCard";
const works = [
    {
      imgSrc: '/images/work/project-1.jpg',
      title: 'My Portfollio',
      tags: ['React', 'Js'],
      projectLink: ''
    },
    {
      imgSrc: '/images/work/project-2.jpg',
      title: 'C++ 2D game',
      tags: ['C++', 'SFML','2D'],
      projectLink: 'https://github.com/Rezgui-A/SPACE-FIGHT-GAME'
    },
    {
      imgSrc: '/images/work/project-5.jpg',
      title: 'Python coordinates converter app V1 (xlsx)',
      tags: ['Python', 'xlsx','pandas'],
      projectLink: 'https://github.com/Rezgui-A/coordonates-v1'
    },
    {
      imgSrc: '/images/work/project-3.jpg',
      title: 'Python coordinates converter app V2 (2D app)',
      tags: ['Python', 'Math','QtDesigner'],
      projectLink: 'https://github.com/Rezgui-A/coordonates-v2'
    },

    {
      imgSrc: '/images/work/project-4.jpg',
      title: 'Real time chat app',
      tags: ['TypeScript'],
      projectLink: 'https://github.com/Rezgui-A/Connectify-app'
    }
  ];
const Work = () => {
  return (
    <section id = "work"
    className="section
    ">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My protfolio highlights 
                </h2>
                <div className = "grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc,title,tags,projectLink},key)=>(
                        <ProjectCard
                        key= {key}
                        imgSrc={imgSrc}
                        title={title}
                        tags = {tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                        />
                        ))} </div>
        </div>
    </section>
  )
}

export default Work