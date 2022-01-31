import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Location.css'
import GalleryLoc from '../Gallery/GalleryLoc'

export const Location = () => {
    const [items, setItems] = useState([])

  const getAlllocations = async (newPages = 1) => {
    const res = await axios("https://rickandmortyapi.com/api/location?page=" + newPages)

    setItems(res.data.results)
  }
  console.log(setItems)

  useEffect(()=>{
    getAlllocations();
  }, [])

  return (
    <div>
     <GalleryLoc items={items} Ploc={getAlllocations}/>
    </div>
  )
}


