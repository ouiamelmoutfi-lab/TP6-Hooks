
import { useState } from 'react';

function useLocalStorage(key, valeurInitiale) {
  const [valeur, setValeur] = useState(() => {
    const valeurSauvegardee = localStorage.getItem(key);

    return valeurSauvegardee !== null
      ? JSON.parse(valeurSauvegardee)
      : valeurInitiale;
  });

  const modifierValeur = (nouvelleValeur) => {
    setValeur(nouvelleValeur);
    localStorage.setItem(key, JSON.stringify(nouvelleValeur));
  };

  return [valeur, modifierValeur];
}

export default useLocalStorage;
