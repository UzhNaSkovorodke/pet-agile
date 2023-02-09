import * as React from 'react'

import KanbanTemp from '../templates/KanbanTemp'

interface IKanbanProps {}

const Kanban: React.FunctionComponent<IKanbanProps> = (props) => {
	return (
		<div>
			<KanbanTemp />
		</div>
	)
}

export default Kanban
