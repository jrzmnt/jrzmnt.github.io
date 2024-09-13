import React from 'react';
import profilePhoto from '../image/photo.jpg';

function Header() {
  return (
    <header className="header-content">
      <div className="header-left">
        <img src={profilePhoto} alt="Juarez Monteiro" className="profile-photo" />
      </div>
      <div className="header-right">
        <h1>Juarez Monteiro</h1>
        <p className="subtitle">AI Researcher and Data Scientist</p>
      </div>
    </header>
  );
}

export default Header;
