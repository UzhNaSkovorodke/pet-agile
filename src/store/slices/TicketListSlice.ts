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
      title: 'Приготовить перекус',
      description: 'Я не завтракал, не ужинал и вообще нужно питаться!',
      type: 'backlog',
      tags: ['Прочее']
    },
    {
      id: idCreator(),
      title: 'Сделать релиз',
      description:
        'Нужно именно сегодня зарелизить систему связи клиента с тех поддержкой, чтобы улучшить комфорт пользователей раз и навсегда',
      type: 'backlog',
      tags: ['Tech']
    },
    {
      id: idCreator(),
      title: 'Делаю ревью',
      description:
        'Тут сами знаете какой джун обнаружил конфликты, когда пытался закоммитить последний багфикс! Он попросил помочь ему с этим и глянуть что да как. Сижу делаю.',
      type: 'process',
      tags: ['Codereview', 'Develop']
    },
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
