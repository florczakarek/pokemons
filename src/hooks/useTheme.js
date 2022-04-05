import { useContext } from 'react';
import { ThemeContext } from '../context/modeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
