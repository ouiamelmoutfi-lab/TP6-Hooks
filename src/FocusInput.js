
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Tapez ici..." />
      <button onClick={handleClick}>Mettre le focus</button>
    </div>
  );
}

export default FocusInput;
