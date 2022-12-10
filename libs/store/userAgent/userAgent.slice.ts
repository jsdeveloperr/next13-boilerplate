import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { UserAgent } from '@/libs/types/userAgent.type';
import type { RootState } from '@/store/store';

export interface UserAgentState {
  userAgent: UserAgent;
}

const initialState: UserAgentState = {
  userAgent: {} as UserAgent,
};

// slice
export const userAgentSlice = createSlice({
  name: 'userAgent',
  initialState,
  reducers: {
    setUserAgent(state, action: PayloadAction<UserAgent>) {
      state.userAgent = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.userAgent,
      };
    },
  },
});

// Actions
export const userAgentActions = {
  setUserAgent: userAgentSlice.actions.setUserAgent,
};

// Selectors
export const selectUserAgent = (state: RootState) => state.userAgent.userAgent;

// Reducer
export default userAgentSlice.reducer;
