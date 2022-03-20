import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

const ADD_CHARACTER = gql`
  mutation {
    AddCharacter(
      name: $name
      EpisodeName: $EpisodeName
      EpisodeEpisode: $EpisodeEpisode
    ) {
      id
      name
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

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

function Add() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const [name, setName] = React.useState("");
  const [EpisodeName, setEpisodeName] = React.useState("");
  const [EpisodeEpisode, setEpisodeEpisode] = React.useState("");

  console.log(name, EpisodeName, EpisodeEpisode);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <form>
        <select value={name} onChange={(e) => setName(e.target.value)}>
          {data.characters.results.map((character) => (
            <option key={character.id} value={character.id}>
              {character.name}
            </option>
          ))}
        </select>
        <input type="text" onChange={(e) => setEpisodeName(e.target.value)} />
        <input
          type="text"
          onChange={(e) => setEpisodeEpisode(e.target.value)}
        />
        <button>Add</button>
      </form>
      <br />
      <br />
      <br />
    </>
  );
}

export default Add;
