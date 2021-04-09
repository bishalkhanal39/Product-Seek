// import Axios from 'axios';
import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import * as config from '../../../baseURL';
import axios from '../../../axios';
import './CategoryDetail.css';
import ProductList from '../../../components/Product/ProductList';

class CategoryDetail extends Component{
  state={
    category:{},
    loading:true,
    category_products:[],
  }

  loadCategory=()=>{
    axios.get('/categories/show/'+this.props.match.params.id).then(response=>{
      this.setState({
        category:response.data,
        loading:false,
        category_products:response.data.Categoryproduct
      })
    })
  }

  componentDidMount(){
    this.loadCategory();
  }

  render(){
    return(
      <div className="container pt-4">
          <div className="col-md-12  pt-3">
              <h4 className="text-center"style={{fontWeight:"1000"}}>{this.state.category.name} Products <hr/></h4>
              
          

             <div className="row pt-3">
                 {this.state.category_products.map(item=>{
                return(
                  <div className="col-md-3" key={item.id}>
                     <ProductList product={item}  key={item.id}  />
                  </div>
                )
              })}
             
               {this.state.category_products.length?"": 
              <div className="col-md-12">
                <h5 className="text-center">Sorry no products found!!</h5>
              </div>
              }
            </div>
          </div>
        </div>
      )
    }
  }

  export default CategoryDetail;