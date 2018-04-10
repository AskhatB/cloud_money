import React, { Component } from 'react'
import ProductList from '../components/ProductList'
import ServicesList from '../components/ServicesList'
import cn from 'cn-decorator'

@cn('main')
class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			product:{
				productName: 'Смартфон Samsung Galaxy S9',
				productCode: 69391,
				productAmount: 189,
				productPrice: 339990,
				productPriceOld: 419990
			},
			service:{
				serviceName:'Мужская barber стрижка, уладка и мытье головы',
				serviceCode: 69391,
				serviceDur: 40,
				serviceBuy: 0,
				servicePrice: 3399,
				servicePriceOld: 4199
			}
		}
	}
	render(cn){
		return(
			<div className={cn()}>
				<ProductList 
					name={this.state.product.productName} 
					code={this.state.product.productCode} 
					amount={this.state.product.productAmount}
					price={this.state.product.productPrice}
					priceOld={this.state.product.productPriceOld}
				/>
				<ServicesList 
					name={this.state.service.serviceName}
					code={this.state.service.serviceCode}
					dur={this.state.service.serviceDur}
					buy={this.state.service.serviceBuy}
					price={this.state.service.servicePrice}
					priceOld={this.state.service.servicePriceOld}
				/>
			</div>
		)
	}
}

export default Main