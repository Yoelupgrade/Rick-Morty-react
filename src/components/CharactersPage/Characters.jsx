import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Gallery from '../Gallery/Gallery'

export const Characters = () => {

  const [items, setItems] = useState([])

  const getAllcharacters = async (newPages = 1) => {
    const res = await axios("https://rickandmortyapi.com/api/character?page=" + newPages)

    setItems(res.data.results)
  }
  console.log(setItems)

  useEffect(()=>{
    getAllcharacters();
  }, [])


  return(
   <Gallery items={items} pages20={getAllcharacters}/>
  )
}
  


