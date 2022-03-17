import React from 'react';
import { gql, useQuery } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
 query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    height
    weight
    species{
      name
    }
    abilities {
      ability {
        name
        url
      }
    }
    moves {
      move {
        name
        url
      }
    }
    types {
      type {
        name
      }
    }
    stats {
      base_stat
      effort
      stat{
        name
        url
      }
    }
    sprites{
      back_default
      front_default
    }
    message
    status
  }
}
`;