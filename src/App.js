import DateHeure from './DateHeure';
import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';
import TestLocalStorage from './TestLocalStorage';

function App() {
  return (
    <div>
      <h1>TP 6 : Découverte des Hooks React</h1>

      <h2>Compteur interactif</h2>
      <Compteur />

      <h2>Champ de saisie</h2>
      <FocusInput />

      <h2>Nombre de rendus</h2>
      <CompteurRendu />

      <h2>Liste des articles</h2>
      <ListeArticles />

      <h2>Chronomètre</h2>
      <Timer />

      <h2>Hook personnalisé useLocalStorage</h2>
      <TestLocalStorage />

      <h2>Date et heure en temps réel</h2>
      <DateHeure />

    </div>
  );
}

export default App;
