
import useLocalStorage from './useLocalStorage';

function TestLocalStorage() {
  const [nom, setNom] = useLocalStorage('nomUtilisateur', '');

  return (
    <div>
      <h3>Test du Hook useLocalStorage</h3>

      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      <p>Nom sauvegardé : {nom}</p>
    </div>
  );
}

export default TestLocalStorage;
