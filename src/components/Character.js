import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import Add from "./Add";

function Character() {

    const { id } = useParams();

    const { loading, error, data } = useCharacter(id);

    console.log( loading, error, data );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
    <div>
        <img src={data.character.image} alt="character" width={450} height={450}/>
        <div className="Character-content">
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className="Character-episode">
                {data.character.episode.map((episode) => {
                    return (
                        <div key={episode.id}>
                            {episode.id} <b></b>{episode.name} <b>{episode.episode}</b>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    <Add />
    </>
  );
}

export default Character;
