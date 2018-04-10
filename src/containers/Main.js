import React, { Component } from 'react'
import ProductList from '../components/ProductList'

class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			productName: 'Смартфон Samsung Galaxy S9',
			productCode: '69391',
			productAmount: 189,
			productPrice: 339990,
			productPriceOld: 419990
		}
	}
	render(){
		return(
			<div className="main">
				<ProductList 
					name={this.state.productName} 
					code={this.state.productCode} 
					amount={this.state.productAmount}
					price={this.state.productPrice}
					priceOld={this.state.productPriceOld}
				/>
			</div>
		)
	}
}

export default Main