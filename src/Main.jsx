import React from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';

import './Main.css';
/* import img1 from './assets/img/01.jpg' */

export function Main({ jumbotron, navbar, cards, footer }) { // Destructuring Javascript
    return (
        <>
            {/* <!-- Navigation--> */}
            <Navbar navbar={navbar} />
            {/* <!-- Header--> */}
            <Jumbotron jumbotron={jumbotron} />
            {/* <!-- Cards sections --> */}
            <Cards cards={cards} />
            {/* <!-- Footer--> */}
            <Footer footer={footer} />
        </>
    )
}
