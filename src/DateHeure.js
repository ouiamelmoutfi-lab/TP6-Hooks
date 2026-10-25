
import { useState, useEffect } from 'react';

function DateHeure() {
  const [dateHeure, setDateHeure] = useState(new Date());

  useEffect(() => {
    const intervalle = setInterval(() => {
      setDateHeure(new Date());
    }, 1000);

    return () => clearInterval(intervalle);
  }, []);

  return (
    <div>
      <h3>Date et heure actuelles</h3>
      <p>{dateHeure.toLocaleString('fr-FR')}</p>
    </div>
  );
}

export default DateHeure;
