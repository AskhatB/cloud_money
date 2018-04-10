import React from 'react'

const Price = (props) => {
	return(
		<div className="price fl fl-dc fl-aife">
			<div className="fs16">{props.price} ₸</div>
			<div className="price-old fs12">{props.priceOld} ₸</div>
		</div>
	)
}

export default Price