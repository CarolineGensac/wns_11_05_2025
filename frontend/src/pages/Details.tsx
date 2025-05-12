import { useParams } from "react-router-dom";
import { useCountry } from "../hooks/useNewCountryInput"; // Assure-toi que le chemin est correct

export function DetailsPage() {
  const { code } = useParams(); // Récupère le code du pays depuis l'URL

  const { data, loading, error } = useCountry(code || ""); // Utilisation de la query pour obtenir les détails du pays

  if (loading) return <p>Chargement des détails...</p>;
  if (error) return <p>Erreur lors du chargement : {error.message}</p>;

  if (!data?.country) return <p>Le pays n'a pas été trouvé.</p>;

  // Vérifier si le continent est défini, sinon afficher "Non renseigné"
  const continentName = data.country.continent ? data.country.continent.name : "Non renseigné";

  return (
    <div>
      <h1>Détails du pays</h1>
      <p><strong>Emoji :</strong> {data.country.emoji}</p>
      <p><strong>Nom :</strong> {data.country.name}</p>
      <p><strong>Code :</strong> {data.country.code}</p>
      <p><strong>Continent :</strong> {continentName}</p>
    </div>
  );
}
