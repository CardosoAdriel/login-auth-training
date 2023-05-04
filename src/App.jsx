import React from 'react'
import RoutesApp from "./routes"
import AuthProvider from './contexts/auth'
import Layout from './components/Layout/Layout'
import { Provider } from 'react-redux'
import { store } from './store'


export default function App() {

  // serve para testarmos nossas mudanças do componente que usaremos
  // const handleTest = (e) => {
  //   e.preventDefault()
  //   console.log("BATEU ")
  // }

  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <RoutesApp />
        </Layout>
      </AuthProvider>
    </Provider>
  )
}
