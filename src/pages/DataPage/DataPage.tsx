import React, { useEffect, useState } from "react";
import "./DataPage.css"
import useFetch from "../../hooks/useFetch";
import ErrorMessage from "../../componants/shared/ErrorMessage ";
import CardContainer from "../../componants/shared/CardsContainer/CardsContainer";
import { useLocation } from "react-router-dom";
import StarWarsObject from "../../types/starWarsObject";

const DataPage: React.FC = (): React.ReactElement => {
  const location = useLocation();
  const page = location.pathname.slice(1)
  const [characters, setCharacters] = useState<StarWarsObject[]>([]);
  const { data, loading, error } = useFetch<StarWarsObject>(`/${page}/`);

  useEffect(() => {
    if (data) {
      setCharacters(data.results);
    }
  }, [data]);

  return (
    <div>
      <div>
        <h1>{page[0].toUpperCase() + page.slice(1)}</h1>
        <div className="card-list">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <ErrorMessage message="Something went wrong" />
          ) : (
            <CardContainer objectsToDispaly={characters!} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DataPage;
