import { useState } from "react";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);

    console.log("inputValue =", inputValue);
  }

  function handleBlur(e) {
    if (!inputValue.includes("@")) {
      alert("Attention votre adresse mail doit comporter un @ pour être valide");
    }
  }

  return (
    <footer>
      <div>
        <h2>Jungle House, la maison des amoureux des plantes</h2>
      </div>
      <label>Inscrivez-vous à notre newsletter :</label>
      <input
        placeholder="Votre e-mail"
        onChange={handleInput}
        onBlur={handleBlur}
        value={inputValue}
      />
      <p>Jungle House 2021, tous droits resérvés</p>
    </footer>
  );
}

export default Footer;
