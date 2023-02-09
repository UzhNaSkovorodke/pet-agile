import * as React from 'react'

import Footer from '../modules/Footer'
import KanbanBoard from '../modules/KanbanBoard'
import Navigation from '../modules/Navigation'

interface IKanbanTempProps {}

const KanbanTemp: React.FunctionComponent<IKanbanTempProps> = (props) => {
	return (
		<div>
			<Navigation />
			<KanbanBoard />
			<Footer />
		</div>
	)
}

export default KanbanTemp
