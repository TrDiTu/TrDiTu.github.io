import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      color: 'var(--text-secondary)',
      borderTop: '1px solid var(--glass-border)',
      marginTop: 'auto',
      fontSize: '0.9rem'
    }}>
      <p>&copy; {new Date().getFullYear()} TrDiTu. All rights reserved.</p>
      <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
        Built with React • Styled with CSS Glassmorphism
      </p>
    </footer>
  );
};

export default Footer;
