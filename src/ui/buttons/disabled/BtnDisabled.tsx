import * as React from 'react'

import '../Btn.scss'
import { IButton } from '../InterfaceButton'

const BtnDisabled: React.FunctionComponent<IButton> = ({
	children,
	handleFunction
}) => {
	return (
		<button type="button" onClick={handleFunction} className="btn disabled">
			{children}
		</button>
	)
}

export default BtnDisabled
