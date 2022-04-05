import { useState, useEffect } from 'react';
import List from './List';
import Navbar from '../layout/Navbar';
import Loading from './Loading';
import { FaChevronUp } from 'react-icons/fa';

const Home = () => {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(apiUrl);
  const [loading] = useState(false);

  const fetchPokemons = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUrl(data.next);

      const fetchSinglePokemon = (pokemons) => {
        pokemons.forEach(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await res.json();
          console.log(data);
          setPokemons((prev) => [...prev, data]);
        });
      };
      fetchSinglePokemon(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const loadMore = () => {
    fetchPokemons();
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 10,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <List pokemons={pokemons} />
        {!loading ? (
          <button className='button' onClick={loadMore}>
            Load more...
          </button>
        ) : (
          <Loading />
        )}
        <footer>
          <FaChevronUp
            className='scroll-to-top'
            onClick={() => scrollTop()}
          ></FaChevronUp>
        </footer>
      </div>
    </>
  );
};

export default Home;
