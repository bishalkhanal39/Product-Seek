import React, {Component} from 'react';
import ProductList from '../../components/Product/ProductList';
import axios from '../../axios';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
// import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Home extends Component{
  // const [search_term, setSearch_term]=useState("");
  sidebarHandler = () => {
    const doesShow = this.state.showSidebar;
    console.log(doesShow);
    this.setState({ showSidebar: !doesShow });
    console.log('Was Clicked!');
  }
  showProductsHandler=()=>{
    const doesShow=this.state.showfProducts;
    this.setState({showfProducts:!doesShow});
  }

state = {
    products: [],
    loading: true,
    showSidebar: false,
    showfProducts:false,
    category:{},
    category_products:[],
    store:{},
    store_products:[],
    interest:{}
  }
  // handleChange=(e)=> {
  //   console.log(e.target.value);
  // }

  // async function search(key) {
    // let result= await fetch("http://localhost:8000/api/search"+key);
    // result= result.json();
    // setData(result);
  // }
  loadCategory=()=>{
    axios.get('/categories/show/'+this.props.match.params.id).then(response=>{
      this.setState({
        category:response.data,
        loading:false,
        category_products:response.data.Categoryproduct
      })
    })
  }
  // loadInterest=()=>{

  // }
  loadStore=()=>{
    axios.get('/stores/show/'+this.props.match.params.id).then(response=>{
      this.setState({
        store:response.data,
        loading:false,
        store_products:response.data.Storeproduct,
      })
    })
  }
  loadProducts() {
    axios.get('/products')
    .then(response => {
      const products = response.data;
      this.setState({
        products: products,
        loading: false,
      })
    })
  }
componentDidMount() {
    this.loadProducts();
    this.loadCategory();
    this.loadStore();
  }

  render(){
    return (
      <div className='pt-4'>
        <div className='container'>
          <h3 className="text-center" style={{fontWeight:"1000"}}>

            Our Products
            {/* {this.props.authenticated?
            <>
              
                <button className="nav-link" data-widget="control-sidebar" data-slide="true" title="sidebar">
                <i className="fas fa-th-large" onClick={this.sidebarHandler}></i>
              </button>
              {/* {this.props.user.id} */}
          {/* {(this.state.showSidebar)? 
                <Sidebar/>
               : null}
            </>
            :null} */}
            
            <hr />
          </h3>
          {this.state.loading ? <p className="text-center">Loading...</p> : ""}
          <div className='row'>
            {this.state.products.map((product,key) => {
              return (
                <div className='col-md-3' key={key}>
                  <ProductList product={product} />
                </div>
              )
            })
          }

          </div>
        </div>
      </div>
    )
  }

}
const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Home);