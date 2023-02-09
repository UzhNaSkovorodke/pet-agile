import * as React from 'react'

import '../Btn.scss'
import { IButton } from '../InterfaceButton'

const BtnSuccess: React.FunctionComponent<IButton> = ({
	children,
	handleFunction
}) => {
	return (
		<button type="button" onClick={handleFunction} className="btn success">
			{children}
		</button>
	)
}

export default BtnSuccess
