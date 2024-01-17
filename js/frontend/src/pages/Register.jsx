export default function Register() {
  return (
    <>
      <div>Insciption</div>
      <form action="POST">
        <label htmlFor="genre">Me</label>
        <input type="checkbox" />
        <label htmlFor="genre">Mr</label>
        <input type="checkbox" />
        <label htmlFor="firstName">Prénom</label>
        <input type="text" />
        <label htmlFor="lastName">Nom</label>
        <input type="text" />
        <label htmlFor="password">Mot de passe</label>
        <input type="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
        <label htmlFor="password">Confirmation mot de passe</label>
        <input type="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
        <label htmlFor="mail">Email</label>
        <input type="text" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" />
        <label htmlFor="email">Confirmation Email</label>
        <input type="text" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" />
        <label htmlFor="phone">Numéro de téléphone</label>
        <input type="tel" />
        <label htmlFor="dtn">Date de naissance</label>
        <input type="date" />
        <button type="submit">S'inscrire</button>
      </form>
    </>
  );
}
