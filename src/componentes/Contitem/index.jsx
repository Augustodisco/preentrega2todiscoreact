import './contitem.css';
import React,{ useState, useEffect } from 'react';

export const ContItem = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const aumentar = () => {
      setCount(count + 1);
    }

    const decrementar = () => {
      setCount(count - 1);
    } 
    
    useEffect(() => {
      setCount(parseInt(initial));

    }, [initial])

    return(
      <div className='contador'>
        <button disabled={count <= 1} onClick={decrementar}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={aumentar}>+</button>
        <div>
          <button disabled={stock <= 0} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
      </div>
    );
}

export default ContItem;

