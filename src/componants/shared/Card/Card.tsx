import React from "react";
import StarWarsObject from "../../../types/starWarsObject";
import { getObjectProperties } from "../../../utils/helpers";
import "./Card.css";

interface CardProps {
  objectToDisplay: StarWarsObject;
}

const Card: React.FC<CardProps> = ({ objectToDisplay }): React.ReactElement => {
  const properties = getObjectProperties(objectToDisplay);
  return (
    <div>
      <div>
        <div className="card">
          <h2>
            {"name" in objectToDisplay
              ? objectToDisplay.name
              : "title" in objectToDisplay
              ? objectToDisplay.title
              : "Something else"}
          </h2>
          <p>
            {properties.map(([key, value]) =>
              typeof value === "string" && !value.includes("http") &&  (
                <div key={key}>
                  <strong>{key}</strong>: {value}
                </div>
              )
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
