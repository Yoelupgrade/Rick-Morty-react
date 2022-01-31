import React from 'react'
import './Gallery.css'
import PaginationLock from '../Pagination/PaginationLC'
const GalleryLoc = ({items, Ploc}) => {
    return (
      <div className="containerLoc">
        <PaginationLock pages={Ploc} className="paginat"/>
        <ul>
          {items.map(item => (
            <li key={item.id} className="uniqLi">
              <p className="pPlan">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      
    )
  }


export default GalleryLoc
