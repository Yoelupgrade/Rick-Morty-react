import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Searcher.css'

const Searcher = () => {

    const [chart, setChart] = useState("")
    const [print, setPrint] = useState([])

  const getCharacterName = async () => {
    const res = await axios("https://rickandmortyapi.com/api/character/?name=" + chart)
    setPrint(res.data.results)
  }

  console.log(setChart)

  useEffect(()=>{
    getCharacterName();
  },[])

  return (
    <div>
      <h2>Busca tú personaje</h2>
        <input type="text" placeholder='Nombre'
          onChange={(event) => {setChart(event.target.value);}}/>
          <button onClick={print ? getCharacterName : null}>Buscar</button>
     <div className="cont-Gallery">
      <ul>
        {print.map(item => (
          <li key={item.id}>
            <p>{item.name}</p> {item.price}
            <img className="imgCh" src={item.image} alt={item.name} />
          </li>
        ))}
      </ul>
      </div>
          
    </div>
  )
}

export default Searcher
