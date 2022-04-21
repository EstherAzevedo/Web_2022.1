import React, { useState } from "react";

const CreateProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const handleSubmit = (event) => {
    //aqui código de comunicação com o backend
    alert(`Nome: ${name} \nUniversidade: ${university}\nTítulo: ${degree}`);
  };

  return (
    <div>
      <h2>Criar Professor</h2>
      
    </div>
  );
};

export default CreateProfessor;
