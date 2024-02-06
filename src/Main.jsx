import axios from 'axios';
import styles from '../src/Main.module.css'
import { useEffect, useState } from 'react'

function Main() {


  const [pokemonIdentifier, setPokemonIdentifier] = useState('1');
  const [pokemonData, setPokemonData] = useState({});

  const defaultImage = '../public/pokebol.png'; 

  const getPokemonData = async (identifier) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
      return response.data;
    } catch (error) {
      console.log('erro');
      return {
        sprites: { front_default: defaultImage },
        weight: '0',
        height: '0',
        types: [],
        moves: []
      };
    }
  };

  useEffect(() => {
    getPokemonData(pokemonIdentifier).then(data => setPokemonData(data));
  }, [pokemonIdentifier]);

  const handleArrowClick = (direction) => {
    if (!isNaN(pokemonIdentifier)) {
      let newId = parseInt(pokemonIdentifier) + direction;
      newId = Math.max(1, newId); 
      newId = Math.min(1025, newId);
      setPokemonIdentifier(newId.toString());
    } else {
      setPokemonIdentifier('1');
    }
  };

  return (
    <body className={styles.body}>
      <main className={styles.main}>
        <section className={styles.sectionPredictedAbout}>
          <div className={styles.containerPokemonAbout}>
            <p>{pokemonData.name}</p>
            <div className={styles.sharePokemon}>
              <input type="text" placeholder='which is name pokemon' onChange={(e) => setPokemonIdentifier(e.target.value)} />
            </div>
            <div className={styles.divIdAndInsignia}>
              <span>#{pokemonData.id}</span>
              <img className={styles.iconsInsignia} src="../public/unnamed.png" alt="" />
            </div>
          </div>
          <div className={styles.simpleNavigationAndImagePokemon}>
            <span className={styles.arrowLeft} onClick={() => handleArrowClick(-1)} ></span>
            {pokemonData.sprites?.front_default ? <img src={pokemonData.sprites.front_default} alt="" /> : <img src={defaultImage} alt="" />}
            <span className={styles.arrowRight} onClick={() => handleArrowClick(+1)} ></span>
            <span className={styles.wave}></span>
          </div>
        </section>
        <section className={styles.sectionPokemonCharacteristics}>
          <div className={styles.columnOfAlign}>
            <div className={styles.divAbout}>
              <h2>about</h2>
              <div className={styles.aboutWeight}>
                <div>
                  <img src="../public/weight.svg" alt="" />
                  <p>weight</p>
                </div>
                <p>{pokemonData.weight}Kg</p>
              </div>
              <div className={styles.aboutHeight}>
                <div>
                  <img src="../public/height.svg" alt="" />
                  <p>height</p>
                </div>
                <p>{pokemonData.height}M</p>
              </div>
            </div>
            <span className={styles.division}></span>
            <div className={styles.moreAbout}>
              <div className={styles.type}>
                <h2>Types</h2>
                <p>{pokemonData.types?.map(type => type.type.name).join(', ')}</p>
              </div>
              <div className={styles.moves}>
                <h2>moves</h2>
                <ul className={styles.listMoves}>
                  {pokemonData.moves?.slice(0, 3).map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  )

}

export default Main