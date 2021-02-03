import React from 'react';
import {Link} from 'react-router-dom';
import './StoreList.css';
import * as Config from '../../baseURL';

const StoreList = (props) =>{
  return(
    <div className="shop-list">
      <div className='shop-image'>
        <figure>
          <img src={Config.BaseURL+props.store.store_image} alt={props.store.name}/>
          <figcaption>
            <Link to={'/store/'+ props.store.id }>View details</Link>
          </figcaption>
        </figure>
      </div>
      <div className='shop-details'>
        <h6>{props.store.name}</h6>
        <p><i className='fa fa-map-marker mr-1'></i> <span>{props.store.address}</span></p>
      </div>
    </div>
  )
}

export default StoreList;
