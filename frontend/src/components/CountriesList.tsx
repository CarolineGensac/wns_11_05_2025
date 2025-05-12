import { useCountries } from "../hooks/useNewCountryInput";
import { Link } from "react-router-dom";
import "../CountriesList.css"; // N'oublie pas de créer ce fichier

export default function CountriesList() {
  const { data, loading, error } = useCountries();

  if (loading) return <p>Chargement des pays...</p>;
  if (error) return <p>Erreur lors du chargement : {error.message}</p>;

  return (
    <div className="countries-wrapper">
      <div className="countries-grid">
        {data.countries.map((country: any) => (
          <div key={country.id} className="country-card">
            <div className="emoji">{country.emoji}</div>
            <Link to={`/details/${country.code}`} className="name-link">
              {country.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
