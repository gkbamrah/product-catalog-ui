import React, { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import type { Product } from '@/types/Product'

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)


    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/products/api/`)
            const data = await response.json()
            setProducts(data)
            console.log('Fetched products:', data) // Log the fetched data
            console.log('Hello')
        } catch (error) {
            setError('Failed to fetch products')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if (loading) {
        return <p>Loading products...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )

}