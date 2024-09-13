import React, { useState, useEffect } from 'react';

function VisitCounter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/jrzmnt.github.io/visits');
        const data = await response.json();
        setVisitCount(data.value);
      } catch (error) {
        console.error('Erro ao buscar contagem de visitas:', error);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <div className="visit-counter">
      <p><i className="fas fa-eye"></i> Visitas: {visitCount}</p>
    </div>
  );
}

export default VisitCounter;
