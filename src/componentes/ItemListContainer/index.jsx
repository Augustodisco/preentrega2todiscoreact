import React, {useState, useEffect}from "react";
import Titulo from "../Titulo/titulo";
import ContItem from "../Contitem";
import ItemList from "../Itemlist";

const computadoras = [
  {id : 1, imagen: "https://mla-s1-p.mlstatic.com/733059-MLA43909544585_102020-F.jpg", elemento: "computadora",
  modelo : "Lenovo IdeaPad i5"},
  {id : 2, imagen: "https://mla-s1-p.mlstatic.com/934611-MLA49402721830_032022-F.jpg", elemento: "computadora",
  modelo : "Leonovo ThinkBook g2"},
  {id : 3, imagen: "https://http2.mlstatic.com/D_NQ_NP_867587-MLA48849850726_012022-O.jpg", elemento: "computadora",
  modelo : "Hp 14240"},
  {id : 4, imagen: "https://http2.mlstatic.com/D_NQ_NP_875688-MLA52317212528_112022-V.jpg", elemento: "computadora",
  modelo : "Hp 45678 con procesador Intel Celeron"},
  {id : 5, imagen: "https://ar.celulares.com/fotos/samsung-galaxy-j5-2016-54426-g-alt.jpg", elemento: "celular",
  modelo : "Samsung Galaxy j5"},
  {id : 6, imagen: "https://http2.mlstatic.com/D_NQ_NP_636916-MLA54106065215_032023-V.jpg", elemento: "celular",
  modelo : "Samsung Galaxy j6 Prime"},
  {id : 7, imagen: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/517eAVjANqL.jpg", elemento: "celular",
  modelo : "Huawei y9"},
  {id : 8, imagen: "https://http2.mlstatic.com/D_NQ_NP_803511-MLA48792114059_012022-O.jpg", elemento: "celular",
  modelo : "Xiaomi Redmi Note 9"},
  

  
];






export const ItemListContainer = () => {
  const  [data,setData] = useState([]);
  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} articulos`);
  
  }
  
  return(
    <>
      <Titulo/>
      <ContItem initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data}/>
        
      </>
    );


} 

export default ItemListContainer;