import React from 'react';
import * as config from '../../baseURL';

const ProductList =(props)=>{
  return(
    <tr>
    <td>
      <figure className="wishlist-image">
        <img src={config.BaseURL+(props.product.product_image[0])} alt=""/>
      </figure>
    </td>
    <td>{props.product.title}</td>
    <td>{props.product.product_category[0].name}</td>
    <td>{props.product.product_store[0].name}</td>
    <td>
      <button className="btn btn-danger remove" disabled={props.loading?true:false} onClick={props.clicked}><i className="fas fa-times mr-1"></i>Remove</button>
    </td>
  </tr>
  )
}

export default ProductList;