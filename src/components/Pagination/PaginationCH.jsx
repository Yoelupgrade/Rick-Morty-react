import React, {useState} from 'react'
import "./Pagination.css"
const Pagination = ({pagesCh}) => {
  const [pages, setPages] = useState(1)
  

  const changePagesCh = (newPage) =>{
    pagesCh(newPage);
    setPages(newPage);
  }
  const back = "https://res.cloudinary.com/dsmdcnoys/image/upload/v1643409732/Varios/Izquierda_jw57bi.png";
  const next = "https://res.cloudinary.com/dsmdcnoys/image/upload/v1643410248/Varios/Derecha_iarlz2.png";
  return (
    <div className="pagin">
    {(pages > 1) &&
    (<img src={back} alt="Flecha izquierda" className="imgPg"
     onClick={() =>changePagesCh(pages - 1)}/>)}
      <span>Página {pages}</span>
      {(pages < 42) &&
      (<img src={next} alt="flecha derecha" className="imgPg" 
      onClick={() =>changePagesCh(pages + 1)}/>)}
      
    </div>
  )
}

export default Pagination
