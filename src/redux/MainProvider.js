'use client';

import React from 'react'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './store'
import { Provider } from 'react-redux'


function MainProvider({children}) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
        </PersistGate>
      </Provider>
  )
}

export default MainProvider