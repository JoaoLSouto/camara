import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header';
import { Container} from './styles';

function DeputadosCard () {
  const [deputados, setDeputados] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados');
      setDeputados(response.data.dados);
    };
    fetchData();
  }, []);
  return (
      <>
      <Header />
      <div>
        <h1>Deputados</h1>
        {deputados.map(deputado => (
          <div key={deputado.id}>
            <h2>{deputado.nome}</h2>
            <p>{deputado.email}</p>
            <h2>{deputado.partido}</h2>
            <img key={deputado.id} src={deputado.urlFoto} alt={deputado.nome} />
          </div>
        ))}
      </div>
      </>
  );
}


export { DeputadosCard }