import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import ITicket from './interface/ITicket'

export interface TicketState {
	name: string
	backlogTickets: Array<ITicket>
	processTickets: Array<ITicket>
	doneTickets: Array<ITicket>
}

const initialState: TicketState = {
	name: 'tickets',
	backlogTickets: [
		{ id: 1, text: 'сделать систему' },
		{ id: 2, text: 'сделать scrum' }
	],
	processTickets: [
		{ id: 1, text: 'сделать систему' },
		{ id: 2, text: 'сделать scrum' }
	],
	doneTickets: [
		{ id: 1, text: 'сделать систему' },
		{ id: 2, text: 'сделать scrum' }
	]
}
export const TicketsSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.name = 'name2'
		}
	}
})
export const { increment } = TicketsSlice.actions

export default TicketsSlice.reducer
