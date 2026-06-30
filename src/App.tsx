import React from 'react'
import { ProductList } from './components/ProductList'
import './App.css'

function App() {

  return (
    <>
      <div className="App grid grid-cols-1 grid-rows-[auto_1fr] min-h-screen place-items-center gap-4">
        <header className="App-header">
          <h1 className="text-2xl font-bold">Product Catalog</h1>
        </header>
        <nav></nav>
        <main>
          <ProductList />
        </main>
      </div>
    </>
  )
}

export default App
