import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import ITicket from './interface/ITicket';

export interface TicketState {
  name: string;
  ticketsList: Array<ITicket>;
}

const initialState: TicketState = {
  name: 'tickets',
  ticketsList: [
    {id: 1, text: 'сделать систему', type: 'backlog'},
    {id: 2, text: 'сделать scrum', type: 'backlog'},
    {id: 3, text: 'делаю систему', type: 'process'},
    {id: 4, text: 'делаю scrum', type: 'process'},
    {id: 5, text: 'сделал систему', type: 'done'},
    {id: 6, text: 'сделал scrum', type: 'done'}
  ]
};
export const TicketsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<ITicket>) => {
      state.ticketsList.push(action.payload);
    },
    deleteTicket: (state, action: PayloadAction<number>) => {
      state.ticketsList = [...state.ticketsList.filter(ticket => ticket.id !== action.payload)];
    }
  }
});
export const {addTicket, deleteTicket} = TicketsSlice.actions;

export default TicketsSlice.reducer;
