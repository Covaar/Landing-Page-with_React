// import React from 'react';
// import PropTypes from 'prop-types';
// import ButtonLink from './ButtonLink';

// const Header = ({ header }) => { // Destructuring Props (header)
//     return (
//         <header className="masthead text-center text-white">
//             <div className="masthead-content">
//                 <div className="container px-5">
//                     <h1 className="masthead-heading mb-0">{header.title}</h1>
//                     <h2 className="masthead-subheading mb-0">{header.subtitle}</h2>
//                     <ButtonLink button={header.button} />
//                 </div>
//             </div>
			
//             <div className="bg-circle-1 bg-circle"></div>
//             <div className="bg-circle-2 bg-circle"></div>
//             <div className="bg-circle-3 bg-circle"></div>
//             <div className="bg-circle-4 bg-circle"></div>
//         </header>
//     )
// }

// Header.propTypes = {
//     header: PropTypes.object.isRequired,
// }

// export default Header;

import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ jumbotron }) => {
	return (
		<div className="container-fluid p-0 justify-content-center">
			<div className="jumbotron col-10 m-auto p-5">
				<h1 className="display-3">{jumbotron.title}</h1>
				<p className="lead">{jumbotron.subtitle}</p>
				<a className="btn btn-primary btn-lg" href={jumbotron.button.link} role="button">{jumbotron.button.label} </a>
			</div>
		</div>)

};

Jumbotron.propTypes = {
	jumbotron: PropTypes.object.isRequired,
};

export default Jumbotron;