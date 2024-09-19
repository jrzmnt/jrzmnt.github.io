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
      <div className="visit-counter-wrapper">
        <a href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjrzmnt.github.io&count_bg=%235FAA09&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" alt="visit counter" />
        </a>
      </div>
    </header>
  );
}

export default Header;
