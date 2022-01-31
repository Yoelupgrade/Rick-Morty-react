import React from 'react' 
import '../CharactersPage/Characters.css'
import Pagination from '../Pagination/PaginationCH'

const Gallery = ({items, pages20}) => {
  return (
      <div className="cont-Gallery">
        <Pagination pagesCh={pages20}/>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.name}</p> {item.price}
            <img className="imgCh" src={item.image} alt={item.name} />
          </li>
        ))}
      </ul>
      </div>
    
  )
}

export default Gallery


