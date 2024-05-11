import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ReletedProducts from '../Components/ReletedProducts/ReletedProducts';

const Product = () => {
  const {all_product} =  useContext(HomeContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <ReletedProducts/>
    </div>
  )
}

export default Product
