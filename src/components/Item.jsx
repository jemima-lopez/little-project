
import React from 'react'

const Item = ({product}) => {
  return (
    <div className='product'>
      <img alt={product.imagen} />
      <div>
        <h4>{product.titulo}</h4>
        <p>Precio: {product.precio}</p>
        <p>Categoria: {product.categoria}</p>
        <a className='see-more' href={`/item/${product.id}`}>See more</a>
      </div>
    </div>
  )
}

export default Item