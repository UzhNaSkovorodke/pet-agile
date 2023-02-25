import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import ITicket from '../interface/ITicket';

export interface TicketState {
  name: string;
  ticketsList: Array<ITicket>;
}
function idCreator() {
  return Date.now() + Math.random() * 2;
}

const initialState: TicketState = {
  name: 'ticketList',
  ticketsList: [
    {
      id: idCreator(),
      title: 'Сделать систему авторизации',
      description:
        'Установить node js, написать rest api, а потом сделать jwt авторизацию через jwt токены. Авторизация через сессии не канает...',
      type: 'backlog',
      tags: ['Backend', 'Node']
    },
    {
      id: idCreator(),
      title: 'Делаю ревью',
      description:
        'Тут сами знаете какой джун обнаружил конфликты, когда пытался закоммитить последний багфикс. Он попросил помочь ему с этим и глянуть что да как',
      type: 'process',
      tags: ['Codereview', 'Develop']
    },
    {id: idCreator(), title: 'Сделал систему', description: 'Делаю систему авторизации', type: 'done', tags: ['product', 'develop']}
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
