import { useMutation, useQuery} from "@apollo/client";
import { ADD_COUNTRY, GET_COUNTRIES, GET_COUNTRY } from "../api/graphql"; // Assure-toi que ce chemin est correct

export function useNewCountryInput() {
  return useMutation(ADD_COUNTRY);
}

export function useCountries() {
  return useQuery(GET_COUNTRIES);
}

export function useCountry(code: string) {
  return useQuery(GET_COUNTRY, {
    variables: { code },
  });
}