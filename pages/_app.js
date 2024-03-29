import '@/styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from "../redux/slice"

export default function App({ Component, pageProps }) {
  const store =configureStore({
    reducer:{
      tasks:userReducer,
    }
  })
  return (
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  )
}
