import React, { useState } from 'react'
import { getData } from '../helpers/getData';
import { useEffect } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() => {
      getData()
            .then((res) => {
                setProducts(res)
            })
    }, [])
    

  return (
    <div>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer