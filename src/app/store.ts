import { configureStore } from '@reduxjs/toolkit'
import tu from './reducer'
import auth from './authReducer'

export default configureStore({
  reducer: {
    cart: tu,
    auth: auth,

  },
})