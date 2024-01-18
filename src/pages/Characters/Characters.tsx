import React, { useEffect, useState } from "react";
import "./Characters.css";
import useFetch from "../../hooks/useFetch";
import { API_ENDPOINTS } from "../../api/apiEndpoins";
import Character from "../../types/charcterType";
import ErrorMessage from "../../componants/shared/ErrorMessage ";
import CardContainer from "../../componants/shared/CardsContainer/CardsContainer";


const CharactersPage: React.FC = (): React.ReactElement => {
  const {
    data,
    loading,
    error,
  } = useFetch<Character>(API_ENDPOINTS.CHARACTER);

  const characters = data?.results;

  return (
    <div>
      <div>
        <h1>Characters</h1>
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

export default CharactersPage;
