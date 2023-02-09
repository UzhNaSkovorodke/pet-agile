import * as React from 'react'

import '../Btn.scss'
import { IButton } from '../InterfaceButton'

const BtnPrimary: React.FunctionComponent<IButton> = ({
	handleFunction,
	children
}) => {
	return (
		<button type="button" onClick={handleFunction} className="btn primary">
			{children}
		</button>
	)
}

export default BtnPrimary
