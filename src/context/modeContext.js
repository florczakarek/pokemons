import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const modeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

const getStorageMode = () => {
  let mode = 'light';
  if (localStorage.getItem('mode')) {
    mode = localStorage.getItem('mode');
  }
  return mode;
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modeReducer, {
    mode: getStorageMode(),
  });

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
