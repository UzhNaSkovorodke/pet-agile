import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import ITicket from '../interface/ITicket';
import ITicketList from '../interface/ITicketList';

export interface TicketState {
  name: string;
  ticketList: ITicketList[];
}

function idCreator() {
  return Date.now() + Math.random() * 2;
}

const initialState: TicketState = {
  name: 'ticketState',
  ticketList: [
    {
      id: idCreator(),
      title: 'backlog',
      items: [
        {
          id: idCreator(),
          title: 'Сделать систему',
          description: 'Делаю систему авторизации',
          type: 'backlog'
        }
      ]
    },
    {
      id: idCreator(),
      title: 'process',
      items: [{id: idCreator(), title: 'Делаю систему', description: 'Делаю систему авторизации', type: 'process'}]
    },
    {
      id: idCreator(),
      title: 'done',
      items: [{id: idCreator(), title: 'Сделал систему', description: 'Делаю систему авторизации', type: 'done'}]
    }
  ]
};
export const ticketLisSlice = createSlice({
  name: 'ticketLisSlice',
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<ITicket>) => {
      for (let index = 0; index < state.ticketList.length; index++) {
        const element = state.ticketList[index];
        if (element.title === action.payload.type) {
          element.items.push(action.payload);
        }
      }
    },

    deleteTicket: (state, action: PayloadAction<number>) => {
      for (let index = 0; index < state.ticketList.length; index++) {
        const elements = state.ticketList[index];
        for (let index = 0; index < elements.items.length; index++) {
          const ticketElement = elements.items[index];
          if (ticketElement.id === action.payload) {
            const idx = elements.items.indexOf(ticketElement);
            elements.items.splice(idx, 1);
          }
        }
      }
    }
  }
});
export const {addTicket, deleteTicket} = ticketLisSlice.actions;

export default ticketLisSlice.reducer;
