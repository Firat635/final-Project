import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './feature/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})