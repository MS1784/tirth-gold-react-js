import React, { useEffect, useState } from 'react'
import './ReletedProducts.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'

const ReletedProducts = () => {

  const [data_product, setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/relatedproducts')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default ReletedProducts
