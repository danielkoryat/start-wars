import React from "react";
import StarWarsObject from "../../../types/starWarsObject";
import Card from "../Card/Card";
import "./CardsContainer.css";

interface CardContainerProps {
  objectsToDispaly: StarWarsObject[];
}
const CardContainer: React.FC<CardContainerProps> = ({
  objectsToDispaly,
}): React.ReactElement => {
  return (
    <>
      {objectsToDispaly && (
        <div className="cards">
          {objectsToDispaly.map((object, index) => (
            <Card key={index} objectToDisplay={object} />
          ))}
        </div>
      )}
    </>
  );
};

export default CardContainer;
