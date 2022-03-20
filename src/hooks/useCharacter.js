import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
        id
        name
        image
        gender
        episode {
          id
          name
          episode
        } 
    }
  }
`;

const useCharacter = (id) => {
    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { id },
    });

    return {
        loading,
        error,
        data,
    };
}

export default useCharacter;
