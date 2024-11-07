import SkillCard from "./SkillCard";
const skillItem = [
    {
      imgSrc: '/images/skills/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/skills/c.svg',
      label: 'C++',
      desc: 'Object Oriented C'
    },
    {
      imgSrc: '/images/skills/python-5.svg',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/skills/spring-3.svg',
      label: 'SpringBoot',
      desc: 'Java framework'
    },
    {
      imgSrc: '/images/skills/java-4.svg',
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/skills/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/skills/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/skills/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];
const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
            Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className ="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                skillItem.map(({imgSrc,label,desc},key)=>(
                        <SkillCard key = {key} imgSrc = {imgSrc} label = {label} desc = {desc} classes ="reveal-up"/>
                ))
}
            </div>
        </div>
    </section>

)

}

export default Skill