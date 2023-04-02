import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import ITicket from '../interface/ITicket';

export interface TicketState {
  name: string;
  ticketsList: Array<ITicket>;
}
function idCreator() {
  return Date.now() + Math.random();
}

const initialState: TicketState = {
  name: 'ticketList',
  ticketsList: [
    {
      id: idCreator(),
      title: 'Взял таску с мелким багом',
      description: 'Мы обнаружили вчера баг с json файлом и я уже работаю над багфиксом',
      type: 'process',
      tags: ['Bugfix']
    },
    {
      id: idCreator(),
      title: 'Сделал форму',
      description: 'Сделал новую формочку, чтобы было легче указывать обратные данные пользователя при бронировании',
      type: 'done',
      tags: ['product', 'develop']
    }
  ]
};
export const ticketLisSlice = createSlice({
  name: 'ticketLisSlice',
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
export const {addTicket, deleteTicket} = ticketLisSlice.actions;

export default ticketLisSlice.reducer;
