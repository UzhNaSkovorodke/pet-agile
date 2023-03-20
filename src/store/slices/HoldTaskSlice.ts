import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import ITicket from '../interface/ITicket';

export interface TicketState {
  name: string;
  holdTask: ITicket;
}

const initialState: TicketState = {
  name: 'holdTask',
  holdTask: {
    id: -1,
    title: 'Здесь должна быть таска с которой работам',
    description: 'Здесь должна быть таска с которой работам',
    type: 'backlog',
    tags: []
  }
};

export const holdTaskSlice = createSlice({
  name: 'holdTaskSlice',
  initialState,
  reducers: {
    setHoldTask: (state, action: PayloadAction<ITicket>) => {
      state.holdTask = action.payload;
    },
    setIdHoldTask: (state, action: PayloadAction<number>) => {
      state.holdTask.id = action.payload;
    }
  }
});
export const {setHoldTask, setIdHoldTask} = holdTaskSlice.actions;

export default holdTaskSlice.reducer;
