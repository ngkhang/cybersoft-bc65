import { configureStore } from '@reduxjs/toolkit';

export const storeAdmin = configureStore({
  reducer: {
    numberAdmin: (state = 1) => state,
  }
})
