import React, {useState} from 'react'
import './Pagination.css'
const PaginationLock = ({pages}) => {
  const [pageslc, setPageslc] = useState(1)
  

  const changePagesLc = (newPage) =>{
    pages(newPage)
    setPageslc(newPage)
  }
  const back = "https://res.cloudinary.com/dsmdcnoys/image/upload/v1643409732/Varios/Izquierda_jw57bi.png";
  const next = "https://res.cloudinary.com/dsmdcnoys/image/upload/v1643410248/Varios/Derecha_iarlz2.png";
;  return (
    <div className="pagin">
    {(pageslc > 1) &&
    (<img src={back} alt="Flecha izquierda" className="imgPg" 
    onClick={() =>changePagesLc(pageslc - 1)}/>)}
      
      <span>Página {pageslc}</span>
     {(pageslc < 7) && (<img src={next} alt="flecha derecha" className="imgPg"
     onClick={() =>changePagesLc(pageslc + 1)}/>)} 
    </div>
  )
}
export default PaginationLock

