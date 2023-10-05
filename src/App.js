import api from "./api";
import { useState } from "react";
import "./html-css-template/css/style.css";
import "./html-css-template/css/reset.css";
import Musicas from "./Musicas";

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
      <Musicas />
    </>
  );
}
export default App;
