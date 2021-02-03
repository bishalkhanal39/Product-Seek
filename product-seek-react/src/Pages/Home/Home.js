import React,{Component} from 'react';
import ProductList from '../../components/Product/ProductList';
import axios from '../../axios';

class Home extends Component{
  state={
    products:[],
    loading:true,
  }

  loadProducts = ()=>{
    axios.get('/products').then(response=>{
      const products = response.data;
      this.setState({  
       products:products,
       loading:false,
      })
    })
  }
  componentDidMount(){
    this.loadProducts();
  }

  render(){
    return(
      <div className='pt-4'>
        <div className='container'>
        <h3 className="text-center">Our latest Products<hr/></h3>
        {this.state.loading? <p className="text-center">Loading...</p>: ""}
          <div className='row'>
            {this.state.products.map(product=>{
                return (
                  <div className='col-md-3'  key={product.id}>
                    <ProductList  product={product} />
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

export default Home;