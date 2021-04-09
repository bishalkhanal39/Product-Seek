import React,{Component} from 'react';
import CategoryList from '../../components/Category/CategoryList';
import axios from '../../axios';

class Categories extends Component{
  state={
    Categories:[],
    loading:true,
  }

  loadCategory = () =>{
    axios.get('/categories').then(response=>{
      const categories = response.data
      this.setState({
        Categories:categories,
        loading:false,
      })
    }).catch()
  }

  componentDidMount(){
    this.loadCategory();
  }

  render(){
    return(
      <div className="container pt-4">
        <h3 className="text-center"style={{fontWeight:"1000"}}>We have these Categories<hr/></h3>
        {this.state.loading? <p className="text-center">Loading...</p>: ""}
        <div className="text-center">
            <ol type="1">
          {this.state.Categories.map(category=>{
            return (<div key={category.id}>
                {<CategoryList  category={category}  />}
                </div>
            )}
          )}
          </ol>
        </div> 
      </div>
    )
  }
}

export default Categories;