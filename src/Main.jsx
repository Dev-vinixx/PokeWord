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
            <span>sla</span>
            <img src="../public/pikachu.png" alt="" />
            <span>lsa2</span>
          </div>
        </section>
        <section className={styles.sectionPokemonCharacteristics}></section>
      </main>
    </body>
  )

}

export default Main