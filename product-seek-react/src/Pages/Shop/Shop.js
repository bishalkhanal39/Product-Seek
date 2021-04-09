import React,{Component} from 'react';
import StoreList from '../../components/Store/StoreList';
import axios from '../../axios';

class Shops extends Component{
    render(){
        return(
          <div className="container pt-4">
            <h3 className="text-center"style={{fontWeight:"1000"}}>Shops<hr/></h3>
            {this.state.loading? <p className="text-center">Loading...</p>: ""}
            <div className="row">
              <p>This is shop list</p>
              
            </div>
          </div>
        )
      }
}
export default Shops;