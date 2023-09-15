import { useEffect, useState } from "react"

import { CardUser, IRepositorio } from "./components/card_user"

import './App.css';

function App() {
  const [repositorios, setEpisodios] = useState<IRepositorio[]>([])

  useEffect(() => {

    // fetch('https://rickandmortyapi.com/api/episode')
    fetch('https://api.github.com/users/lucas0601/repos')

      .then(resultado => resultado.json())
      .then((dados) => setEpisodios(dados)) 
      //.then((dados) => console.log(dados))
      .catch(erro => console.log(erro))
  }, [])

  return (
    <>
      <div className='cardWrap'>
        {repositorios.map((repositorio) => (
          <CardUser
            key={repositorio.name}
            repositorio={repositorio}
          />
        ))}
      </div>
    </>
  );
}

export default App;
