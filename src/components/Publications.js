import React from 'react';

function Publications() {
  return (
    <section id="publications">
      <h2 data-icon="📚">Publications</h2>
      <p>
        For a complete list of my publications, please visit my
        <a href="https://scholar.google.com/citations?user=LVhKmIIAAAAJ" 
           target="_blank" 
           rel="noopener noreferrer"
           className="scholar-link">
          <i className="ai ai-google-scholar"></i>
          Google Scholar
        </a>
      </p>
    </section>
  );
}

export default Publications;
