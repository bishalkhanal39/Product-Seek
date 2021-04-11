import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import ProductList from './ProductList';
class SingleProduct extends Component {
    state = {
        singleProduct: {},
        product_category: {},
        product_store: {},
        loading: true,
        products: {}
    }
    loadMightLike = () => {
        axios.get('/products/might_like').then(response => {
            const products = response.data;
            this.setState({
                products: products,
                loading: false,
            })
        })
    }

    loadSingleProduct = () => {
        axios.get('/product/' + this.props.match.params.id).then(response => {
            this.setState({
                singleProduct: response.data,
                product_category: response.data.product_category,
                product_store: response.data.product_store,
                loading: false
            })
        }).catch()
    }
    componentDidMount() {
        this.loadSingleProduct();
        this.loadMightLike();
    }
    render() {
        let data;
        if (this.state.loading) {
            data = <div className="container mt-4"><p>Loading...</p></div>
        } else {
            data = <div className="container">
                <div className="row mt-4">
                    <div className="col-4 mb-3">
                        <div className="card">
                            <img src={'this.state.singleProduct.product_image[0]'} alt="img" />
                            {/* <img src={'http://localhost:8000'+(this.props.product.product_image[0])} alt="" /> */}

                            {/* <img src={'http://localhost:8000/api/product/'+(this.props.product.id)+'/'+ (this.props.product.product_image[0])} className="card-img-top" /> */}
                            <div className="card-body">
                                {/* <img src={this.state.singleProduct.img}/> */}
                                <h5 className="card-title">{this.state.singleProduct.title}</h5>
                                <p className="card-text">Rs. {this.state.singleProduct.price}</p>
                                <p className="card-text">Description: {this.state.singleProduct.description}</p>
                                <p className="card-text">Warrentry: {this.state.singleProduct.warrenty}</p>
                                {/* <p className="card-text">Image: {this.state.singleProduct.product_image}</p> */}
                                {/* <p><Link to={'/category/'+this.state.product_category.id} className="card-text">Category: {this.state.product_category.name}</Link></p> */}
                                {/* <p><Link to={'/category/'+this.state.product_store.id} className="card-text">Store: {this.state.product_store.name}</Link></p> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        return (
            <>
                {data}
                <div className='pt-4'>
                    <div className='container'>
                        <h3 className="text-center" style={{ fontWeight: "1000" }}>
                            You might like
                            <hr />
                        </h3>
                        {this.state.loading?<p className="text-center">Loading...</p>:""}
                        <div className='row'>
                            <div className='col-md-3'>
                            <h1>Might You Like Field</h1>
                            </div>
                            
                            {/* {this.state.products.map((product, key) => { */}
                                {/* return ( */}
                                    {/* <div className='col-md-3'> */}
                                        {/* <ProductList product={product} /> */}
                                    {/* </div> */}
                                {/* ) */}
                            {/* }) */}
                            {/* }  */} 
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default SingleProduct;



// import React ,{Component} from 'react';
// import ProductList from './ProductList';
// import axios from '../../axios';

// class SingleProduct extends Component{
//     state = {
//         product: [],
//         loading: true,
//     }
//     loadProducts() {
//         axios.get('http://localhost:8000/api/product/' + this.props.match.params.id)
//         .then(response => {
//           const product = response.data;
//           this.setState({
//             product: product,
//             loading: false,
//           })
//         })
//       }
//     componentDidMount() {
//         this.loadProducts();
//       }
//     render(){
//         return(
//             <>

//             <ProductList product={this.state.product}/>
//             </>
//         )
//     }
// }
// export default SingleProduct;


// // import React, { Component } from 'react';
// // import {connect} from 'react-redux';
// // import * as action from '../../store/actions/index';
// // import * as actionTypes from '../../store/actions/actionType';
// // import { Link } from 'react-router-dom';
// // import jQuery from 'jquery';
// // import Swal from 'sweetalert2';
// // const Toast = Swal.mixin({
// //     toast: true,
// //     position: 'bottom-end',
// //     showConfirmButton: false,
// //     timer: 3000,
// //     timerProgressBar: true,
// //     onOpen: (toast) => {
// //       toast.addEventListener('mouseenter', Swal.stopTimer)
// //       toast.addEventListener('mouseleave', Swal.resumeTimer)
// //     }
// //   })
// // class SingleProduct extends Component {
// //     constructor() {
// //         super();
// //         this.state = {
// //             singleProduct: '',
// //             loading: true
// //         }
// //     }
// //     componentDidMount() {
// //         fetch('http://localhost:8000/api/product/' + this.props.match.params.id)
// //             .then(response => response.json())
// //             .then(json =>
// //                 this.setState({
// //                     singleProduct: json.data,
// //                     loading: false
// //                 })
// //             );
// //     }
// //     render() {
// //         const openLoginModal = () => {
// //             jQuery('#Login-model').modal('show')
// //         }



// //         const addToWishlist = (userid, productid) => {
// //             this.props.load();
// //             this.props.addToWishlist(userid, productid)
// //         }

// //         const inWishlist = (wishlist, productId) => {
// //             if (wishlist) {
// //                 let wishlistProductIds = [];
// //                 this.props.wishlist.map(wishlist => {
// //                     wishlistProductIds.push(
// //                         wishlist.product.id
// //                     )
// //                     return wishlistProductIds;
// //                 })
// //                 if (wishlistProductIds.indexOf(productId) !== -1) {
// //                     return true;
// //                 }
// //             }
// //             return false;
// //         }


// //         const isInCart = (productID) => {
// //             if (this.props.cartItems.length) {
// //                 let cartProductsIds = []
// //                 this.props.cartItems.map(item => {
// //                     return cartProductsIds.push(item.product.id);

// //                 })

// //                 if (cartProductsIds.indexOf(productID) !== -1) {
// //                     return true
// //                 }
// //             }
// //             return false
// //         }



// //         let data;
// //         if (this.state.loading) {
// //             data = <div className="container mt-4"><p>Loading...</p></div>
// //         } else {
// //             data = <div className="container">
// //                 <div className="row mt-4">
// //                     <div className="col-4 mb-3">
// //                         <div className='product-list'>

// //                             <div className='product-image'>
// //                                 <figure>

// //                                     <img src={'http://localhost:8000' + (this.props.product.product_image[0])} alt="" />
// //                                     <figcaption>

// //                                         <div className='product-cart' title='Add to cart' onClick={this.props.authenticated ?
// //                                             isInCart(this.props.product.id) ?
// //                                                 () => {
// //                                                     Toast.fire({
// //                                                         icon: 'error',
// //                                                         title: 'Item is already in your Cart'
// //                                                     })
// //                                                 }
// //                                                 :
// //                                                 () => {
// //                                                     this.props.addToCart(this.props.product)
// //                                                 }

// //                                             : openLoginModal
// //                                         }>
// //                                             <i className='fas fa-shopping-cart'></i>
// //                                         </div>


// //                                         {this.props.loading ? "" :
// //                                             <div className='product-wishlist' title='Add to wishlist'
// //                                                 onClick={this.props.authenticated ? inWishlist(this.props.wishlist, this.props.product.id) ?
// //                                                     () => {
// //                                                         Toast.fire({
// //                                                             icon: 'error',
// //                                                             title: 'Item is already in your Wishlist'
// //                                                         })
// //                                                     }
// //                                                     : () => {
// //                                                         addToWishlist(this.props.user.id, this.props.product.id)
// //                                                     }
// //                                                     : openLoginModal}>
// //                                                 <i className='fas fa-heart'></i>
// //                                             </div>
// //                                         }


// //                                         <div className='product-wishlist' title='view details'>
// //                                             <i className='far fa-eye'></i>
// //                                         </div>

// //                                     </figcaption>
// //                                     <Link className='store' to={'/store/' + this.props.product.product_store[0].id} title="store">
// //                                         <i className='fas fa-store-alt mr-1'></i> {this.props.product.product_store[0].name}
// //                                     </Link>

// //                                     <div className='category'>
// //                                         <ul>
// //                                             {
// //                                                 this.props.product.product_category.map(cat => {
// //                                                     return (
// //                                                         <li key={cat.id}><Link to={'/category/' + cat.id}  >{cat.name}</Link></li>
// //                                                     )
// //                                                 })
// //                                             }
// //                                         </ul>
// //                                     </div>
// //                                 </figure>
// //                             </div>
// //                             <div className="product-details">
// //                                 <h5 className="text-center" >{this.props.product.title}</h5>

// //                                 <p className="price"><span>Price : </span>Rs {this.props.product.price}</p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             return (
// //                 <>
// //                     {data}
// //                 </>
// //             );
// //         }
// //     }
// // }
// // const mapStateToProps = state => {
// //     return {
// //         wishlist: state.wishlist.wishlist,
// //         authenticated: state.auth.authenticated,
// //         user: state.auth.user,
// //         loading: state.wishlist.loading,
// //         cartItems: state.cart.cartItems,
// //     }
// // }
// // const mapDispatchToProps = dispatch => {
// //     return {
// //         addToWishlist: (userId, productId) => dispatch(action.ADD_TO_WISHLIST(userId, productId)),
// //         load: () => dispatch({ type: actionTypes.WISHLIST_FETCH_START }),
// //         addToCart: (product) => dispatch(action.addToCart(product))
// //     }
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);