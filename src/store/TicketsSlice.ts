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
    {id: 1, title: 'Сделать систему', description: 'Делаю систему авторизации', type: 'backlog'},
    {id: 2, title: 'Делаю систему', description: 'Делаю систему авторизации', type: 'process'},
    {id: 3, title: 'Сделал систему', description: 'Делаю систему авторизации', type: 'done'}
  ]
};
export const TicketsSlice = createSlice({
  name: 'TicketSlice',
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
