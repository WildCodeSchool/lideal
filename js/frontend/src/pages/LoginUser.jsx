import { Link } from "react-router-dom";

import Button from "../components/Button";
import { useLogin } from "../context/LoginContext";

function LoginUser() {
  const { login, formValue, setFormValue } = useLogin();

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formValue);
  };

  return (
    <div className="contain">
      <h1>Connexion</h1>
      <div className="d-flex d-flex-column d-flex-center">
        <form onSubmit={handleSubmit} className="w-100">
          <label htmlFor="email" className="d-block mb-10">
            Email :
          </label>
          <input
            value={formValue.email}
            name="email"
            type="text"
            id="inputLogin"
            onChange={onChange}
            className="d-block mb-20"
          />
          <label htmlFor="password" className="d-block mb-10">
            Mot de passe :
          </label>
          <input
            value={formValue.password}
            name="password"
            type="password"
            id="inputLogin"
            onChange={onChange}
            className="d-block mb-20"
          />
          <Button
            type="submit"
            className="button bg-white radius-10 mt-30 mb-20"
          >
            Valider
          </Button>
          <Link to="/register">
            <p>
              Vous n'avez pas de compte ?<br />
              Inscrivez-vous ici.
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
