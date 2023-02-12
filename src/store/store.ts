import { configureStore } from '@reduxjs/toolkit'

import TicketsReducer from './TicketsSlice'

const store = configureStore({
	reducer: {
		tickets: TicketsReducer
	}
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
