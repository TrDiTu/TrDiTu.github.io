import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Facebook, Instagram } from 'lucide-react';
import './Home.css';


const Home = () => {
  return (
    <div className="page-transition-wrapper home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-avatar">
            <img src='/../../Avatar.jpg' alt="Profile Avatar" />
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Cyra</span>
          </h1>

          <h2 className="hero-subtitle">
            Frontend Developer & Gamer
          </h2>

          <p className="hero-description">
            I'm a frontend developer that still learning basics.
            I'm also a gamer who enjoys playing video games in my free time.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              My Works <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn btn-secondary glass">
              About Me
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/TrDiTu" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="https://facebook.com/cyra.23.05" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <Facebook size={22} />
            </a>
            <a href="https://instagram.com/cyra.23.05" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-shape shape-1"></div>
          <div className="glass-shape shape-2"></div>
          <div className="glass-card main-card">
            <div className="card-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </div>
            <div className="code-block">
              <p><span className="keyword">const</span> <span className="entity">developer</span> = {'{'}</p>
              <p className="indent"><span className="property">name:</span> <span className="string">'Cyra'</span>,</p>
              <p className="indent"><span className="property">skills:</span> [<span className="string">'React'</span>, <span className="string">'CSS'</span>, <span className="string">'Node.js'</span>],</p>
              <p className="indent"><span className="property">passion:</span> [<span className="string">'Coding'</span>, <span className="string">'Gaming'</span>],</p>
              <p>{'};'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
