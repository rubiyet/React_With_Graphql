import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

function CharactersList() {
  const [name, setName] = React.useState("");

  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h1>Characters List</h1>
      {data.characters.results.map((character) => (
        <Link to={`/${character.id}`}>
          <p key={character.id} value={character.id}>
            {character.name}
          </p>
        </Link>
      ))}

      <form method="GET" action={`/${name}`}>
        <select value={name} onChange={(e) => setName(e.target.value)}>
          {data.characters.results.map((character) => (
            <option key={character.id} value={character.id}>
              {character.name}
            </option>
          ))}
        </select>
        <button type="submit" onclick="character()">
          Do It
        </button>
      </form>
    </div>
  );
}

export default CharactersList;
