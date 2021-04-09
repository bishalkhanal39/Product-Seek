import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = (props) => {
    return (
        <>
            <li className="btn-primary mb-4"><Link to={'/category/' + props.category.id}>{props.category.name}</Link></li>      
        </>
    )
}

export default CategoryList;
