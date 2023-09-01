import styles from '../styles/Home.module.css';
import {Collapse} from 'antd'
const {Panel} = Collapse
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPills, faFileMedical, faHouseChimneyMedical,faBusinessTime} from '@fortawesome/free-solid-svg-icons';
function Home() {
    const titleTest = (<div>
      {/*<FontAwesomeIcon icon={faChevronDown} style={{color: "#5fa59d",}} />*/}
    <p className={styles.titleTest}>MEDME, C'EST QUOI ?</p>
  </div>)
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.leftHeader}>
            <div>
              <img src="./logo.svg" className={styles.logo}/>
              <div className={styles.titleHeader}>
                <p className={styles.headerMainText}>PRESENTATION</p>
                <p className={styles.headerLowText}>TITRE</p>
              </div>
            </div>
          </div>
          <div className={styles.rightHeader}>
            <img className={styles.imageHeader} src="./header.svg" />

          </div>
        </div>
        <div className={styles.panelInfo}>
         <p className={styles.titleWhite}>MEDME, C'EST QUOI ?</p>
          <div className={styles.purposeImg}>
            <img src="./Purpose-meds.svg" className={styles.imgPurpose}/>
            <img src="./Purpose-delivery.svg" className={styles.imgPurpose} />
            <img src="./purpose-time.svg" className={styles.imgPurpose}/>
          </div>
          <p className={styles.text}>Medme est votre partenaire de santé, pour se faire livrer en moins de 20 minutes ses médicaments à domicile</p>
        </div>
        <div className={styles.whySection}>
         <p className={styles.titleBlue} >POURQUOI ?</p>
          <div className={styles.purposeImg}>
            <div className={styles.whyImgContainer}></div>
            <img src='./imageWhy.svg' className={styles.whyImg}/>
            <div className={styles.whyText}>
              <p className={styles.whyParagraphe}>Une nouvelle tendance est apparue ces dernières années visant à faciliter l’accès
                aux besoins primaires de manger, boire ou se loger.
                De nos jours il est devenu facile de commander à manger, se faire livrer ses
                courses, rechercher un appartement, de manière simplifié et rapide.

                Alors pourquoi ne pourrait-on pas accéder à ses soins en moins de 20 minutes ?</p>
            </div>
          </div>
          <div className= {styles.contraintes}>
            <p className={styles.titleWhite} >LES CONTRAINTES</p>
            <div className={styles.restrictions}>
              <div className={styles.restrictionsCard}>
              <p className={styles.textRestrictions}>Agrémenter notre application en médicaments</p>
                <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faPills} size='2xl' />
                  </div>
              </div>
              <div className={styles.restrictionsCard}>
                <p className={styles.textRestrictions}>Délivrance des médicaments</p>
                <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faFileMedical} size='2xl' />
                  </div>
              </div>
              <div className={styles.restrictionsCard}>
               <p className={styles.textRestrictions}>L'accès aux informations des pharmaciens</p>
                <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faHouseChimneyMedical} size='2xl' />
                  </div>
              </div>
              <div className={styles.restrictionsCard}>
                <p className={styles.textRestrictions}>Le temps</p>
                  <div className={styles.iconContainer}>
                    <FontAwesomeIcon icon={faBusinessTime} size='2xl' />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
