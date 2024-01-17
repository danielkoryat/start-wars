import React, { useEffect, useState } from "react";
import "./Characters.css";
import { getCharacters } from "../../api/actions/chracters";
import { Character } from "../../api/actions/chracters";

const CharactersPage: React.FC = (): React.ReactElement => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      const characters = await getCharacters();
      console.log(characters);
      setCharacters(characters);
      setLoading(false);
    };
    fetchCharacter();
  }, []);

  return (
    <div>
      <div>
        <h1>Characters</h1>
        <div className="character-list">
          {loading ? (
            <p>Loading...</p>
          ) : (
            characters.map((character, index) => (
              <div className="character-card" key={index}>
                <h2>{character.name}</h2>
                <p>
                  <strong>Birth Year:</strong> {character.birth_year}
                </p>
                <p>
                  <strong>Gender:</strong> {character.gender}
                </p>
                <p>
                  <strong>Height:</strong> {character.height} cm
                </p>
                <p>
                  <strong>Mass:</strong> {character.mass} kg
                </p>
                <p>
                  <strong>Hair Color:</strong> {character.hair_color}
                </p>
                <p>
                  <strong>Eye Color:</strong> {character.eye_color}
                </p>
                <p>
                  <strong>Skin Color:</strong> {character.skin_color}
                </p>
                {/* More character properties can be added here */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
