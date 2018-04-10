import React, { Component } from 'react'
import Preview from '../assets/img/preview_samsung.jpg'
import ToolBox from '../components/CommonElements/ToolBox'
import Price from '../components/CommonElements/Price'
import cn from 'cn-decorator'


@cn('product-list')
class ProductList extends Component{
	constructor(props){
		super(props)
	}
	render(cn){
		return(
			<div className={ cn() }>
				<div className={"w-20 h-100" + cn('preview') + "fl fl-c fl-aic"}>
					<img src={Preview} className="product-list__preview-img w-80"/>
				</div>
				<div className="w-60 product-list_general-info">
					<div className="product-list_general-info_name fs18 fw700">{this.props.name}</div>
					<div className="product-list_general-info_code fs12">Код товара: {this.props.code}</div>
					<div className="product-list_general-info_crumbs fs12">Телефоны планшеты > Сотовые телефоны > Смартфоны</div>
					<div className="product-list_general-info_status fs14 fl fl-aic">
						<i className="icon_mark"></i>
						<div>Есть в наличии {this.props.amount} шт.</div>
					</div>
				</div>
				<div className="w-20 product-list__additional-info fl fl-dc fl-aife">
					<ToolBox />
					<div className="product-list__rating fl fl-sb">
						<i className="icon_star"></i>
						<i className="icon_star"></i>
						<i className="icon_star"></i>
						<i className="icon_star"></i>
						<i className="icon_star"></i>
					</div>
					<Price price={this.props.price} priceOld={this.props.priceOld}/>
				</div>
			</div>
		)
	}
}

export default ProductList