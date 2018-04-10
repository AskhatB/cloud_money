import React, { Component } from 'react'
import cn from 'cn-decorator'

@cn('price')
class Price extends Component {
	render(cn){
		return(
			<div className={ cn() }>
				<div className={ cn('new') }>{this.props.price} ₸</div>
				<div className={ cn('old') }>{this.props.priceOld} ₸</div>
			</div>
		)
	}
}

export default Price