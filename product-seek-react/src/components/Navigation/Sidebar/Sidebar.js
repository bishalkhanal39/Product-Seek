import React, { Component } from "react";
// import CategoryList from "../../Category/CategoryList";
import axios from '../../../axios';
import ProductList from "../../Product/ProductList";
// import CategoryList from "../../Category/CategoryList";

class Sidebar extends Component {

    state = {
        Categories: [],
        Stores: [],
        Selected: false,
        search_term: '',
    }
    loadStore = () => {
        axios.get('/stores').then(response => {
            const stores = response.data
            this.setState({
                Stores: stores,
            })
        }).catch()
    }
    loadSearch = () => {
        axios.get('/products/search/' + this.props.match.params.search_term).then(response => {
            const products = response.data;
            this.setState({
                products: products,
                loading: false,
            })
        })
    }
    loadSearchTerm=(event)=>{
        axios.post('/search/create').then(response=>{
            const search_term=(event)=>{
                event.preventDefault();
                this.setState({
                  search_term:this.state.search_term,
                  user_id:this.state.target.user_id,
                })}
        })
    }
    loadSearch = () => {
        axios.get('/products/search/' + this.props.match.params.search_term).then(response => {
            const products = response.data;
            this.setState({
                products: products,
                loading: false,
            })
        })
    }
    loadCategory = () => {
        axios.get('/categories').then(response => {
            const categories = response.data
            this.setState({
                Categories: categories,
            })
        }).catch()
    }
// search=(data)=>{
//     axios.post('/search/create',  {
//         search_term: data
//     }).then(res=>{
//         console.log(res.status);
//     })
// }
    componentDidMount() {
        this.loadCategory();
        this.loadStore();
    }

    render(props) {
        return (
            <div className="container pt-4">
                <h5>Filter Terms</h5>
                <hr className="mb-2" />
                <form className="form-inline align-text-bottom offset-sm-5">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                        // onChange={(e)=>this.search(e.target.value)} 
                    />
                </form>
                <div className="row">
                    <div className="column" style={{ width: "33.33%", float: "left", padding: "10px" }}>
                        <h5><u>Searched Terms</u></h5>
                        {this.state.Categories.map(search => {
                            return (<h6 className="mb-1" style={{ fontWeigth: "200px" }} key={search.id}>
                                <input type="checkbox" value={search.name} className="mr-1" />
                                <span>{search.name}</span>
                            </h6>
                            )
                        }
                        )}
                    </div>
                    <div className="column" style={{ width: "33.33%", float: "left", padding: "10px" }}>
                        <h5><u>Categories</u></h5>
                        {this.state.Categories.map(category => {
                            return (<h6 className="mb-1" style={{ fontWeigth: "200px" }} key={category.id}>
                                <input type="checkbox" value={category.name} className="mr-1" />
                                <span>{category.name}</span>
                            </h6>
                            )
                        }
                        )}
                    </div>
                    <div className="column" style={{ width: "33.33%", float: "left", padding: "10px" }}>
                        <h5><u>Stores</u></h5>
                        {this.state.Stores.map(store => {
                            return (<h6 className="mb-1" key={store.id}>
                                <input type="checkbox" value={store.name} className="mr-1" />
                                <span>{store.name}</span>
                            </h6>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar;