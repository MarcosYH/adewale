import "../styles/Contact..css";
import imgcontact from "../assets/imgcontact.png";
import fondcontact from "../assets/fondcontact.png";

import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="contact">CONTACTS</h1>
      <div className="soulignement4"> </div>
      <div className="blocContatct">
        <img src={imgcontact} alt="imgcont" className="imgcontact" />
        <img src={fondcontact} alt="fondcontact" className="fondcontact" />

        <div className="formNom">
          <input
            type="input"
            className="formligneNom"
            placeholder=""
            required=""
          />
          <label for=" Nom" className="labelNom">
            NOM
          </label>
        </div>

        <div className="formEmail">
        <input
          type="email"
          className="formligneEmail"
          placeholder=""
          required=""
        />
        <label for=" Email" className="labelEmail">
          EMAIL
        </label>
      </div>

      <div className="formMsg">
      <input
        type="text"
        className="formligneMsg"
        placeholder=""
        required=""
      />
      <label for=" Message" className="labelMsg">
        MESSAGE
      </label>
    </div>

    <button className="bouttonEnvoyer">ENVOYER</button>
        

      </div>
    </div>
  );
};

export default Contact;
