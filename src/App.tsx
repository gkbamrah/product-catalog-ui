import { ProductList } from './components/ProductList'
import { useProducts } from './hooks/useProducts'

import './App.css'
import { SearchForm } from './components/SearchForm'

function App() {
  const { products, loading, error, searchParams } = useProducts()


  return (
    <>
      <div className="App grid grid-cols-1 grid-rows-[auto_1fr] min-h-screen gap-4 m-4">
        <header className="App-header max-w-5xl mx-auto place-items-center my-4 md:my-2">
          <h1 className="text-3xl font-bold">Product Catalog</h1>
          <SearchForm onSubmit={searchParams} />
        </header>
        <main className="max-w-5xl mx-auto px-6 pb-6">
          <ProductList products={products} loading={loading} error={error} />
        </main>
      </div>
    </>
  )
}

export default App
