import React,{Component} from 'react';
import StoreList from '../../components/Store/StoreList';
import axios from '../../axios';

class Stores extends Component{
  state={
    Stores:[],
    loading:true,
  }

  loadStore = () =>{
    axios.get('/stores').then(response=>{
      const stores = response.data
      this.setState({
        Stores:stores,
        loading:false,
      })
    }).catch()
  }

  componentDidMount(){
    this.loadStore();
  }

  render(){
    return(
      <div className="container pt-4">
        <h3 className="text-center">Stores<hr/></h3>
        {this.state.loading? <p className="text-center">Loading...</p>: ""}
        <div className="row">
          {this.state.Stores.map(store=>{
            return (<div className="col-md-3" key={store.id}>
                {<StoreList  store={store}  />}
              </div>
            )}
          )}
        </div> 
      </div>
    )
  }
}

export default Stores;