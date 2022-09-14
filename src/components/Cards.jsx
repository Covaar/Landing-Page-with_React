import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <div className="container col-md-10">
      <div className="row mt-4 g-5  justify-content-center">
        
          
          {cards.map(
            (
              { cardHeader, title, description, buttonURL, buttonLabel },
              index
            ) => {
              return (
                <Card
                  cardHeader={cardHeader}
                  title={title}
                  description={description}
                  buttonURL={buttonURL}
                  buttonLabel={buttonLabel}
                  key={index}
                />
              );
            }
          )}
        
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Cards;