import { useState } from "react";

import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);

    console.log("inputValue =", inputValue);
  }

  function handleBlur(e) {
    if (!inputValue.includes("@")) {
      alert(
        "Attention votre adresse mail doit comporter un @ pour être valide"
      );
    }
  }

  return (
    <footer>
      <h2 className="footer__headline">
        Jungle House, la maison des amoureux des plantes
      </h2>
      <label className="footer__newsletter-label">
        Inscrivez-vous à notre newsletter
      </label>
      <input
        className="footer__newsletter-input"
        placeholder="Votre e-mail"
        onChange={handleInput}
        onBlur={handleBlur}
        value={inputValue}
      />
      <p className="footer__disclaimer">
        Jungle House 2021, tous droits reservés
      </p>
    </footer>
  );
}

export default Footer;
