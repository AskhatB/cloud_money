import React from 'react'
import Preview from '../assets/img/preview_samsung.jpg'
import ToolBox from '../components/CommonElements/ToolBox'
import Price from '../components/CommonElements/Price'

const ProductList = (props) => {
	return(
		<div className="product-list fl">
			<div className="w-20 h-100 product-list__preview fl fl-c fl-aic">
				<img src={Preview} className="product-list__preview-img w-80"/>
			</div>
			<div className="w-60 product-list_general-info">
				<div className="product-list_general-info_name fs18 fw700">{props.name}</div>
				<div className="product-list_general-info_code fs12">Код товара: {props.code}</div>
				<div className="product-list_general-info_crumbs fs12">Телефоны планшеты > Сотовые телефоны > Смартфоны</div>
				<div className="product-list_general-info_status fs14 fl fl-aic">
					<i className="icon_mark"></i>
					<div>Есть в наличии {props.amount} шт.</div>
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
				<Price price={props.price} priceOld={props.priceOld}/>
			</div>
		</div>
	)
}

export default ProductList