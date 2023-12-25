import React, { Component } from 'react'
import ProductService from '../js/ProductService';
import Header from './Header';
import Footer from './Footer';
import './crudCss/crud.css';

class CrudProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
                product: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct= this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id)
        .then( res => {
            this.setState({
            product: this.state.product.filter(product => product.id !== id)
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    viewProduct(id){
        this.props.history.push(`/view-product/${id}`);
    }

    editProduct(id){
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ product: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
    }

    render() {
        return (
            <div>
                <div className='header-crud'>
                 <Header></Header>

                 <h2 style={{textAlign: "center", paddingTop: "30px"}} className="text-center">List Products</h2>

                    <button style={{position:"relative", left: "180px", width:"132px", backgroundColor:"#2962ff", cursor:"pointer", borderRadius:"6px", border: 'none'}}
                        className="btn btn-primary" onClick={this.addProduct}> 
                     <h3 style={{fontSize:"20px", top:"6px", position:"relative", color:"#fff"}}>Add Product</h3>
                    </button>
                 </div>     
                 <br></br>
                 <div className = "row table-container">
                        <table className = "table table-striped table-bordered" style={{right: "166px", position:"relative"}}>

                            <thead>
                                <tr>  
                                    <th style={{textAlign: "center", width: "100px"}}> Product name </th>
                                    <th style={{textAlign: "center"}}> brand </th>
                                    <th style={{textAlign: "center"}}> material</th>
                                    <th style={{textAlign: "center"}}> length</th>
                                    <th style={{textAlign: "center"}}> makeStyle</th>
                                    <th style={{textAlign: "center"}}> color</th>
                                    <th style={{textAlign: "center"}}> expiry</th>
                                    <th style={{textAlign: "center"}}> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.product.map(
                                            product => 
                                        <tr key = {product.id}>
                                             <td> {product.name} </td>  
                                             <td> {product.brand} </td>  
                                             <td> {product.material} </td>   
                                             <td> {product.length} </td>   
                                             <td> {product.makeStyle} </td>   
                                             <td> {product.color} </td>   
                                             <td> {product.expiry} </td>   

                                             <td>
                                                 <button style={{marginLeft:"40px", padding: '10px', position:"relative", top:"22px", width:"120px"}} onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft:"200px",padding: '10px', position:"relative", bottom:"19px", width:"120px"}} onClick={ () => this.deleteProduct(product.id)} className="r">Delete </button>
                                                 {/* <button style={{padding: '15px'}} onClick={ () => this.viewProduct(product.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
                 
                 <Footer></Footer>     

            </div>

        )
    }
}

export default CrudProduct