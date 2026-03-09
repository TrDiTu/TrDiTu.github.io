import React from 'react';
import { Code, Palette, Terminal, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 60 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'CSS/SASS', level: 60 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 60 },
    { name: 'Motion Design', level: 25 }
  ];

  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      desc: 'Writing maintainable, scalable, and intuitive code architectures.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Modern Design',
      desc: 'Creating aesthetically pleasing UIs with a focus on user experience.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      desc: 'Optimizing web applications for speed and responsiveness.'
    },
    {
      icon: <Terminal size={32} />,
      title: 'Backend Integration',
      desc: 'Connecting intuitive frontends with robust backend services.'
    }
  ];

  return (
    <div className="page-transition-wrapper about-page">
      <h1 className="section-title">About Me</h1>

      <div className="about-content">
        <div className="about-text glass-panel">
          <h3>My Journey</h3>
          <p>
            Hello! I'm Cyra, a frontend developer and gamer
            with a love for creating beautiful, interactive web experiences.
          </p>
          <p>
            I'm currently a student at Hanoi University of Technology, majoring in Education Technology.
          </p>
          <p>
            Today, I specialize in building robust React applications with modern
            architectures, dynamic animations, and responsive designs that look
            great on any device.
          </p>
          <p>
            When I'm not coding, I'm usually playing video games.
          </p>
        </div>

        <div className="about-skills">
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card glass">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="skills-container glass-panel">
            <h3>Core Skills</h3>
            <div className="skills-list">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${idx * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
