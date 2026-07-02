import React, { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import type { Product } from '@/types/Product'
import { Search } from 'lucide-react'
import { SearchForm } from './SearchForm'
import.meta.env.VITE_API_URL

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)


    const fetchProducts = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products/api/`)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            setError('Failed to fetch products')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const searchParams = async ({ search, category }) => {
        setLoading(true)
        setError(null)
        try {
            const queryParams = new URLSearchParams()
            if (search) queryParams.append('search', search)
            if (category) queryParams.append('category', category)

            const response = await fetch(`${import.meta.env.VITE_API_URL}/products/api/?${queryParams.toString()}`)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            setError('Failed to fetch products')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <p>Loading products...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <>  
            <SearchForm onSubmit={searchParams}/>
            <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )

}