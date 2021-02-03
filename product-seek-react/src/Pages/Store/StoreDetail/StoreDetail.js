import Axios from 'axios';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as config from '../../../baseURL';
import axios from '../../../axios';
import './StoreDetail.css';
import ProductList from '../../../components/Product/ProductList';

class StoreDetail extends Component{
  state={
    store:{},
    loading:true,
    store_followers:[],
    store_products:[],
  }

  loadStore=()=>{
    axios.get('/stores/show/'+this.props.match.params.id).then(response=>{
      this.setState({
        store:response.data,
        loading:false,
        store_followers:response.data.followers,
        store_products:response.data.Storeproduct,
      })
    })
  }


  storeFollowed=(followers,userId)=>{
    if(followers.indexOf(userId)==-1){
      return false;
    }
    return true;
  }

  followStore=()=>{
    const followDetails={
      user_id:this.props.user.id,
      store_id:this.state.store.id
    }
    axios.post('/store/follow',followDetails).then(()=>{
      this.loadStore();
    });
  }

  unfollowStore=()=>{
    const followDetails={
      user_id:this.props.user.id,
      store_id:this.state.store.id
    }
    axios.post('/store/unfollow',followDetails).then(()=>{
      this.loadStore();
    });
  }

  componentDidMount(){
    this.loadStore();
  }

  render(){
    return(
      <div className="container pt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 ">
            <h3 className='text-center'>{this.state.store.name}<hr className='hr'/></h3>
            <div className="store-detail-image">
              <img src={config.BaseURL+this.state.store.store_image} alt=""/>
              <div className='store-location'>
                <i className='fas fa-map-marker-alt mr-1'></i> 
                <a href={this.state.store.google_maps_url} target='_blank'>{this.state.store.address}</a>
              </div>
            </div>
            <div className='col-md-12 pt-3'>

              {this.props.authenticated?
                this.storeFollowed(this.state.store_followers,this.props.user.id)?
                <button className='btn btn-danger follower mr-2' onClick={this.unfollowStore}>
                  unFollow</button>
                : 
                <button className='btn btn-primary follower mr-2' onClick={this.followStore}>
                  Follow</button>
                   : ""
              }
              
              <span className='btn btn-primary follower mr-2'>{this.state.store_followers.length} Followers</span>
            </div>

            <div className="col-md-12 pt-3">
              <h5 className="text-center">Store information <hr/></h5>
                <ul className="store-detail-list ">
                  <li><span>Contact : </span><a href={"tel:"+(this.state.store.contact)}>{this.state.store.contact}</a></li>
                  <li><span>Email : </span><a href={"mailto:"+(this.state.store.email)}>{this.state.store.email}</a></li>
                </ul> 
            </div>
          </div>
          </div>

          <div className="col-md-12  pt-3">
            
              <h4 className="text-center">Store Products <hr/></h4>
              
          

            <div className="row pt-3">
              {this.state.store_products.map(product=>{
                return(
                  <div className="col-md-3" key={product.id}>
                     <ProductList product={product}  key={product.id}  />
                  </div>
                )
              })}
              {this.state.store_products.length?"": 
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
  const mapStateToProps= state=>{
    return{
      authenticated:state.auth.authenticated,
      user:state.auth.user,
    }
  }

  export default connect(mapStateToProps)(StoreDetail);