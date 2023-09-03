import styles from '../styles/Home.module.css';
import {Collapse} from 'antd'
const {Panel} = Collapse
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { faPills, faFileMedical,faTruck,faClock, faHouseChimneyMedical,faBusinessTime} from '@fortawesome/free-solid-svg-icons';

function Home() {
  const contentStyle = {
    margin: 0,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height: '700px',
    color: 'red',
    lineHeight: '160px',
    background: '#154C79',
    borderRadius: '20px',
    boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.25)",
  };
  const wireframeCarrousselStyle = {
    margin: 0,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height: '1000px',
    color: 'red',
    lineHeight: '160px',
    background: '#154C79',
    borderRadius: '20px',
    boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.25)",
  }
    
  const NextArrow = ({ onClick }) => (
    <div className={styles.arrow} onClick={onClick} >
      <RightOutlined />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className={styles.arrow} onClick={onClick} >
      <LeftOutlined />
    </div>
  );
  
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
            <div className={styles.iconCard}>
              <FontAwesomeIcon icon={faPills} className={styles.icon} />
            </div>
            <div className={styles.iconCard}>
              <FontAwesomeIcon icon={faTruck} className={styles.icon} />
            </div>
            <div className={styles.iconCard}>
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
            </div>
            
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
          </div>
          <div className={styles.who}>
            <div className={styles.whoSection}>
              <p className={styles.titleWhite}>POUR QUI ?</p>
              <img src="cible-medme.svg"/>
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
          <div className={styles.storyBoardDisplay}>
          <p className={styles.titleWhite} >LES STORYBOARDS</p>

          <div className={styles.storyBoardSection}>
           
            
              <div className={styles.testedElementSection}>
                <p className={styles.testedElementSubject}> Les éléments de test : </p>
                <div className={styles.testedElement}>
                  <div className={styles.testedElementCard}>
                    <p className={styles.testedElementTitle}>Identification</p>
                    <div className={styles.testedElementChoice}>
                      <p>Numéro de téléphone</p>
                      <p className={styles.unChoosedElement}>Coordonnées classiques</p>
                    </div>
                  </div>
                  <div className={styles.testedElementCard}>
                    <p className={styles.testedElementTitle}>Parcours de commande</p>
                    <div className={styles.testedElementChoice}>
                      <p>Choisir ses médicaments en premier puis sa pharmacie</p>
                      <p className={styles.unChoosedElement}>Choisir sa pharmacie en premier puis ses médicaments</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.carrousel}>
              <Carousel nextArrow={<NextArrow />} prevArrow={<PrevArrow />} >
                
                <div>
                  <h3 style={contentStyle}>
                    <img  src="./Storyboard-ecran1.svg"/>
                    </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                    <img  src="./Storyboard-ecran2.svg"/>
                    </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                  <img  src="./Storyboard-ecran8.svg"/>
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                  <img  src="./Storyboard-ecran3.svg"/>
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                    <img src="./Storyboard-ecran4.svg"/>
                    </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                  <img  src="./Storyboard-ecran5.svg"/>
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                  <img src="./Storyboard-ecran6.svg"/>
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                  <img  src="./Storyboard-ecran7.svg"/>
                  </h3>
                </div>
              </Carousel>
              </div>
            </div>
            </div>
            <div className={styles.wireframeSection}>
            <p className={styles.titleWhite} >LES WIREFRAMES</p>
            <div className={styles.carrouselWireframe}>
            <Carousel nextArrow={<NextArrow />} prevArrow={<PrevArrow />} >
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                    <img  src="./FunnelInscription.svg"/>
                    </h3>
                </div>
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                    <img  src="./Accueil.svg"/>
                    </h3>
                </div>
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                  <img  src="./JeCommande.svg"/>
                  </h3>
                </div>
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                  <img  src="./SuiteJeCommande.svg"/>
                  </h3>
                </div>
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                    <img src="./Mescommandes.svg"/>
                    </h3>
                </div>
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                  <img  src="./monProfil.svg"/>
                  </h3>
                </div>
              </Carousel>
              </div>
            </div>
            <div className={styles.wireframeSection}>
            <p className={styles.titleWhite} >UI KIT</p>
            <div className={styles.carrouselWireframe}>
            <Carousel nextArrow={<NextArrow />} prevArrow={<PrevArrow />} >
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                    <img  src="./Uikit1.svg"/>
                    </h3>
                </div>
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                    <img  src="./Uikit2.svg"/>
                    </h3>
                </div>
              </Carousel>
              </div>
            </div>
            <div className={styles.mockUpSection}>
            <p className={styles.titleWhite} >MockUps</p>
            <div className={styles.mockUpDisplay}>
              <p className={styles.mockUpTitle}>Funnel d’inscription</p>
              <div>
                <div className={styles.mockUpCard}>
                  <img src="./Mockups/SignInAuthentification.svg" className={styles.mockUpImage}/>
                  <p className={styles.mockUpText}>Ecran 1 : Identification</p>
                </div>
                <div className={styles.mockUpCard}>
                  <p className={styles.mockUpText}>Ecran 1 : Code de vérification</p>
                  <img src="./Mockups/SignInVérification.svg" className={styles.mockUpImage}/>
                </div>
                <div className={styles.mockUpCard}>
                  <img src="./Mockups/Inscription.svg" className={styles.mockUpImage}/>
                  <p className={styles.mockUpText}>Ecran 2 : Inscription</p>
                </div>
                <div className={styles.mockUpCard}>
                  <p className={styles.mockUpText}>Ecran 3 : Inscription fiche santé</p>
                  <img src="./Mockups/InscriptionFicheSanté.svg" className={styles.mockUpImage}/>
                </div>
              </div>
              <p className={styles.mockUpTitle}>Accueil</p>
              <div >
                <div className={styles.mockUpCard}>
                  <img src="./Mockups/Accueil.svg" className={styles.mockUpImage}/>
                  <p className={styles.mockUpText}>Ecran 1 : Accueil</p>
                </div>
                <p className={styles.mockUpTitle}>Commander</p>
                <div className={styles.mockUpCard}>
                  <img src="./Mockups/Order.svg" className={styles.mockUpImage} />
                  <p className={styles.mockUpText}>Ecran 1 : Recherche médicament</p>
                </div>
                <div className={styles.mockUpCard}>
                  <p className={styles.mockUpText}>Ecran 2 : Fiche produit</p>
                  <img src="./Mockups/FicheProduit.svg" className={styles.mockUpImage} />
                </div>
                <div className={styles.mockUpCard}>
                  <img src="./Mockups/Panier.svg" className={styles.mockUpImage}/>
                  <p className={styles.mockUpText}>Ecran 3 : Panier</p>
                </div>
                <div className={styles.mockUpCard}>
                  <p className={styles.mockUpText}>Ecran 4 : Sélection pharmacie</p>
                  <img src="./Mockups/Pharmacie.svg" className={styles.mockUpImage}/>
                </div>
              </div>
              <p className={styles.mockUpTitle}>Mon profil</p>
              <div>
                <div className={styles.mockUpCard}>
                  <img src="./Mockups/MonProfil.svg" className={styles.mockUpImage}/>
                  <p className={styles.mockUpText}>Ecran Mon profil</p>
                </div>
              </div>
              <p className={styles.mockUpTitle}> Mes commandes</p>
              <div >
                <div className={styles.mockUpCard}>
                  <img src="./Mockups/MesCommandes.svg"className={styles.mockUpImage} />
                  <p className={styles.mockUpText}>Ecran Mes commandes</p>
                </div>
              </div>
            </div>
            </div>
            <div>
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Préparation des sprints de développement</p>
              <div className={styles.sprintText}>
                <p className={styles.sprintTitleElement}>Méthodologie : SCRUM</p>
                <div className={styles.sprintElement}>
                <div className={styles.sprintIndividual}>
                  <p className={styles.sprintTitleElement}>Funnel d'inscription</p>
                  <p>En tant que nouvel utilisateur de l’application Medme, <span className={styles.userStoryFormat}>je souhaite m’inscrire</span> en
renseignant mes informations <span className={styles.userStoryFormat}>afin de pouvoir commander mes médicaments.</span></p>
                </div>
                <div className={styles.sprintIndividual}>
                  <p className={styles.sprintTitleElement}>Passer une commande</p>
                  <p>En tant qu’utilisateur ayant besoin d’un médicament, <span className={styles.userStoryFormat}>je veux commander</span> en
quelques clics mon médicament <span className={styles.userStoryFormat}>afin de pouvoir être livré</span></p>
                  <p>En tant qu’utilisateur, <span className={styles.userStoryFormat}>je souhaite lire la description</span>, savoir si celui-ci est
remboursé et s’il est sur ordonnance <span className={styles.userStoryFormat}>afin de pouvoir d’être sûr de mon choix</span></p>
                </div>
                <div className={styles.sprintIndividual}>
                  <p className={styles.sprintTitleElement}>Visualisation des commandes précédentes</p>
                  <p>En tant que client récurrent, <span className={styles.userStoryFormat}>je veux être en capacité de voir mes dernières
commandes</span> et pouvoir <span className={styles.userStoryFormat}>commander à nouveau des médicaments facilement</span></p>
                </div>
                <div className={styles.sprintIndividual}>
                  <p className={styles.sprintTitleElement}>Mon profil</p>
                  <p>En tant qu’utilisateur, j’aimerais <span className={styles.userStoryFormat}>pouvoir modifier mes informations
personnelles ou rajouter une fiche santé afin de compléter mon profil</span></p>
                </div>
                <div className={styles.sprintIndividual}>
                  <p className={styles.sprintTitleElement}>Suivi de commande</p>
                  <p>Ayant commandé un médicament, <span className={styles.userStoryFormat}>j’aimerais pouvoir suivre ma livraison</span> afin
de <span className={styles.userStoryFormat}>m’organiser pour la réception de celui-ci</span></p>
                </div>
                <div className={styles.sprintIndividual}>
                  <p className={styles.sprintTitleElement}>Suggestion personnalisée</p>
                  <p>En tant qu’utilisateur récurrent, je souhaite <span className={styles.userStoryFormat}>avoir en suggestion les
médicaments</span> que j’ai <span className={styles.userStoryFormat}>indiqué dans ma fiche santé</span> (renseignée dans ma fiche
santé)</p>  
                </div>
                </div>
                <img src="./Sprint1.svg" />
              </div>
              
            </div>
            {/*<div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Compétences nécéssaires</p>
              <div className={styles.sprintText}>
                <p>Pour réaliser ce projet nous aurons besoins des compétences suivantes :</p>
                <ul>
                  <li>Maîtrise de javascript</li>
                  <li>La mise en place d’une base de données avec MongoDB</li>
                  <li>La mise en place d’une architecture MVC</li>
                  <li>La création d’un backend avec Node JS et Express JS</li>
                  <li>La maîtrise des requêtes HTTP afin de facilement communiquer entre le
frontend, le backend et les différents webservices/API</li>
                  <li>La maîtrise du framework React Native (langage, hook, composants,
screens, particularité du CSS...)</li>
                  <li>La mise en place d’un store Redux pour stocker certaines informations lors
de la navigation</li>
                  <li>La maîtrise de react navigation pour naviguer facilement au sein de
l’application</li>
                  <li>La compréhension et la gestion d’un environnement de Versionning du
code grâce à la technique de branches GIT</li>
                  <li>La maîtrise de l’upload de fichier et du stockage sur un CDN</li>
                  <li>La mise en place d’un environnement d’authentification sécurisée</li>
                  <li>La mise en production du backend via Vercel</li>
                  <li>La mise en production du frontend via Expo</li>
                </ul>
              </div>
                  </div>*/}
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Schema de la base de données</p>
              <img src="./MedmeBDD.svg" className={styles.bddCard}/>
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>API du backend</p>
              <div className={styles.carrouselWireframe}>
            <Carousel nextArrow={<NextArrow />} prevArrow={<PrevArrow />} >
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                    <img  src="./routeMedicaments.svg"/>
                    </h3>
                </div>
                <div>
                  <h3 style={wireframeCarrousselStyle}>
                    <img  src="./routeSuggestion.svg"/>
                    </h3>
                </div>
              </Carousel>
              </div>
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Déroulé des sprints</p>
              <div className={styles.sprintCardSection} >
              <div className={styles.sprintCard} >
                <p className={styles.sprintTitle}>SPRINT 1</p>
                <ul>
                  <li>Initialisation du projet</li>
                  <li>Création des composants</li>
                  <li>Création des templates de routes et des Schemas</li>
                  <li>Installation des modules</li>
                  <li>Création du scrapper via puppeteer</li>
                  <li>Création de la route médicaments</li>
                  <li>Création des screens Fiche Santé</li>
                  <li>Création du screen Home</li>
                </ul>
                <p className={styles.sprintDifficultés}>Difficultés rencontrées: </p>
                <ul>
                  <li>API médicament gratuite introuvable</li>
                  <li>Rapatriement des branches sur github</li>
                </ul>
              </div>
              <div className={styles.sprintCard}>
                <p className={styles.sprintTitle}>SPRINT 2</p>
                <ul>
                  <li>Déploiement du backend</li>
                  <li>Création du reducer</li>
                  <li>Screen de choix de pharmacies</li>
                  <li>Fiche produit</li>
                </ul>
                <p className={styles.sprintDifficultés}>Difficultés rencontrées: </p>
                <ul>
                  <li>Intégration de la liste de pharmacies dans la BDD</li>
                  <li>Impossibilité d'utiliser le scrapper sur un backend déployé</li>
                </ul>
              </div>
              <div className={styles.sprintCard}>
                <p className={styles.sprintTitle}>SPRINT 3</p>
                <ul>
                  <li>Création des screens Mon Profil</li>
                  <li>Création de la route getUserInfo</li>
                  <li>Correction de quelques bugs</li>
                </ul>
                <p className={styles.sprintDifficultés}>Difficultés rencontrées: </p>
                <ul>
                  <li>Mauvaise gestion des quantités dans le panier côté backend</li>
                </ul>
              </div>
              <div className={styles.sprintCard}>
                <p className={styles.sprintTitle}>SPRINT 4</p>
                <ul>
                  <li>Création de la fonctionnalité de suggestions personnalisées</li>
                  <li>Ajustement CSS et débugage </li>
                </ul>
              </div>
              </div>
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Technologies utilisées</p>
              <div className={styles.technologiesCard}>
                <p className={styles.sprintTitle}>Backend</p>
                <div className={styles.technologiesLogoSection}>
                  <img src="./logoTechnologies/nodeJs.svg" className={styles.technologiesLogo}/>
                  <img src="./logoTechnologies/expressJS.svg" className={styles.technologiesLogo}/>
                </div>
              </div>
              <div className={styles.technologiesCard}>
                <p className={styles.sprintTitle}>Base de données</p>
                <div className={styles.technologiesLogoSection}>
                  <img src="./logoTechnologies/mongoDB.svg" className={styles.technologiesLogo}/>
                  <img src="./logoTechnologies/mongoose.svg" className={styles.technologiesLogo}/>
                </div>
              </div>
              <div className={styles.technologiesCard}>
                <p className={styles.sprintTitle}>Frontend</p>
                <div className={styles.technologiesLogoSection}>
                  <img src="./logoTechnologies/react-native.svg" className={styles.technologiesLogo}/>
                  <img src="./logoTechnologies/redux.svg" className={styles.technologiesLogo}/>
                  <img src="./logoTechnologies/expo.svg" className={styles.technologiesLogo}/>
                </div>
              </div>
              <div className={styles.technologiesCard}>
                <p className={styles.sprintTitle}>Webservices</p>
                <div className={styles.technologiesLogoSection}>
                  <img src="./logoTechnologies/cloudinary.svg" className={styles.technologiesLogo}/>
                </div>
              </div>
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Architecture de l'application</p>
              <img src="./SchemaArchitectureApp.svg" className={styles.bddCard}/>
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Composants graphiques</p>
              <p>Liste des composants :</p>
              <div className={styles.composantsList}>
                <div className={styles.composantsCard}>
                  <p className={styles.composantTitle}>HeaderLogo.js</p>
                  <img src="./composants/headerLogo.svg" className={styles.composantImage}/>
                  
                </div>
                <div className={styles.composantsCard} >
                  <p className={styles.composantTitle}>HeaderSansLogo.js</p>
                  <img src="./composants/headerSansLogo.svg" className={styles.composantImage}/>
                  
                </div>
                <div className={styles.composantsCard} >
                  <p className={styles.composantTitle}>Input.js</p>
                  <img src="./composants/input.svg" className={styles.composantImage}/>
                  
                </div>
                <div className={styles.composantsCard} >
                  <p className={styles.composantTitle}>Button.js</p>
                  <img src="./composants/button.svg" className={styles.composantImage}/>
                  
                </div>
                <div className={styles.composantsCard} >
                  <p className={styles.composantTitle}>Title.js</p>
                  <img src="./composants/title.svg" className={styles.composantImage}/>
                  
                </div>
                <div className={styles.composantsCard} >
                  <p className={styles.composantTitle}>ProductDisplay.js</p>
                  <img src="./composants/productDisplay.svg" className={styles.composantImage}/>
                  
                </div>
                </div>
                <p className={styles.composantTitle}>Liste des screens :</p>
                <div className={styles.screensSection}>
                <div className={styles.screenCard}>
                <p className={styles.composantTitle}>SingUp screens</p>
                  <ol>
                    <li className={styles.screenIndividual}>LoginScreen.js</li>
                    <li className={styles.screenIndividual}>InscriptionProfil.js</li>
                    <li className={styles.screenIndividual}>InscriptionFicheSante.js</li>
                    <li className={styles.screenIndividual}>InscriptionAllergie.js</li>
                    <li className={styles.screenIndividual}>InscriptionTraitement.js</li>
                  </ol>
                </div>
                <div className={styles.screenCard}>
                <p className={styles.composantTitle}>Accueil screen</p>
                    <ol>
                    <li className={styles.screenIndividual}>HomeScreen.js</li>
                    </ol>

                </div>
                <div className={styles.screenCard}>
                <p className={styles.composantTitle}>Commande screens</p>
                    <ol>
                    <li className={styles.screenIndividual}>OrderScreen.js</li>
                    <li className={styles.screenIndividual}>MedicamentsSelection.js</li>
                    <li className={styles.screenIndividual}>ParapharmacieSelection.js</li>
                    <li className={styles.screenIndividual}>FicheProduit.js</li>
                    <li className={styles.screenIndividual}>CheckoutScreen.js</li>
                    <li className={styles.screenIndividual}>UploadPrescription.js</li>
                    <li className={styles.screenIndividual}>SnapScreen.js</li>
                    <li className={styles.screenIndividual}>ChoosePharmacie.js</li>
                    <li className={styles.screenIndividual}>PaymentScreen.js</li>
                    <li className={styles.screenIndividual}>ConfirmationCommande.js</li>
                    <li className={styles.screenIndividual}>SuiviCommande.js</li>
                    </ol>
                </div>
                <div className={styles.screenCard}>
                <p className={styles.composantTitle}>Mon profil screen</p>
                    <ol>
                    <li className={styles.screenIndividual}>MonProfil.js</li>
                    </ol>
                </div>
                <div className={styles.screenCard}>
                <p className={styles.composantTitle}>Mes commandes screens</p>
                    <ol>
                    <li className={styles.screenIndividual}>MesCommandes.js</li>
                    <li className={styles.screenIndividual}>DetailCommande.js</li>
                    </ol>
                </div>
                </div>
                <div>
                  <p className={styles.composantTitle}>Exemple de screens avec composants</p>
                  <div className={styles.screenExampleSection}>
                    <img src="./composants/exempleScreen1.svg" className={styles.screenExample}/>
                    <img src="./composants/exempleScreen2.svg" className={styles.screenExample}/>
                  </div>
                </div>
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Environnement de déploiement</p>
              <img src="./SchemaDeploimentApp.svg" className={styles.bddCard}/>
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Environnement TDD</p>
              <p className={styles.composantTitle}>Backend</p>
              <div className={styles.tddSection}>
              <div className={styles.screenCard}>
                <p>médicaments.test.js</p>
                <ul>
                  <li>Nom du test : POST /medicaments</li>
                  <li>Description : Ce test vise à vérifier si en renseignant en
req.body.name « Doliprane » on se retrouve avec les 5
résultats disponibles en base de données.</li>
                  <li>Information envoyée : name: 'Doliprane'</li>
                  <li>Informations attendues :</li>

                </ul>
                </div>
                <div className={styles.screenCard}>
                <p>orders.test.js</p>
                <ul>
                  <li>Nom du test : GET /orders/byId/:id</li>
                  <li>Description : Ce test vise à vérifier si en renseignant l’id de
commande « 64d26ba28f963f7ba2cedb9a » renvoie
correctement toutes les informations d’une commande
spécifique</li>
                  <li>Information envoyée
: .get('/orders/byId/64d26ba28f963f7ba2cedb9a')</li>
                  <li>Informations attendues :</li>

                </ul>
                </div>
                </div>
                <p className={styles.composantTitle}>Frontend</p>
                <div className={styles.tddSection}>
                <div className={styles.screenCard}>
                <p>médicaments.test.js</p>
                <ul>
                  <li>Nom du test : POST /medicaments</li>
                  <li>Description : Ce test vise à vérifier si en renseignant en
req.body.name « Doliprane » on se retrouve avec les 5
résultats disponibles en base de données.</li>
                  <li>Information envoyée : name: 'Doliprane'</li>
                  <li>Informations attendues :</li>

                </ul>
                </div>
                <div className={styles.screenCard}>
                <p>orders.test.js</p>
                <ul>
                  <li>Nom du test : GET /orders/byId/:id</li>
                  <li>Description : Ce test vise à vérifier si en renseignant l’id de
commande « 64d26ba28f963f7ba2cedb9a » renvoie
correctement toutes les informations d’une commande
spécifique</li>
                  <li>Information envoyée
: .get('/orders/byId/64d26ba28f963f7ba2cedb9a')</li>
                  <li>Informations attendues :</li>
                </ul>
                </div>
                </div>
                
                
            </div>
            <div className={styles.mockUpSection}>
              <p className={styles.titleWhite}>Authentification</p>
              <div className={styles.screenCard}>
                <p className={styles.composantTitle}>Chiffrement du code généré avec bcrypt</p>
                <ul>
                  <li>Rôle : Chiffre du code d'authentification envoyé par sms</li>
                  <li>Module utilisé : Bcrypt</li>
                  <li>Fonctionnement : Comparaison du code saisit par l'utilisateur au hash enregistré en backend</li>

                </ul>
                </div>
                <div className={styles.screenCard}>
                <p className={styles.composantTitle}>Génération d’un token</p>
                <ul>
                  <li>Rôle : Authentifier la connexion de l'utilisateur</li>
                  <li>Module utilisé : uid32</li>
                  <li>Fonctionnement : Création et stockage du token en backend puis vérification du status de connection en renvoyant le token</li>

                </ul>
                </div>
            </div>
            <div className={styles.mockUpSection}>
            <p className={styles.titleWhite}>Démonstration vidéo</p>
            <video controls width="800" height="800">
                  <source type="video/mp4" src="./Medme.mp4" />
            </video>
            </div>
      </main>
    </div>
  );
}

export default Home;
