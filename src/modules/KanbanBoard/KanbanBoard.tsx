import * as React from 'react'

import './KanbanBoard.scss'
import backlogList from './backlogHelper'
import doneList from './doneHelper'
import progressList from './progressHelper'

interface IKanbanBoardProps {}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = (props) => {
	return (
		<div className="kanbanWrapper">
			<div className="kanban">
				<div className="kanban__header">
					<div className="kanban__header__title">В плане</div>
					<div className="kanban__header__title">В прогрессе</div>
					<div className="kanban__header__title">Сделано</div>
				</div>
				<div className="kanban__body">
					<div className="kanban__body__backlog kanban__body__element">
						{backlogList.map((item: any) => (
							<div className="ticket" key={item.id}>
								{item.text}
							</div>
						))}
					</div>
					<div className="kanban__body__progress kanban__body__element">
						{progressList.map((item: any) => (
							<div className="ticket" key={item.id}>
								{item.text}
							</div>
						))}
					</div>
					<div className="kanban__body__done kanban__body__element">
						{doneList.map((item: any) => (
							<div className="ticket" key={item.id}>
								{item.text}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default KanbanBoard
