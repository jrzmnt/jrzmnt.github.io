import React from 'react';

function Awards() {
  const awards = [
    {
      title: "2nd. Best Master’s Dissertation in Artificial Intelligence of Brazil",
      conference: "PhD Thesis Contest in Artificial Intelligence, CTDIAC-BRACIS",
      year: 2018
    },
    {
      title: "Best Student Paper",
      institution: "IEEE Joint Conference on Neural Networks, IJCNN",
      year: 2017
    },
    {
      title: "Best Student Poster",
      institution: "Instituto Federal do Rio Grande do Sul, Canoas, Scientific hall",
      year: 2015
    }
  ];

  return (
    <section id="awards">
      <h2 data-icon="🏆">Awards and Honors</h2>
      <ul className="awards-list">
        {awards.map((award, index) => (
          <li key={index} className="award-item">
            <h3>{award.title}</h3>
            <p>{award.conference || award.institution}, {award.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Awards;
