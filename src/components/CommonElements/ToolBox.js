import React, { Component } from 'react'
import cn from 'cn-decorator'

@cn('tool-box')
class ToolBox extends Component {
	render(cn){
		return(
			<div className={ cn() }>
				<i className="icon_eye pointer"></i>
				<i className="icon_pen pointer"></i>
				<i className="icon_trash pointer"></i>
			</div>
		)
	}
}

export default ToolBox