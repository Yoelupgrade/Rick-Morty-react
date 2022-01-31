import React, {useState} from 'react'
import axios from 'axios'
import '../CharactersPage/Characters.css'

export const Searcher = () => {

    const [chart, setChart] = useState("")
    const [print, setPrint] = useState([])

     const getCharacterName = async () => {
    const res = await axios("https://rickandmortyapi.com/api/character/?name=" + chart)
    setPrint(res.data.results)
  }

  console.log(setChart)

  return (
    <div className="divSerch">
      <h3>Busca tú personaje</h3>
        <input type="text" placeholder='Nombre'
          onChange={(event) => {setChart(event.target.value);}}/>
          {chart && <button onClick={getCharacterName}>Buscar</button>}
     <div className="cont-Gallery">
      <ul>
        {print.map(item => (
          <li key={item.id}>
            <p>{item.name}</p> {item.price}
            <img className="imgCh" src={item.image} alt={item.name} />
            <div className="descChar">
                {item.species.length && <p className="pText">Especie: {item.species}</p>}
                {item.status.length && <p className="pText">Estado: {item.status}</p>}
                {item.gender.length && <p className="pText">Genero: {item.gender}</p>}
                {item.location.name.length && <p className="pText">Ubicación: {item.location.name}</p>}
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}


