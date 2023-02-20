import {configureStore} from '@reduxjs/toolkit';

import HoldTaskReducer from './slices/HoldTaskSlice';
import TicketsReducer from './slices/TicketListSlice';

const store = configureStore({
  reducer: {
    ticketList: TicketsReducer,
    holdTask: HoldTaskReducer
  }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
