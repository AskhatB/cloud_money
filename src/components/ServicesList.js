import React from 'react'
import ToolBox from '../components/CommonElements/ToolBox'
import Price from '../components/CommonElements/Price'

const ServicesList = (props) => {
	return(
		<div className="service-list fl">
			<div className="w-80 service-list_general-info">
				<div className="service-list_general-info_name fs18 fw700">{props.name}</div>
				<div className="service-list_general-info_code fs12">Код услуги: {props.code}</div>
				<div className="service-list_general-info_dur fs16 fl fl-sb"><div>Длительность:</div> <div>{props.dur} минут</div></div>
				<div className="service-list_general-info_buy fs16 fl fl-sb"><div>Купили: </div><div>{props.buy} человек</div></div>
			</div>
			<div className="w-20 service-list__additional-info fl fl-dc fl-aife">
				<ToolBox />
				<Price price={props.price} priceOld={props.priceOld}/>
			</div>
		</div>
	)
}

export default ServicesList