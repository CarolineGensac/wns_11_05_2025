import { FormEvent, useEffect } from "react";
import { useNewCountryInput }
import { useNavigate } from "react-router-dom";

export default function AddForm({

  const [createCountry, { data, loading: submitting, error: createError }] =
  useNewCountryInput();

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const formData = new FormData(form);

    createCountry({
      variables: {
        data as CountryInput,
      },
    });
  };

  useEffect(() => {
    if (!data) return;

    //a check redirection comme c'est une modal
    navigate(`/home}`);
  }, [data, navigate]);

if (error || createError) return <>Error!</>;
if (loading) return <>Loading...</>;
if (!data) return <>We couldn't find anything to display</>;

return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
)
})