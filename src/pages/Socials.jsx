import React from 'react';
import { Mail, Github, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import './Socials.css';

const Socials = () => {
  const socialsList = [
    {
      name: 'Email',
      value: 'tung.td235@gmail.com',
      icon: <Mail size={24} />,
      link: 'mailto:tung.td235@gmail.com',
      color: '#ef4444'
    },
    {
      name: 'Facebook',
      value: 'cyra.23.05',
      icon: <Facebook size={24} />,
      link: 'https://facebook.com/cyra.23.05',
      color: '#4267B2'
    },
    {
      name: 'GitHub',
      value: '@TrDiTu',
      icon: <Github size={24} />,
      link: 'https://github.com/TrDiTu',
      color: '#ffffff',
      hoverIconColor: '#000000'
    },
    {
      name: 'Instagram',
      value: '@cyra.23.05',
      icon: <Instagram size={24} />,
      link: 'https://instagram.com/cyra.23.05',
      color: '#ec4899'
    }
  ];

  return (
    <div className="page-transition-wrapper socials-page">
      <div className="socials-header">
        <h1 className="section-title">Let's Connect</h1>
        <p className="socials-subtitle">
          Connect with me on social media
        </p>
      </div>

      <div className="socials-grid">
        {socialsList.map((social, idx) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            key={social.name}
            className="social-card glass"
            style={{
              animationDelay: `${idx * 0.15}s`,
              '--hover-color': social.color,
              '--hover-icon-color': social.hoverIconColor || 'white'
            }}
          >
            <div className="social-card-inner">
              <div
                className="social-card-icon"
                style={{ color: social.color }}
              >
                {social.icon}
              </div>
              <div className="social-card-info">
                <h3>{social.name}</h3>
                <p>{social.value}</p>
              </div>
              <div className="social-card-arrow">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <div
              className="social-card-glow"
              style={{ background: social.color }}
            ></div>
          </a>
        ))}
      </div>


    </div>
  );
};

export default Socials;
