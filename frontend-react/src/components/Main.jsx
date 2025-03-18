import React, {useState} from "react";
import Button from "./Button"; // 🔹 Importando o componente Button corretamente

const Main = () => {

  return (
    <div className="text-light bg-light-dark p-5">
      <h1 className="text-light">Stock Prediction Portal</h1>
      <p className="text-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ratione
        quas, eligendi ut nulla dolorem temporibus ipsa accusantium recusandae
        sed. Debitis voluptas repudiandae ipsam ea esse nihil amet tempore.
        Veniam.
      </p>

      {/* 🔹 Botão corrigido e funcional */}
      <Button text="Login" className="btn btn-outline-info" url="/login" />
    </div>
  );
};

export default Main;
