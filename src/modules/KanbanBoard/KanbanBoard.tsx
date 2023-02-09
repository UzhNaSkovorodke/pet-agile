import * as React from 'react'

import styles from './KanbanBoard.module.scss'

interface IKanbanBoardProps {}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = (props) => {
	return (
		<div className={styles.kanbanWrapper}>
			<div className={styles.kanbanBoard}>kanban</div>
		</div>
	)
}

export default KanbanBoard
