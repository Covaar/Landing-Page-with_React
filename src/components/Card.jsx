import React from "react";
import PropTypes from "prop-types";

const Card = ({ cardHeader, title, description, buttonURL, buttonLabel }) => {
  return (
      <div className="col-10 col-md-3 g-4">
        <div className="card border border-0">
          <div
            className="card-header border border-0 rounded-0 d-flex align-items-center justify-content-center fs-3 text-secondary"
            style={{
              height: "200px",
              width: "100%",
              background: "lightgray",
            }}
          >
            {cardHeader}
          </div>
          <div className="card-body  border px-0">
            <h5 className="card-title text-center fs-4 text text-dark">
              {title}
            </h5>
            <p className="card-text text-center py-2 px-4">
              <small>{description}</small>
            </p>
          </div>
          <div className="card-footer border mb-5 d-flex justify-content-center">
            <a href={buttonURL} className="btn btn-primary">
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    
  );
};

Card.propTypes = {
  cardHeader: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonURL: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Card;