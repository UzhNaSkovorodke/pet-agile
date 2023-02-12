import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment } from '../../store/TicketsSlice'
import type { RootState } from '../../store/store'

import './KanbanBoard.scss'

interface IKanbanBoardProps {}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = (props) => {
	const TicketsState = useSelector((state: RootState) => state.tickets)
	const dispatch = useDispatch()

	return (
		<div className="kanbanWrapper">
			<div className="kanban">
				<div className="kanban__header">
					<div className="kanban__header__title title_backlog">В плане</div>
					<div className="kanban__header__title title_process">В прогрессе</div>
					<div className="kanban__header__title title_done">Сделано</div>
				</div>
				<div className="kanban__body">
					<div className="kanban__body__backlog kanban__body__element">
						{TicketsState.backlogTickets.map((item: any) => (
							<div className="ticket" key={item.id}>
								{item.text}
							</div>
						))}
						<div className="ticket ticket_add">+</div>
					</div>
					<div className="kanban__body__progress kanban__body__element">
						{TicketsState.processTickets.map((item: any) => (
							<div className="ticket" key={item.id}>
								{item.text}
							</div>
						))}
						<div className="ticket ticket_add">+</div>
					</div>
					<div className="kanban__body__done kanban__body__element">
						{TicketsState.doneTickets.map((item: any) => (
							<div className="ticket" key={item.id}>
								{item.text}
							</div>
						))}
						<div className="ticket ticket_add">+</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default KanbanBoard
