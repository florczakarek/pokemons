import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';

const Pokemon = ({ name, type, sprites, weight, height }) => {
  const [showMore, setShowMore] = useState(false);
  const { mode } = useTheme();

  const onShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`card ${mode}`}>
      <div>
        <img className='img' src={sprites} alt='pokemon'></img>
      </div>
      <div className='content'>
        <h1>{name.toUpperCase()}</h1>
        {showMore && (
          <>
            <div>weight: {weight}</div>
            <div>height: {height}</div>
          </>
        )}
        <div>
          type: {type}
          {!showMore ? (
            <button className='btn-detail' onClick={onShowMore}>
              read more
            </button>
          ) : (
            <motion.button
              animate={{ rotateY: 360, opacity: 0.6 }}
              className='btn-detail'
              onClick={onShowMore}
            >
              hide details
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
