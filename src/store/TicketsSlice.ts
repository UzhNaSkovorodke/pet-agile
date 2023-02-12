import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import ITicket from './interface/ITicket';

export interface TicketState {
  name: string;
  backlogTickets: Array<ITicket>;
  processTickets: Array<ITicket>;
  doneTickets: Array<ITicket>;
}

const initialState: TicketState = {
  name: 'tickets',
  backlogTickets: [
    {id: 1, text: 'сделать систему'},
    {id: 2, text: 'сделать scrum'}
  ],
  processTickets: [
    {id: 1, text: 'сделать систему'},
    {id: 2, text: 'сделать scrum'}
  ],
  doneTickets: [
    {id: 1, text: 'сделать систему'},
    {id: 2, text: 'сделать scrum'}
  ]
};
export const TicketsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addBacklogTicket: (state, action: PayloadAction<ITicket>) => {
      state.backlogTickets.push(action.payload);
    },
    addProcessTicket: (state, action: PayloadAction<ITicket>) => {
      state.processTickets.push(action.payload);
    },
    addDoneTicket: (state, action: PayloadAction<ITicket>) => {
      state.doneTickets.push(action.payload);
    }
  }
});
export const {addBacklogTicket, addProcessTicket, addDoneTicket} = TicketsSlice.actions;

export default TicketsSlice.reducer;
