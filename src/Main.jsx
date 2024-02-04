import styles from '../src/Main.module.css'

function Main() {

  return (
    <body className={styles.body}>
      <main className={styles.main}>
        <section className={styles.sectionPredictedAbout}>
          <div className={styles.containerPokemonAbout}>
            <p>pikachu</p>
            <div className={styles.divIdAndInsignia}>
              <span>#160</span>
              <img className={styles.iconsInsignia} src="../public/unnamed.png" alt="" />
            </div>
          </div>
          <div className={styles.simpleNavigationAndImagePokemon}>
            <span className={styles.arrowLeft}></span>
            <img src="../public/pikachu.png" alt="" />
            <span className={styles.arrowRight}></span>
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
            <div>

            </div>
          </div>
        </section>
      </main>
    </body>
  )

}

export default Main