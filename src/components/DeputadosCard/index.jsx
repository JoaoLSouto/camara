import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Feed () {
  const [deputados, setDeputados] = useState([]);
  const [partidos, setPartidos] = useState([]);
  
  useEffect(() => {
    const fetchDeputados = async () => {
      const response = await axios.get(
        "https://dadosabertos.camara.leg.br/api/v2/deputados"
      );
      setDeputados(response.data.dados);

      // Faz uma solicitação HTTP para obter informações sobre os partidos de cada deputado
      const partidosIds = response.data.dados.map((deputado) => deputado.idPartido);
      const responsePartidos = await axios.get(
        `https://dadosabertos.camara.leg.br/api/v2/partidos?id=${partidosIds.join("|")}`
      );
      setPartidos(responsePartidos.data.dados);
    };
    fetchDeputados();
  }, [])

  const getPartidoDeputado = (deputado) => {
    const partido = partidos.find((partido) => partido.id === deputado.idPartido);
    return partido?.sigla;
  };

  return (
      <>        
      <div>
      <h1>Deputados</h1>
        {deputados.map(deputado => (
          <div key={deputado.id}>
            <h2>{deputado.nome}</h2>
            <p>{deputado.email}</p>
            <h2>{deputado.partido}</h2>
            <img key={deputado.id} src={deputado.urlFoto} alt={deputado.nome} />
            <h2>Partido: {getPartidoDeputado(deputado)}</h2>
          </div>
        ))}
      </div>
      </>
  );
}

export { Feed }