import { useTheme } from '../hooks/useTheme';
import { HiOutlineLightBulb } from 'react-icons/hi';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { mode, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.icons}>
        <HiOutlineLightBulb
          size={35}
          style={{
            cursor: 'pointer',
            filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)',
          }}
          onClick={toggleMode}
        />
        <img src={logo} alt='logo' />
      </div>
    </nav>
  );
};

export default Navbar;
