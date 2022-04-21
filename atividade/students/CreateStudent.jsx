import React, { useState } from "react";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  const handleSubmit = (event) => {
    //aqui código de comunicação com o backend
    alert(`Nome: ${name} \nCurso: ${course}\nIRA: ${ira}`);
  };

  return (
    <div>
      <h2>Criar Estudante</h2>
      
    </div>
  );
};

export default CreateStudent;
