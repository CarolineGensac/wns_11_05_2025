import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNewCountryInput } from "../hooks/useNewCountryInput";
import "../AddForm.css"; // Assure-toi d’avoir ce fichier

export default function AddForm() {
  const [createCountry, { data, loading, error }] = useNewCountryInput();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);

    const countryInput = {
      name: formData.get("name") as string,
      code: formData.get("code") as string,
      emoji: formData.get("emoji") as string,
      continent: {
        name: formData.get("continent") as string,
      },
    };

    createCountry({
      variables: {
        data: countryInput,
      },
    });
  };

  useEffect(() => {
    if (data) {
      navigate("/home");
    }
  }, [data, navigate]);

  if (error) return <>Erreur lors de la création du pays.</>;
  if (loading) return <>Soumission en cours...</>;

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="horizontal-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Emoji:
          <input type="text" name="emoji" required />
        </label>
        <label>
          Code:
          <input type="text" name="code" required />
        </label>
        <label>
          Continent:
          <input type="text" name="continent" />
        </label>
        <input type="submit" value="Add" className="submit-button" />
      </form>
    </div>
  );
}
