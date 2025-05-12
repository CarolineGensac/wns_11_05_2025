// put your GraphQL requests here (in one file or different ones)

import { gql } from "@apollo/client";

// ✅ Mutation pour ajouter un pays
export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      name
      code
      emoji
      continent {
      name
    }
    }
  }
`;

// ✅ Query pour récupérer tous les pays
export const GET_COUNTRIES = gql`
  query Countries {
  countries {
    id
    code
    name
    emoji
    continent {
      name
    }
  }
}
`;

export const GET_COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;