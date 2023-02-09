import * as React from 'react'

import '../Btn.scss'
import { IButton } from '../InterfaceButton'

const BtnDefault: React.FunctionComponent<IButton> = ({
	handleFunction,
	children
}) => {
	return (
		<button type="button" onClick={handleFunction} className="btn default">
			{children}
		</button>
	)
}

export default BtnDefault
