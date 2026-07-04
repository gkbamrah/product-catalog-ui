import { ProductList } from './components/ProductList'
import './App.css'

function App() {

  return (
    <>
      <div className="App grid grid-cols-1 grid-rows-[auto_1fr] min-h-screen place-items-center gap-4 m-4">
        <header className="App-header my-4 md:my-2">
          <h1 className="text-3xl font-bold">Product Catalog</h1>
        </header>
        <main >
          <ProductList />
        </main>
      </div>
    </>
  )
}

export default App
