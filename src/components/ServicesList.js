import React, { Component } from 'react'
import ToolBox from '../components/CommonElements/ToolBox'
import Price from '../components/CommonElements/Price'
import cn from 'cn-decorator'

@cn('service-list')
class ServicesList extends Component {
	constructor(props){
		super(props)
	}
	render(cn){
		return(
			<div className={ cn() } >
				<div className={ cn('general-info') }>
					<div className={ cn('general-info_name') }>{this.props.name}</div>
					<div className={ cn('general-info_code') }>Код услуги: {this.props.code}</div>
					<div className={ cn('general-info_dur') }><div>Длительность:</div> <div>{this.props.dur} минут</div></div>
					<div className={ cn('general-info_buy') }><div>Купили: </div><div>{this.props.buy} человек</div></div>
				</div>
				<div className={ cn('additional-info') }>
					<ToolBox />
					<Price price={this.props.price} priceOld={this.props.priceOld}/>
				</div>
			</div>
		)
	}
}

export default ServicesList