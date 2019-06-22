import React from 'react';

import './App.css';


const Bulles = require('./image/bulles.png');
const Crayon = require('./image/crayon.png');
const Science = require('./image/science.png');
const Casque = require('./image/casque.png');
const Account = require('./image/account.png');

const Logo = require('./image/logo.png');


const infopagesecond = (


    <div>
        <div className="wrapper">

        <article className="content">
            <h1>
                PREMIÈRE VISITE ?</h1>


            <p> <h4>Pour les Entreprises et les Professionnels:</h4></p>

            <p>
                Pour vous inscrire, vous devez vous munir de votre numéro d’Identification Fiscale ainsi que du numéro de Registre du Commerce.</p>
            <p> <h4>Pour les Particuliers:</h4></p>

            <p>
                Pour vous inscrire, vous devez vous munir de votre numéro de compte bancaire sur 16 chiffres.</p>


        </article>

    </div>

        <div>
            <div className="wrapper2">

                <button onClick="activateLasers()">

                    AUTHENTIFICATION POUR LES ENTREPRISES ET LES PROFESSIONNELS
                </button></div>
            <div>
                <p>
                </p>
            </div>
            <div className="wrapper2">
                <button onClick="activateLasers()">
                    AUTHENTIFICATION POUR LES PARTICULIERS
                </button>
            </div>
        </div>

    </div>


);


const infopage = (


    <div className="bloc1">
        <div className="wrapper">
            <header className="main-head"><h1>POURQUOI DEVENIR CLIENT</h1></header>
            <nav className="main-nav">
                <ul>

                </ul>
            </nav>
            <article className="content">
                <h1>LES 4 BONNES RAISONS DE CHOISIR
                    NOTRE BANQUE</h1>

                    <ul >
                        <img src={Bulles} className="image"/> UN SERVICE PERSONNALISÉ
                    </ul>
                <ul >
                    <img src={Science} className="image" /> DES PRODUITS INNOVANTS
                </ul>
                <ul >
                    <img src={Casque} className="image"/> UNE BANQUE PROCHE DE VOUS
                </ul>
                <ul >
            <img src={Crayon} className="image"/>VOS PROJETS SOUTENUS
        </ul>

            </article>

            <aside className="side"> <img src={Account}/></aside>
            <div>
                <img src={Logo}className="im"/>
            </div>

                <footer className="main-footer2"> <div className="wrapper2">
                    <button onClick="activateLasers()">
                        ABOUT US
                    </button>
                </div></footer>
            <footer className="main-footer3"> <div className="wrapper2">
                <button onClick="activateLasers()">
                    <h3> S'inscrire</h3>
                </button>
            </div></footer>
            <footer className="main-footer4"></footer>
        </div>


        <div>

        </div>
    </div>


);


const element = (


    <div className="bloc1">

        <div>{infopage} </div>
    </div>


);
const element1 = (


    <div className="bloc2">
        <div><h1>Banking System</h1>
            </div>
        <div>{infopagesecond}</div>

    </div>


);



function App() {
    return (
        <div className="App">


            {element}
            {element1}

        </div>
    );
}

export default App;
