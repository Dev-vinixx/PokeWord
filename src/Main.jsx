import axios from 'axios';
import styles from '../src/Main.module.css'
import { useEffect, useState } from 'react'

function Main() {

  
  const [pokemonIdentifier, setPokemonIdentifier] = useState('1'); 
  const [imagePokemon, setImagePokemon] = useState(0);
  const defaultImage = '../public/pokebol.png';


  const getImagePokemon = async (identifier) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
      return response.data.sprites.front_default;
    } catch (error) {
      console.log('erro');

      return defaultImage;
    }
  };

  useEffect(() => {
    getImagePokemon(pokemonIdentifier).then(image => setImagePokemon(image));
  }, [pokemonIdentifier]);

  const handleArrowClick = (direction) => {
    if (!isNaN(pokemonIdentifier)) {
      let newId = parseInt(pokemonIdentifier) + direction;
      newId = Math.max(1, newId); // garantir que o ID não seja menor que 1
      newId = Math.min(1025, newId); // garantir que o ID não seja maior que 1025
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
            <p>pikachu</p>
            <div className={styles.sharePokemon}>
              <input type="text" placeholder='which is name pokemon' onChange={(e) => setPokemonIdentifier(e.target.value)} />
            </div>
            <div className={styles.divIdAndInsignia}>
              <span>#160</span>
              <img className={styles.iconsInsignia} src="../public/unnamed.png" alt="" />
            </div>
          </div>
          <div className={styles.simpleNavigationAndImagePokemon}>
          <span className={styles.arrowLeft} onClick={() => handleArrowClick(-1)} ></span>
            {imagePokemon === 0 ? <img src={defaultImage} alt="" /> : <img src={imagePokemon} alt="" /> }
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
                <p>66,7kg</p>
              </div>
              <div className={styles.aboutHeight}>
                <div>
                  <img src="../public/height.svg" alt="" />
                  <p>height</p>
                </div>
                <p>66,7M</p>
              </div>
            </div>
            <span className={styles.division}></span>
            <div className={styles.moreAbout}>
              <div className={styles.type}>
              <h2>Types</h2>
              <p>Eletrict</p>
              </div>
              <div className={styles.moves}>
              <h2>moves</h2>
              <ul className={styles.listMoves}>
                <li>Rock head</li>
                <li>Lightning Rod</li>
                <li>Batle Armor</li>
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