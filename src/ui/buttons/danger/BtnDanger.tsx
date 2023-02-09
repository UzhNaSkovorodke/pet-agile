import * as React from 'react'

import '../Btn.scss'
import { IButton } from '../InterfaceButton'

const BtnDanger: React.FunctionComponent<IButton> = ({
	children,
	handleFunction
}) => {
	return (
		<button type="button" onClick={handleFunction} className="btn danger">
			{children}
		</button>
	)
}

export default BtnDanger
