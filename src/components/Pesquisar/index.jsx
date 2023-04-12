import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';

const Pesquisar = () => {
  const [query, setQuery] = useState('');
  const [deputados, setDeputados] = useState([]);
  const [quantidadeDeputados, setQuantidadeDeputados] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${query}`,
      );
      setDeputados(result.data.dados);
    };
    fetchData();
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleShowMoreClick = () => {
    setQuantidadeDeputados(quantidadeDeputados + 10);
  }

  return (
    <div>
      <form>
        <label>
          Pesquisar Deputado:
          <input type="text" value={query} onChange={handleInputChange} />
        </label>
        <Row>
        {deputados.slice(0, quantidadeDeputados).map(deputado => (
              <div className='col-md-3' key={deputado.id}>
                <h3>{deputado.nome}</h3>
                <img 
                    key={deputado.id}
                    src={deputado.urlFoto}
                    alt={deputado.nome}
                    className="img-fluid" 
                    style={{ maxWidth: '120px' }} 
                  />
          </div>
        ))}
          </Row>
      </form>
      {deputados.length > quantidadeDeputados &&
        <button onClick={handleShowMoreClick}>Mostrar Mais</button>
      }
    </div>
  );
}
export { Pesquisar }
