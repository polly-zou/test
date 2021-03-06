import { systemReducer } from './lifeVlog/reducers'
import { chatReducer } from './common/reducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
})

export type AppState = ReturnType<typeof rootReducer>