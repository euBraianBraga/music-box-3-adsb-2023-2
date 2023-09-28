import api from "./api";
import { useState } from "react";

import "./style.css";

function App() {
  const [getMusicas, setMusicas] = useState([]);
  // criando state com valor de um vetor vazio;
  function listar() {
    api
      .get()
      .then((respostaObtida) => {
        // cairá aqui se a requisição for realizada;
        console.log(respostaObtida);
        // objeto que representa a resposta enviada pela API;
        console.log(respostaObtida.status);
        // vendo status da resposta (OK - 200);
        console.log(respostaObtida.data);
        // vendo os dados da resposta (data: []);
        setMusicas(respostaObtida.data);
        // setando "musicas" com os mesmos dados recebidos pela resposta da
        // requisição;
      })
      .catch((erroOcorrido) => {
        // cairá aqui se houver algum erro durante a
        // requisição;
        console.log(erroOcorrido);
      });
  }

  return (
    <>
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>

      {getMusicas.map((musica) => (
        <div key={musica.id} style={{ color: "red", background: "black" }}>
          <h1>{musica.nome}</h1>
          <h1>{musica.artista}</h1>
          <br />
        </div>
      ))}
    </>
  );
}
export default App;
