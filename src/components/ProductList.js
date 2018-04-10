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
				<div className={ cn('preview') }>
					<img src={Preview} className={ cn('preview-img') }/>
				</div>
				<div className={ cn('general-info') }>
					<div className={ cn('general-info_name') }>{this.props.name}</div>
					<div className={ cn('general-info_code') }>Код товара: {this.props.code}</div>
					<div className={ cn('general-info_crumbs') }>Телефоны планшеты > Сотовые телефоны > Смартфоны</div>
					<div className={ cn('general-info_status') }>
						<i className="icon_mark"></i>
						<div>Есть в наличии {this.props.amount} шт.</div>
					</div>
				</div>
				<div className={ cn('additional-info') } >
					<ToolBox />
					<div className={ cn('rating') } >
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