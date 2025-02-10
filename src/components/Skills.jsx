import {
  Code,
  Database,
  Server,
  Globe,
  Layers,
  Terminal,
  Code2,
} from "lucide-react";

const skills = [
  { name: "Python", icon: <Code2 size={28} /> },
  { name: "JavaScript", icon: <Code size={28} /> },
  { name: "React", icon: <Globe size={28} /> },
  { name: "Node.js", icon: <Server size={28} /> },
  { name: "Express.js", icon: <Layers size={28} /> },
  { name: "Django", icon: <Server size={28} /> },
  { name: "MongoDB", icon: <Database size={28} /> },
  { name: "SQL", icon: <Database size={28} /> },
  { name: "RESTful APIs", icon: <Terminal size={28} /> },
];

export default function Skills() {
  return (
    <section className='skills-section'>
      <h2>Technical Skills</h2>
      <div className='skills-container'>
        {skills.map((skill, index) => (
          <div key={index} className='skill-card'>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
