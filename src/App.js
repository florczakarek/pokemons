import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';

import { useTheme } from './hooks/useTheme';

function App() {
  const { mode } = useTheme();

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div className={`App ${mode}`}>
      <Home />
    </div>
  );
}

export default App;
