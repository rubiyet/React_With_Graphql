import React from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTERS_LOCATIONS = gql`
    query GetCharacterLocations($name: String!) {
        characters(filter: { name: $name }) {
            results {
                id
                location {
                    name
                }
            }
        }
    }
`;

export default function Search() {

    const [ name, setName ] = React.useState("");

    const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTERS_LOCATIONS, {
        variables: { name }
    });

    console.log(loading, error, data, called);

  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => getLocations() }>Search</button>
        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {data && (
            <ul>
                {data.characters.results.map((character) => {
                    return <li key={character.id}>{character.location.name}</li>;
                })}
            </ul>
        )} 
    </div>
  );
}