import React from 'react';
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div className="col-md-3" style={{ flex: "0 0 25%", maxWidth: "25%" }}>

      <div className='product-list'>
        <div className='product-image'>
          <figure>
            <img src={props.src} alt={props.fullname} />
            <Link className='store' to={'/profile/' + props.id} title="view profile">
              <i className=' mr-1'></i> {props.fullname}
            </Link>
          </figure>
        </div>
        <div className="product-details">
          <h5 className="text-center" >{props.fullname}</h5>

          <p className="price">{props.level}</p>
        </div>
      </div>
    </div>
  )
}
export default CardItem;